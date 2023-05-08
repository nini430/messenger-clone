'use client';
import useRoutes from '@/app/hooks/useRoutes';
import React from 'react';
import DesktopItem from './DesktopItem';

const DesktopSidebar = () => {
  const routes = useRoutes();
  return (
    <div className="hidden lg:fixed lg:w-20 lg:h-full lg:border-r-[1px] lg:p-4 lg:flex lg:flex-col lg:justify-between">
      <nav>
        <ul className="flex flex-col ">
          {routes.map((route) => (
            <DesktopItem
              key={route.label}
              href={route.href}
              icon={route.icon}
              label={route.label}
              active={route.active}
              onClick={route.onClick}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
