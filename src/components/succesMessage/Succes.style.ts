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
  @media screen and (min-width: 468px) {
    height: 22rem;
    width: 22rem;
    border-radius: 0.9rem;
    padding: 1.3rem 1.9rem;
  }
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
  @media screen and (min-width: 468px) {
    margin: 0.2rem 0 1rem 0;
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
