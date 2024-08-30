import React, { useEffect,useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import UseFetch from '../hooks/useFetch';


const piechart = () => {
 
  const data = [
    { name: 'Project A', value: 400 },
    { name: 'Project B', value: 300 },
    { name: 'Project C', value: 300 },
    { name: 'Project D', value: 200 },
    { name: 'Project E', value: 278 },
    { name: 'Project F', value: 189 },
    { name: 'Project G', value: 239 },
    { name: 'Project H', value: 349 },
    { name: 'Project I', value: 120 },
    { name: 'Project J', value: 430 },
    { name: 'Project K', value: 210 },
    { name: 'Project L', value: 400 },
    { name: 'Project M', value: 320 },
    { name: 'Project N', value: 150 }
  ];
  

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