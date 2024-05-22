import React, {FC, ReactNode} from 'react'

type SubmitButtonType = {
    children: ReactNode
}

const SubmitButton: FC<SubmitButtonType> = ({
    children
}) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        {children}
    </button>
  )
}

export default SubmitButton