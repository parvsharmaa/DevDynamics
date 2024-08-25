import React from 'react';
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

interface StatCardProps {
  ind: number;
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ ind, title, value, change }) => {
  const negative = change.charAt(0) === '-';
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`p-6 rounded-xl shadow ${
        darkMode
          ? 'bg-gray-700'
          : (ind + 1) % 2 === 0
          ? 'bg-blue-100'
          : 'bg-yellow-50'
      }`}
    >
      <h3 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        {title}
      </h3>
      <div className='flex flex-wrap gap-4 mt-1 items-center'>
        <p
          className={`text-3xl font-semibold ${
            darkMode ? 'text-gray-200' : 'text-black'
          }`}
        >
          {value}
        </p>
        <p
          className={`text-md flex gap-1 justify-between ${
            negative ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {change}
          {negative ? (
            <ArrowTrendingDownIcon className='h-6 w-6' />
          ) : (
            <ArrowTrendingUpIcon className='h-6 w-6' />
          )}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
