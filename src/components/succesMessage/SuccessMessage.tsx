import SuccessIcon from '../../assets/icon-success.svg';

import {
  Container,
  Wrapper,
  SuccessImg,
  Title,
  Text,
  Button,
} from './Succes.style';

interface UserEmail {
  email: string;
}

export const SuccessMessage = ({ email }: UserEmail) => {
  const handleReturnToForm = () => {
    window.location.reload();
  };
  return (
    <Container>
      <Wrapper>
        <SuccessImg src={SuccessIcon} alt='' />
        <Title>Thanks for subscribing!</Title>
        <Text>
          A confirmation email has been sent to
          <span> {email}.</span> Please open it and click the button inside to
          confirm your subscription.
        </Text>
        <Button onClick={handleReturnToForm}>Dismiss message</Button>
      </Wrapper>
    </Container>
  );
};
