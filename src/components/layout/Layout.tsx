import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import NotificationsPanel from './NotificationPanel';
import { toggleDarkMode } from '../../redux/ThemeSlice';
import { RootState } from '../../redux/store/store';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [showNotifications, setShowNotifications] = useState<boolean>(true);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div
      className={`flex h-screen ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'
      }`}
    >
      <Sidebar />
      <div className='flex flex-col flex-1 overflow-hidden'>
        <Navbar
          onToggleDarkMode={() => dispatch(toggleDarkMode())}
          darkMode={darkMode}
          toggleNotifications={toggleNotifications}
        />
        <div
          className={`flex flex-1 overflow-hidden ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <main
            className={`flex-1 overflow-y-auto p-6 ${
              darkMode ? 'border-t-2 border-gray-600' : 'border-t-2'
            }`}
          >
            {children}
          </main>
        </div>
      </div>
      {showNotifications && <NotificationsPanel />}
    </div>
  );
}

export default Layout;
