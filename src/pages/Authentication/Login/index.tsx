import Branding from '@components/Branding';
import Layout from '@components/Layout';
import LoginForm from './Form';
import React from 'react';

const Login: React.FC = () => {
  return (
    <Layout
      TopComponent={Branding}
      BottomComponent={LoginForm}
      darkMode={true}
    />
  );
};

export default Login;
