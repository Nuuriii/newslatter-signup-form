import { useState } from 'react';
import { SuccessMessage } from './SuccessMessage';
import {
  Container,
  Wrapper,
  MobileImgWrapper,
  MobileImage,
  DesktopImgWrapper,
  DesktopImage,
  Information,
  Title,
} from './NewsLatter.style';

export const NewsLatter = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Container>
      {!isSubmitted ? (
        <Wrapper>
          <MobileImgWrapper>
            <MobileImage />
          </MobileImgWrapper>
          <Information>
            <Title>Stay updated!</Title>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src='' alt='' />
                <span>Product discovery and building what matters</span>
              </li>
              <li>
                <img src='' alt='' />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li>
                <img src='' alt='' />
                <span>And much more!</span>
              </li>
            </ul>
            <form onSubmit={handleSubmit}>
              <label htmlFor='email'>Email address</label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type='submit'>Subscribe to monthly newslater</button>
            </form>
          </Information>
          <DesktopImgWrapper>
            <DesktopImage src='' alt='' />
          </DesktopImgWrapper>
        </Wrapper>
      ) : (
        <SuccessMessage />
      )}
    </Container>
  );
};
/*
Stay updated!

  Join 60,000+ product managers receiving monthly updates on:

  Product discovery and building what matters
  Measuring to ensure updates are a success
  And much more!

  Email address
  email@company.com

  Subscribe to monthly newsletter
*/
