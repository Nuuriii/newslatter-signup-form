import { useState } from 'react';
import { SuccessMessage } from '../succesMessage/SuccessMessage';
import MobileImg from '../../assets/illustration-sign-up-mobile.svg';
import DesktopImg from '../../assets/illustration-sign-up-desktop.svg';
import IconList from '../../assets/icon-list.svg';
import {
  Container,
  Wrapper,
  MobileImgWrapper,
  MobileImage,
  DesktopImgWrapper,
  DesktopImage,
  Information,
  Title,
  Text,
  Ul,
  List,
  IconWrapper,
  ListIcon,
  Span,
  Form,
  LabelWrapper,
  Label,
  InputEmail,
  Button,
} from './NewsLatter.style';

export const NewsLatter = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const CheckError = () => {
    email.includes('.com') && email.includes('@')
      ? setError(false)
      : setError(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    error === true ? setIsSubmitted(false) : setIsSubmitted(true);
  };

  return (
    <Container>
      {!isSubmitted ? (
        <Wrapper>
          <MobileImgWrapper>
            <MobileImage src={MobileImg} />
          </MobileImgWrapper>
          <Information>
            <Title>Stay updated!</Title>
            <Text>
              Join 60,000+ product managers receiving monthly updates on:
            </Text>
            <Ul>
              <List>
                <IconWrapper>
                  <ListIcon src={IconList} alt='list icon' />
                </IconWrapper>
                <Span>Product discovery and building what matters</Span>
              </List>
              <List>
                <IconWrapper>
                  <ListIcon src={IconList} alt='list icon' />
                </IconWrapper>
                <Span>Measuring to ensure updates are a success</Span>
              </List>
              <List>
                <IconWrapper>
                  <ListIcon src={IconList} alt='list icon' />
                </IconWrapper>
                <Span>And much more!</Span>
              </List>
            </Ul>
            <Form onSubmit={handleSubmit}>
              <LabelWrapper $isError={error}>
                <Label htmlFor='email'>Email address</Label>
                <span>Valid email required</span>
              </LabelWrapper>
              <InputEmail
                $isError={error}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email@company.com'
                required
              />
              <Button onClick={CheckError} type='submit'>
                Subscribe to monthly newslater
              </Button>
            </Form>
          </Information>
          <DesktopImgWrapper>
            <DesktopImage src={DesktopImg} alt='' />
          </DesktopImgWrapper>
        </Wrapper>
      ) : (
        <SuccessMessage email={email} />
      )}
    </Container>
  );
};
