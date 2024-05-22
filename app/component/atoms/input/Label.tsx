import React, {FC} from 'react'

export type LabelType = {
    id: string
    label: string
}

const Label: FC<LabelType> = ({
    id,
    label
}) => {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
    </label>
  )
}

export default Label