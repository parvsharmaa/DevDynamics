import React from 'react';

interface ActivityItemProps {
  title: string;
  user: string;
  time: string;
  darkMode: boolean;
  last?: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  user,
  time,
  darkMode,
  last,
}) => {
  return (
    <div className='flex items-start space-x-3 mb-1'>
      <div>
        <img
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s`}
          alt={user}
          className='w-8 h-8 rounded-full'
        />
        {!last && (
          <div
            className={`ml-3.5  ${
              darkMode ? 'text-gray-700' : 'text-gray-200'
            }`}
          >
            |
          </div>
        )}
      </div>
      <div>
        <p className='text-sm font-medium'>{title}</p>
        <p className='text-xs text-gray-500'>{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
