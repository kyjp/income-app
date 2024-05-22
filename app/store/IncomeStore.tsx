import { create } from "zustand"

export type IncomeType = {
    id: string
    price: number
    year: number
    description: string
}

type IncomeStoreType = {
    incomes: IncomeType[]
    fetchIncome: (incomes: IncomeType[]) => void
    addIncome: (income: IncomeType) => void
    updateIncome: (income: IncomeType) => void
    removeIncome: (income: IncomeType) => void
}

export const IncomeStore = create<IncomeStoreType>((set) => ({
    incomes: [],
    fetchIncome: (incomes) => {
        return set(() => ({incomes}))
    },
    addIncome: (income) => {
        return set((state) => ({ incomes: [...state.incomes, income] }))
    },
    updateIncome: (income) => {
        return set((state) => ({ incomes: state.incomes.map((t) => t.id == income.id ? income : t) }))
    },
    removeIncome: (income) => {
        return set((state) => ({ incomes: state.incomes.filter((t) => t.id !== income.id) }))
    },
}))