import React, {FC, ReactNode} from 'react'

type CardType = {
    children: ReactNode
}

const Card: FC<CardType> = ({
    children
}) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {children}
    </div>
  )
}

export default Card