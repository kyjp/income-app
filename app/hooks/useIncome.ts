import axios from "axios"
import { IncomeType, IncomeStore } from "../store/IncomeStore"
import { useStore } from "zustand"
import { TokenStore } from "../store/TokenStore"
import { useUser } from "./useUser"

export const useIncome = () => {
    const {incomes, fetchIncome, addIncome, updateIncome, removeIncome} = IncomeStore()
    const {logout} = useUser()
    const {token} = TokenStore()
    const fetch = async () => {
        try {
            const res = await axios.get('http://localhost:9004/incomes', {headers: {
                Authorization: `Bearer ${token}`
            }})
            console.log(res)
            fetchIncome(res.data)
        } catch (error) {
            console.log(error)
            logout()
        }
    }
    const add = async (income: Omit<IncomeType, 'id'>) => {
        try {
            const res = await axios.post('http://localhost:9004/incomes', income, {headers: {
                Authorization: `Bearer ${token}`
            }})
            addIncome(res.data)
        } catch (error) {
            console.log(error)
            logout()
        }
    }
    const update = async (income: Omit<IncomeType, 'id'>, id: string) => {
        try {
            const res = await axios.put(`http://localhost:9004/incomes/${id}`, income, {headers: {
                Authorization: `Bearer ${token}`
            }})
            updateIncome(res.data)
        } catch (error) {
            console.log(error)
            logout()
        }
    }
    const remove = async (id: string) => {
        try {
            const res = await axios.delete(`http://localhost:9004/incomes/${id}`, {headers: {
                Authorization: `Bearer ${token}`
            }})
            removeIncome(res.data)
        } catch (error) {
            console.log(error)
            logout()
        }
    }

    return {
        incomes,
        fetch,
        add,
        update,
        remove
    }
}