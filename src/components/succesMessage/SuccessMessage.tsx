import SuccessIcon from '../../assets/icon-success.svg';
import { Container } from '../newslatter/NewsLatter.style';
import { Wrapper, SuccessImg, Title, Text } from './Succes.style';

export const SuccessMessage = () => {
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
          <span> ash@loremcompany.com.</span> Please open it and click the
          button inside to confirm your subscription.
        </Text>
        <button onClick={handleReturnToForm}>Dismiss message</button>
      </Wrapper>
    </Container>
  );
};
