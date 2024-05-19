import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

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

const Chart = ({ startData, title }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={startData}
            dataKey="value"
            nameKey="name"
            cx="30%"
            cy="50%"
            outerRadius={140}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {startData.map((entry) => (
              <Cell fill={entry.color} stroke={entry.color} key={entry.name} />
            ))}
          </Pie>
          <Legend
            verticalAlign="top"
            align="bottom"
            layout="horizontal"
            iconSize={14}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;