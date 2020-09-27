import { func } from "prop-types";
import React, { PureComponent } from "react";
import { PieChart, Pie, Cell } from "recharts";
import axios from "axios"
const COLORS = ["#f44336","#4caf50"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const token = localStorage.getItem("token");
let data=[];
async function Load() {
  try {
    const response = await axios({
      url: "http://localhost:8000/api/medicalData/",
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    const data1 = await response.data;
    console.log(data1)
    data = [
      { name: "positive", value: data1.positive },
      { name: "negative", value: data1.negative },
    ];
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default function Example() {
  Load();
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
