import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './devsignin.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

export default function DevSignin() {
  return (<>
   
      <div className="signup-container">
        <h1 id="heading"><strong>Login to our website</strong></h1>
        <form action="#">
            {/* <input type="email" id="email" name="email" placeholder="Enter your email" required /> */}
            <TextField id="outlined-basic" fullWidth label="Email" variant="outlined" 
            style={{ marginBottom: '16px' }}/>
            <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          autoComplete="current-password"
        />

            {/* <button type="submit" className="continue-btn">Continue</button> */}
            <Button id="continue-btn" variant="contained">Continue</Button>

        </form>

        <Divider>OR</Divider>

        <Button id="google-btn" variant="contained" startIcon={<GoogleIcon />}>
        Continue with google
      </Button>

      <Button id="apple-btn" variant="outlined" color='dark' startIcon={<AppleIcon />}>
        Continue with Apple
      </Button>
        {/* <button className="google-btn">Login with Google</button> */}
        {/* <button className="apple-btn">Login with Apple</button> */}
        <Divider id="do">don't have an account?</Divider>

        <Button id="signin-btn" variant="outlined" color='green' >
        Sign in
      </Button>
    </div>
    </>
    
  );
}