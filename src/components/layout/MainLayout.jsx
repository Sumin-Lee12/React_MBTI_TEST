import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const MainLayout = () => {
  return (
    <StContainer>
        <StHeader>
          <Header />
        </StHeader>
      <StContentWrapper>
        <Outlet />
      </StContentWrapper>
    </StContainer>
  )
}

export default MainLayout;

const StContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 50px 1fr;
`;

const StHeader = styled.div`
  grid-row: 1;
  grid-column: span 2;
  z-index: 100;
`;

const StContentWrapper = styled.div`
  grid-row: 2;
  grid-column: 2;
  overflow-y: auto;
`;