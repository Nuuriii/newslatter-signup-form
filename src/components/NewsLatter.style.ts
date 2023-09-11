import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileImgWrapper = styled.div`
  display: flex;
`;

export const MobileImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const DesktopImgWrapper = styled.div`
  display: none;
`;

export const DesktopImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: hsl(234, 29%, 20%);
`;
