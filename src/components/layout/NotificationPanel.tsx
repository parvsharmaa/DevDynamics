import React from 'react';
import NotificationItem from '../common/NotificationItem';
import ActivityItem from '../common/ActivityItem';
import { Notifications, Activities } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

function NotificationsPanel() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div
      className={`w-90 ${
        darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'
      } shadow-md overflow-y-auto`}
    >
      <div className='p-6'>
        <h2 className='text-lg font-semibold mb-4'>Notifications</h2>
        {Notifications.map((item, index) => (
          <NotificationItem
            key={index}
            title={item.title}
            time={item.time}
            icon={item.icon}
            darkMode={darkMode}
          />
        ))}
      </div>
      <div className='p-6'>
        <h2 className='text-lg font-semibold mb-4'>Activities</h2>
        {Activities.map((item, index) => (
          <ActivityItem
            key={index}
            title={item.title}
            user={item.user}
            time={item.time}
            darkMode={darkMode}
            last={index === Activities.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default NotificationsPanel;
