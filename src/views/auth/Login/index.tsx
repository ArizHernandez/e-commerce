import { Button, Divider, Paper } from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';

import classes from './Login.module.css';
import LoginForm from './LoginForm';

function Login() {
  return (
    <Paper elevation={0} className={classes.login}>
      <h2>Login</h2>
      <Divider />
      <LoginForm />
      <Divider>or</Divider>
      <Paper elevation={0} className={classes['login-options']}>
        <Button
          variant="contained"
          size="small"
          color="error"
          startIcon={<Google />}
        >
           Google
        </Button>
        <Button
          variant="contained"
          size="small"
          color="info"
          startIcon={<Facebook />}
        >
           Facebook
        </Button>
      </Paper>
    </Paper>
  );
}

export default Login;
