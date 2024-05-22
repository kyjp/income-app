"use client"
import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { IncomeType, IncomeStore } from '@/app/store/IncomeStore'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Income Chart',
    },
  },
}

type dataType = {
    labels: number[]
    datasets: {
        label: string
        data: number[]
        borderColor: string
        backgroundColor: string
      }[]
}

export function Chart() {
    const {incomes} = IncomeStore()
    const [data, setData] = useState<dataType>({
      labels: [],
      datasets: [
        {
          label: '平均年収',
          data: [3290000, 3510000, 3700000, 3850000, 3990000, 4090000, 4300000, 4440000],
          borderColor: 'rgb(243, 152, 0)',
          backgroundColor: 'rgba(243, 152, 0, 0.5)',
        },
        {
          label: '年収中央値',
          data: [2500000, 2650000, 2750000, 2800000, 2900000, 3000000, 3200000, 3300000],
          borderColor: 'rgb(3F, 98, 77)',
          backgroundColor: 'rgba(3F, 98, 77, 0.5)',
        },
        {
          label: '男性年収中央値',
          data: [2600000, 2800000, 3000000, 3200000, 3300000, 3500000, 3600000, 3700000],
          borderColor: 'rgb(15, 84, 116)',
          backgroundColor: 'rgba(15, 84, 116, 0.5)',
        }
      ],
    })
    useEffect(() => {
      let newLabelArray = incomes.map(item => item.year)
      let newIncomeArray = incomes.map(item => item.price)
      newLabelArray.sort()
      newIncomeArray.sort()
      setData({
        labels: newLabelArray,
        datasets: [
          {
            ...data.datasets[0]
          },
          {
            ...data.datasets[1]
          },
          {
            ...data.datasets[2]
          },
          {
            label: '年収',
            data: newIncomeArray,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ]
      })
    }, [incomes])
    return <Line options={options} data={data}/>
}