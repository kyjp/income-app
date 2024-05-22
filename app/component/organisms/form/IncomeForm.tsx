import React, { ChangeEvent, useState } from 'react'
import NumberLabelInput from '../../molecules/input/NumberLabelInput'
import TextLabelInput from '../../molecules/input/TextLabelInput'
import SubmitButton from '../../atoms/button/SubmitButton'
import { useIncome } from '@/app/hooks/useIncome'

const IncomeForm = () => {
    const [price, setPrice] = useState("")
    const [year, setYear] = useState("")
    const [description, setDescription] = useState("")
    const {add} = useIncome()
    const handleOnSubmit = async (e: any) => {
        e.preventDefault()
        add({
            price: Number(price),
            year: Number(year),
            description
        })
        setPrice("")
        setYear("")
        setDescription('')
    }
    return (
        <form onSubmit={handleOnSubmit}>
            <div className="flex flex-wrap mt-4">
                <div className="w-1/4">
                    <NumberLabelInput
                        label="年収"
                        placeholder="3000000"
                        id="price"
                        value={price}
                        errorText="年収を入力してください"
                        errorFlg={false}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {setPrice(e.target.value)}}
                    />
                </div>
                <div className="pl-4 w-1/4">
                    <NumberLabelInput
                        label="年数"
                        placeholder="2024"
                        id="year"
                        value={year}
                        errorText="説明文を入力してください"
                        errorFlg={false}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {setYear(e.target.value)}}
                    />
                </div>
                <div className="pl-4 w-2/4">
                    <TextLabelInput
                        label="説明文"
                        placeholder="説明文が入ります"
                        id="description"
                        value={description}
                        errorText="説明文を入力してください"
                        errorFlg={false}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {setDescription(e.target.value)}}
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <div>
                    <SubmitButton>
                        送信
                    </SubmitButton>
                </div>
            </div>
        </form>
    )
}

export default IncomeForm