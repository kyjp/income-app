import { create } from "zustand"

export type TokenStoreType = {
    token: string
    setToken: (token: string) => void
}

export const TokenStore = create<TokenStoreType>((set) => ({
    token: '',
    setToken: (token: string) => {
        return set((_) => ({ token: token }))
    }
}))