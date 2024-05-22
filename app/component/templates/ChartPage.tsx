"use client"
import React, { useEffect } from 'react'
import { Chart } from '../atoms/chart/Chart'
import IncomeForm from '../organisms/form/IncomeForm'
import { useIncome } from '@/app/hooks/useIncome'

const ChartPage = () => {
    const {fetch} = useIncome()
    useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            <div className="text-center">
                <Chart />
            </div>
            <div>
                <IncomeForm />
            </div>
        </div>
    )
}

export default ChartPage