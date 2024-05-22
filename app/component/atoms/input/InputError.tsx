import React, {FC} from 'react'

export type InputErrorType = {
    errorText: string
}

const InputError: FC<InputErrorType> = ({
    errorText
}) => {
  return (
    <p className="text-red-500 text-xs italic">
        {errorText}
    </p>
  )
}

export default InputError