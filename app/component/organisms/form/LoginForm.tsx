"use client"
import React, { ChangeEvent, useState } from 'react'
import Card from '../../atoms/card/Card'
import TextLabelInput from '../../molecules/input/TextLabelInput'
import PasswordLabelInput from '../../molecules/input/PasswordLabelInput'
import SubmitButton from '../../atoms/button/SubmitButton'
import Link from 'next/link'
import { useUser } from '@/app/hooks/useUser'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, setError} = useUser()
    const handleOnSubmit = async (e: any) => {
        e.preventDefault()
        login({
            username: username,
            password: password
        })
    }
    return (
        <Card>
            <form onSubmit={handleOnSubmit}>
                {error && <p className="text-red-600 text-base mb-1 font-bold">{error}</p>}
                <TextLabelInput
                    id="username"
                    label="ユーザーネーム"
                    placeholder="user1"
                    value={username}
                    errorText="ユーザーネームが間違っています。"
                    errorFlg={false}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}}
                />
                <PasswordLabelInput
                    id="password"
                    label="パスワード"
                    placeholder="*********"
                    value={password}
                    errorText="パスワードが間違っています。"
                    errorFlg={false}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)}}
                />
                <div className="text-right">
                    <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="submit">
                        Forgot Password?
                    </button>
                </div>
                <div className="mt-2 text-center">
                    <SubmitButton>
                        ログインする
                    </SubmitButton>
                </div>
                <div className="text-center mt-2">
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/signup">
                        ユーザー登録する
                    </Link>
                </div>
            </form>
        </Card>
    )
}

export default LoginForm