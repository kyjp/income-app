import React, {FC} from 'react'
import Label, { LabelType } from '../../atoms/input/Label'
import EmailInput, { EmailInputType } from '../../atoms/input/EmailInput'
import InputError, { InputErrorType } from '../../atoms/input/InputError'

type EmailLabelInputType = LabelType & EmailInputType & InputErrorType & {
    errorFlg: boolean
}

const EmailLabelInput: FC<EmailLabelInputType> = ({
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
        <EmailInput
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

export default EmailLabelInput