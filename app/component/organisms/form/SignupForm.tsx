"use client"
import React, { ChangeEvent, useState } from 'react'
import Card from '../../atoms/card/Card'
import EmailLabelInput from '../../molecules/input/EmailLabelInput'
import PasswordLabelInput from '../../molecules/input/PasswordLabelInput'
import SubmitButton from '../../atoms/button/SubmitButton'
import Link from 'next/link'
import TextLabelInput from '../../molecules/input/TextLabelInput'
import { useUser } from '@/app/hooks/useUser'

const SignupForm = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {register} = useUser()
    const handleOnSubmit = async (e: any) => {
        e.preventDefault()
        register({
            username: username,
            email: email,
            password: password
        })
    }
    return (
        <Card>
            <form onSubmit={handleOnSubmit}>
                <TextLabelInput
                    id="username"
                    label="名前"
                    placeholder="user1"
                    value={username}
                    errorText="名前が間違っています。"
                    errorFlg={false}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => {setUsername(e.target.value)}}
                />
                <EmailLabelInput
                    id="email"
                    label="メールアドレス"
                    placeholder="user1@example.com"
                    value={email}
                    errorText="メールアドレスが間違っています。"
                    errorFlg={false}
                    onChange={(e:ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}
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
                <div className="mt-2 text-center">
                    <SubmitButton>
                        登録する
                    </SubmitButton>
                </div>
                <div className="text-center mt-2">
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                        ログインする
                    </Link>
                </div>
            </form>
        </Card>
    )
}

export default SignupForm