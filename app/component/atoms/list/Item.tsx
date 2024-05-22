import React, { FC, MouseEvent } from 'react'
import SubmitButton from '../button/SubmitButton'
import { IncomeType } from '@/app/store/IncomeStore'

type ItemProps = {
    income: IncomeType
    onUpdate: (event: MouseEvent<HTMLButtonElement>) => void
    onDelete: (event: MouseEvent<HTMLButtonElement>) => void
}

const Item: FC<ItemProps> = ({
    income,
    onUpdate,
    onDelete
}) => {
  return (
    <li className="flex">
        <div>
            {income.id}
        </div>
        <div>
            {income.year}
        </div>
        <div>
            {income.price}
        </div>
        <div>
            <div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onUpdate}
                >
                    選択
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={onDelete}
                >
                    削除
                </button>
            </div>
        </div>
    </li>
  )
}

export default Item