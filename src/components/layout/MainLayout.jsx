import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const MainLayout = () => {
  return (
    <StContainer>
      <Outlet/>
    </StContainer>

  )
}

export default MainLayout;


const StContainer = styled.div`
  height: 100%;
  width: 100%;
`;