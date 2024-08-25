import React from 'react';

interface NotificationItemProps {
  title: string;
  time: string;
  icon: React.ReactElement;
  darkMode: boolean;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  time,
  icon,
  darkMode,
}) => {
  return (
    <div
      className={`flex items-start space-x-3 mb-4 ${
        darkMode ? '' : 'bg-white'
      }`}
    >
      <div className='mt-1'>{icon}</div>
      <div>
        <p
          className={`text-sm font-medium ${
            darkMode ? 'text-gray-300' : 'text-gray-800'
          }`}
        >
          {title}
        </p>
        <p
          className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}
        >
          {time}
        </p>
      </div>
    </div>
  );
};

export default NotificationItem;
