import React, { useEffect,useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import UseFetch from '../hooks/useFetch';


const piechart = ({data}) => {
 


  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    <h2 className="text-center font-bold text-xl w-full bg-blue-400 text-white">Entries with most Time</h2>
  </ResponsiveContainer>
  )
}

export default piechart