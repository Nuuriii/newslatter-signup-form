import styled from 'styled-components';
import Roboto from '../../assets/fonts/Roboto-Regular.ttf';
import BoldRoboto from '../../assets/fonts/Roboto-Bold.ttf';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: hsl(235, 18%, 26%);
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
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 32rem;
    width: 45rem;
    padding: 1rem;
    border-radius: 1.1rem;
  }
`;

export const MobileImgWrapper = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const DesktopImgWrapper = styled.div`
  display: none;
  height: 100%;
  width: auto;
  @media screen and (min-width: 768px) {
    display: flex;
  }
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
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 1rem 0;
    margin: 0 2.5rem 0 2rem;
  }
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
  margin: 1rem 0;
`;

export const LabelWrapper = styled.div<{ $isError: boolean }>`
  display: flex;
  justify-content: space-between;
  span {
    display: ${(props) => (props.$isError ? 'block' : 'none')};
    color: hsl(4, 100%, 67%);
    font-size: 0.8rem;
  }
`;

export const Label = styled.label`
  font-family: BoldRoboto, serif;
  color: hsl(234, 29%, 20%);
  font-size: 0.8rem;
`;

export const InputEmail = styled.input<{ $isError: boolean }>`
  border: none;
  border-radius: 0.4rem;
  outline: 1px solid hsl(231, 7%, 60%);
  padding: 1rem;
  font-family: BoldRoboto, serif;
  margin: 0.3rem 0 1.3rem 0;
  &:focus {
    outline: 1px solid
      ${(props) =>
        props.$isError ? 'hsl(4, 100%, 67%)' : 'hsl(234, 29%, 20%)'};
    color: hsl(234, 29%, 20%);
    &::placeholder {
      font-family: BoldRoboto, serif;
      color: ${(props) =>
        props.$isError ? 'hsl(4, 100%, 67%)' : 'hsl(234, 29%, 20%)'};
    }
  }
`;

export const Button = styled.button`
  color: hsl(0, 0%, 100%);
  font-family: BoldRoboto, serif;
  border: none;
  background-color: hsl(234, 29%, 20%);
  padding: 1rem;
  border-radius: 0.4rem;
  text-align: center;
  &:active {
    transform: scale(0.989);
  }
  &:hover {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(249, 46, 97, 1) 0%,
      rgba(251, 87, 67, 1) 54%,
      rgba(244, 94, 3, 1) 100%
    );
    color: hsl(0, 0%, 100%);
  }
`;
