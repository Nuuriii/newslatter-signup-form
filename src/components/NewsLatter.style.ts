import styled from 'styled-components';
import Roboto from '../assets/fonts/Roboto-Regular.ttf';
import BoldRoboto from '../assets/fonts/Roboto-Bold.ttf';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: hsl(234, 29%, 20%);
  justify-content: center;
  align-items: center;

  @font-face {
    font-family: Roboto;
    src: url(${Roboto});
  }

  @font-face {
    font-family: BoldRoboto;
    src: url(${BoldRoboto});
  }
`;

export const Wrapper = styled.div`
  display: flex;
  background-color: hsl(0, 0%, 100%);
  flex-direction: column;
  height: 100%;
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
  font-family: Roboto, serif;
  display: flex;
  padding: 1.8rem 1.5rem;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-family: BoldRoboto, serif;
  color: hsl(234, 29%, 20%);
  font-weight: 700;
  font-size: 2.2rem;
`;

export const Text = styled.p`
  color: hsl(235, 18%, 26%);
  margin: 1rem 0;
  font-size: 1rem;
`;

export const Ul = styled.ul`
  list-style: none;
`;

export const List = styled.li`
  display: flex;
  margin-bottom: 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ListIcon = styled.img`
  margin: 0 0.9rem 0 0;
`;

export const Span = styled.span`
  color: hsl(234, 29%, 20%);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: BoldRoboto, serif;
  color: hsl(234, 29%, 20%);
`;

export const InputEmail = styled.input`
  border: none;
  border-radius: 0.4rem;
  outline: 1px solid hsl(231, 7%, 60%);
  padding: 1rem;
  &:focus {
    outline: 2px solid hsl(234, 29%, 20%);
  }
`;
