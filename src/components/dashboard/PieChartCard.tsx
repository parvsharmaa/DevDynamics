import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface PieChartCardProps {
  title: string;
  data: { name: string; activeDays: number }[];
}

const PieChartCard: React.FC<PieChartCardProps> = ({ title, data }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`p-4 rounded-lg shadow ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-4 ${
          darkMode ? 'text-gray-300' : 'text-gray-800'
        }`}
      >
        {title}
      </h3>
      <ResponsiveContainer width='100%' height={300}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={60}
            outerRadius={100}
            fill={darkMode ? '#8884d8' : '#8884d8'}
            paddingAngle={5}
            dataKey='activeDays'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`${value}`, 'Days']}
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              border: 'none',
              borderRadius: '4px',
            }}
            itemStyle={{ color: darkMode ? '#fff' : '#000' }}
          />
          <Legend
            layout='vertical'
            align='right'
            verticalAlign='middle'
            iconType='circle'
            wrapperStyle={{ color: darkMode ? '#ccc' : '#333' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartCard;
