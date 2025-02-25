import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const MainLayout = () => {
  return (
    <div className='h-full grid grid-rows-[50px_1fr]'>
      <div className='row-span-1 z-50 bg-orange-50'>
        <Header />
      </div>
      <div className='row-start-2 overflow-y-auto'>
      <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;

