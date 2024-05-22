import React, {FC} from 'react'
import Label, { LabelType } from '../../atoms/input/Label'
import NumberInput, { NumberInputType } from '../../atoms/input/NumberInput'
import InputError, { InputErrorType } from '../../atoms/input/InputError'

type NumberLabelInputType = LabelType & NumberInputType & InputErrorType & {
    errorFlg: boolean
}

const NumberLabelInput: FC<NumberLabelInputType> = ({
    label,
    placeholder,
    id,
    value,
    onChange,
    errorText,
    errorFlg
}) => {
  return (
    <div className="mb-4">
        <Label
            id={id}
            label={label}
        />
        <NumberInput
            id={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {
            errorFlg && <InputError
                errorText={errorText}
            />
        }
    </div>
  )
}

export default NumberLabelInput