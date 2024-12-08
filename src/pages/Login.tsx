import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/resimator-logo.png';
import bgImg from '../assets/building 1.png';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, setAuthToken } from '../features/auth/authSlice';
import { AppDispatch, RootState } from '../store/store';
import useLocalStorage from '../hooks/useLocalStorage';
import CustomCheckbox from '../components/UI/CustomCheckbox';
import useMediaQuery from '../hooks/useMediaQuery';
import LanguageDropdown from '../components/UI/LanguageDropdown';

type FieldType = {
  email?: string;
  password?: string;
  remember?: boolean;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const StyledBgWrapper = styled.div`
  background-image: url(${bgImg});
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
`;

const StyledLogoContentWrapper = styled.div`
  position: absolute;
  top: 136px;
  left: 71px;
  width: 400px;
  max-width: calc(100% - 71px);
  color: #fff;
`;

const StyledLogoWrapper = styled.div`
  width: 226px;
  max-width: 100%;
  margin-bottom: 63px;
`;

const StyledContentWrapper = styled.div`
  p {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StyledCopyrightTextContainer = styled.div`
  position: absolute;
  bottom: 42px;
  left: 64px;
  color: white;
  font-size: 13px;
  line-height: 1.1;
`;

const StyledSignInFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 16px;
  .sign-in-wrapper-inner {
    width: 390px;
  }
`;

const SignupFormHeaderWrapper = styled.div`
  text-align: center;
  margin-bottom: 48px;
  h2 {
    font-weight: 500;
    margin-bottom: 15px;
  }
`;

const StyledForm = styled(Form)`
  .email {
    margin-bottom: 32px;
  }
  .password {
  margin-bottom: 16px;
  }
`;

const StyledFormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  .ant-form-item{
  margin-bottom: 40px
  }
`;

const LanguageDropdownWrapper = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 999;
`;
const SignInFormContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use the typed dispatch
  const navigate = useNavigate();
  const { status, error, token, user } = useSelector((state: RootState) => state.auth);

  // Use localStorage hook
  const [, setJwtToken] = useLocalStorage<string>('jwtToken', '');
  const [, setUserDetails] = useLocalStorage<object>('user', {});

  useEffect(() => {
    if (token && user) {
      // Store JWT token and user details in localStorage when available
      setJwtToken(token);
      setUserDetails(user);

      // Dispatch setAuthToken to update Redux stsore
      dispatch(setAuthToken(token));

      // Redirect to dashboard or home page
      navigate('/dashboard');
    }
  }, [token, user, setJwtToken, setUserDetails, dispatch, navigate]);

    // Load saved credentials from localStorage
    const savedEmail = localStorage.getItem('email') || '';
    const savedPassword = localStorage.getItem('password') || '';

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
      dispatch(loginAsync(values as any)); // Dispatch the thunk with correct typing
      
      if (values.remember) {
        // Store email and password in localStorage if remember me is checked
        localStorage.setItem('email', values.email || '');
        localStorage.setItem('password', values.password || '');
      } else {
        // Clear stored credentials if remember me is unchecked
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }
    };
  

  return (
    <div className="sign-in-wrapper-inner">
      <SignupFormHeaderWrapper>
        <h2>
          Sign in to <strong>Resimator</strong>
        </h2>
        <p className="link-text-small">
          Please sign in to Resimator using email & password received in your email.
        </p>
      </SignupFormHeaderWrapper>

      <StyledForm
        name="basic"
        initialValues={{
          email: savedEmail, // Set saved email
          password: savedPassword, // Set saved password
          remember: savedEmail ? true : false, // If email exists, check remember me
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'

      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          label="Email"
          className='email'
        // style={{ marginBottom: '32px' }}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          label="Password"
          className='password'
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <StyledFormOptions>
          <Form.Item name="remember" valuePropName="checked">
            <CustomCheckbox>Remember me</CustomCheckbox>
          </Form.Item>
          <Link to="/forgot-password">Forgot password?</Link>
        </StyledFormOptions>
        {/* Display error message here */}
        {error && (
          <Form.Item>
            <div style={{ color: 'red', textAlign: 'center' }}>
              {/* {error as any} */}
              Username or password is incorrect.
            </div>
          </Form.Item>
        )}
        <Form.Item>
          <Button type="primary" htmlType="submit" block className='submit-button'>
            Sign In
          </Button>
        </Form.Item>
      </StyledForm>
    </div>
  );
};

const SignInForm: React.FC = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.auth); // Get token from Redux state
  const isDesktop = useMediaQuery('(min-width: 991px)');
  useEffect(() => {
    if (token) {
      // If the user is already logged in, navigate to the dashboard
      navigate('/dashboard');
    }
  }, [token, navigate]); // Only re-run if token changes

  return (
    <Row gutter={[16, 16]}>
      <LanguageDropdownWrapper>
      <LanguageDropdown />
      </LanguageDropdownWrapper>
     
      {isDesktop && (
        <Col xs={24} lg={8}>
          <StyledBgWrapper>
            <StyledLogoContentWrapper>
              <StyledLogoWrapper>
                <img src={logo} alt="logo" />
              </StyledLogoWrapper>
              <StyledContentWrapper>
                <p>Effortlessly Manage Your Property</p>
                <h1>Add, Buy, or Rent with Ease!</h1>
              </StyledContentWrapper>
            </StyledLogoContentWrapper>
          </StyledBgWrapper>
          <StyledCopyrightTextContainer>
            <p>2024 Resimator. All rights reserved.</p>
          </StyledCopyrightTextContainer>
        </Col>
      )}

      <Col xs={24} lg={16}>
        <StyledSignInFormWrapper>
          <SignInFormContent />
        </StyledSignInFormWrapper>
      </Col>
    </Row>
  );
};

export default SignInForm;
