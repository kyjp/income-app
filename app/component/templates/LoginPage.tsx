import React, {FC} from 'react'
import LoginForm from '../organisms/form/LoginForm'

const LoginPage: FC = () => {
  return (
    <div className="w-full h-lvh overflow-hidden px-3 py-10 bg-gray-200 flex justify-center items-center">
        <LoginForm />
    </div>
  )
}

export default LoginPage