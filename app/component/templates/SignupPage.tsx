import React, {FC} from 'react'
import SignupForm from '../organisms/form/SignupForm'

const SignupPage: FC = () => {
  return (
    <div className="w-full h-lvh overflow-hidden px-3 py-10 bg-gray-200 flex justify-center items-center">
        <SignupForm />
    </div>
  )
}

export default SignupPage