import React, {FC} from 'react'
import PasswordInput, { PasswordInputType } from '../../atoms/input/PasswordInput'
import InputError, { InputErrorType } from '../../atoms/input/InputError'
import Label, { LabelType } from '../../atoms/input/Label'

type PasswordLabelInputType = LabelType & PasswordInputType & InputErrorType & {
    errorFlg: boolean
}

const PasswordLabelInput: FC<PasswordLabelInputType> = ({
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
        <PasswordInput
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

export default PasswordLabelInput