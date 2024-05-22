import { create } from "zustand"

export type UserType = {        
    id: string,
    email: string,
    username: string
}

export type UserStoreType = {
    user: UserType
    setUser: (user: UserType) => void
    removeUser: () => void
}

export const UserStore = create<UserStoreType>((set) => ({
    user: {
        id: '',
        email: '',
        username: ''
    },
    setUser: (user: UserType) => {
        return set((_) => ({ user: user }))
    },
    removeUser: () => {
        return set((_) => ({ user: {            
            id: '',
            email: '',
            username: ''
        }}))
    }
}))