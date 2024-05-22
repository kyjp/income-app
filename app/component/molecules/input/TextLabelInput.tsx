import React, {FC} from 'react'
import Label, { LabelType } from '../../atoms/input/Label'
import TextInput, { TextInputType } from '../../atoms/input/TextInput'
import InputError, { InputErrorType } from '../../atoms/input/InputError'

type TextLabelInputType = LabelType & TextInputType & InputErrorType & {
    errorFlg: boolean
}

const TextLabelInput: FC<TextLabelInputType> = ({
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
        <TextInput
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

export default TextLabelInput