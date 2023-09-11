import SuccessIcon from '../../assets/icon-success.svg';
import { Container, Wrapper } from '../newslatter/NewsLatter.style';

export const SuccessMessage = () => {
  const handleReturnToForm = () => {
    window.location.reload();
  };
  return (
    <Container>
      <Wrapper>
        <img src={SuccessIcon} alt='' />
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to ash@loremcompany.com. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button onClick={handleReturnToForm}>Dismiss message</button>
      </Wrapper>
    </Container>
  );
};
