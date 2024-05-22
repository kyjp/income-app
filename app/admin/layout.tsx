import {ReactNode} from 'react'
import Header from '../component/molecules/header/Header'

export default function ProductLayout({ children }: {children: ReactNode}) {
    return (
        <section className="">
            <Header />
            <main className="px-2 pb-4 max-w-[1200px] mx-auto">{children}</main>
        </section>
    )
}