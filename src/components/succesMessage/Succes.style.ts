import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: hsl(0, 0%, 100%);
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  font-family: Roboto, serif;
`;

export const SuccessImg = styled.img`
  height: 3rem;
  width: auto;
`;

export const Title = styled.h1`
  font-family: BoldRoboto, serif;
  color: hsl(234, 29%, 20%);
  font-weight: 700;
  margin: 1rem 0;
  font-size: 2rem;
`;

export const Text = styled.p`
  color: hsl(235, 18%, 26%);
  margin: 0.2rem 0 10rem 0;
  font-size: 1rem;
  span {
    font-family: BoldRoboto, serif;
    color: hsl(234, 29%, 20%);
  }
`;

export const Button = styled.button`
  color: hsl(0, 0%, 100%);
  font-family: BoldRoboto, serif;
  border: none;
  width: 100%;
  background-color: hsl(234, 29%, 20%);
  padding: 1rem;
  border-radius: 0.4rem;
  text-align: center;
  &:active {
    transform: scale(0.989);
  }
`;
