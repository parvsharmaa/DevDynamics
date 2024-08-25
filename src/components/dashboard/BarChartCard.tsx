import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

interface BarChartCardProps {
  title?: string;
  data: Array<{ name: string; value: number; color?: string }>;
}

const BarChartCard: React.FC<BarChartCardProps> = ({ title = '', data }) => {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const maxValue = Math.max(...data.map((entry) => entry.value));
  const padding = maxValue * 0.1;

  return (
    <div
      className={`p-4 rounded-lg shadow ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <h3
        className={`text-lg font-semibold mb-20 ${
          darkMode ? 'text-gray-300' : 'text-gray-800'
        }`}
      >
        {title}
      </h3>
      <ResponsiveContainer width='100%' height={240}>
        <BarChart data={data}>
          <CartesianGrid
            strokeDasharray='3 3'
            stroke={darkMode ? '#555' : '#ccc'}
          />
          <XAxis dataKey='name' stroke={darkMode ? '#ccc' : '#555'} />
          <YAxis
            domain={[0, maxValue + padding]}
            stroke={darkMode ? '#ccc' : '#555'}
          />
          <Tooltip
            formatter={(value) => [`${value}`, 'Contributions']}
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              border: 'none',
              borderRadius: '4px',
            }}
            itemStyle={{ color: darkMode ? '#fff' : '#000' }}
          />
          <Bar dataKey='value' barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCard;
