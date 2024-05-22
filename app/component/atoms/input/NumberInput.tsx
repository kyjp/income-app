import React, {ChangeEvent, FC} from 'react'

export type NumberInputType = {
    id: string
    placeholder: string
    value: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const NumberInput: FC<NumberInputType> = ({
    placeholder,
    id,
    value,
    onChange
}) => {
  return (
    <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
  )
}

export default NumberInput