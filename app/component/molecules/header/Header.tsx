"use client"
import { useUser } from '@/app/hooks/useUser'
import { TokenStore } from '@/app/store/TokenStore'
import { UserStore } from '@/app/store/UserStore'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const {token} = TokenStore()
    const {logout} = useUser()
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="lx cxn">
                    <h1 className="font-bold">
                        <Link href="/">
                            Income App
                        </Link>
                    </h1>
                </div>
                <div className="flex lg:flex-1 items-center justify-end">
                    {
                        token ? <button className="text-sm font-semibold leading-6 text-gray-900" onClick={logout}>Log out <span aria-hidden="true">&rarr;</span></button> : <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
                    }
                    <Link href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm ml-4">Sign up</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header