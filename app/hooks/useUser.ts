import axios from "axios"
import { UserStore } from "../store/UserStore"
import { TokenStore } from "../store/TokenStore"
import { useRouter } from 'next/navigation'
import { useState } from "react"

type UserFormType = {
    'username': string
    'email': string
    'password': string
}

export const useUser = () => {
    const {user, setUser, removeUser} = UserStore()
    const [error, setError] = useState('')
    const {setToken} = TokenStore()
    const router = useRouter()
    const register = async (user: UserFormType) => {
        try {
            const res = await axios.post('http://localhost:9004/auth/signup', user)
            setUser(res.data)
            const token = await axios.post('http://localhost:9004/auth/login', user, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            setToken(token.data.access_token)
            router.push("/admin/")
        } catch (error) {
            console.log(error)
        }
    }
    const login = async (user: Omit<UserFormType, 'email'>) => {
        try {
            const token = await axios.post('http://localhost:9004/auth/login', user, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            setToken(token.data.access_token)
            const userInfo = await axios.get('http://localhost:9004/auth/me', {headers: {
                Authorization: `Bearer ${token.data.access_token}`, withCredentials: true
            }})
            setUser({id: userInfo.data.id, username: userInfo.data.username, email: userInfo.data.email})
            router.push("/admin/")
        } catch (error) {
            console.log(error)
            setError('メールアドレスかパスワードが間違っています')
        }
    }
    const logout = async () => {
        setToken('')
        removeUser()
        location.href = "/login/"
    }

    return {
        user,
        register,
        login,
        logout,
        error,
        setError
    }
}