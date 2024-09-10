import React from "react";
import './devsignup.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';


const currencies = [
    {
      value: 'India',
      
    },
    {
      value: 'USA',
      
    },
    {
      value: 'Canada',
      
    },
    {
      value: 'Australia',
      
    },
  ];

export default function DevSignup() {

    return(<>
    <body>
    <div className="signin-container" style={{width:'50%'}}>
        <h1 id="heading"
        style={{marginTop: '300px'}}
        >Sign Up to the Website</h1>

        
        {/* <input type="text" placeholder="First Name" /> */}
        <TextField id="first-name" label="First name" color="grey"
         fullWidth
        //  style={{marginTop: '400px'}}
         focused />

        <TextField id="last-name" label="Last name" color="grey" style={{marginTop: '25px'}} fullWidth focused />
        <TextField id="email" label="Email" color="grey" focused fullWidth 
        style={{marginTop: '25px'}}/>
        
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          style={{marginTop: '25px'}}
          autoComplete="current-password"
          color="grey" focused
        />

<TextField
          id="outlined-select-currency"
          select
          label="Select"
          style={{marginTop: '25px'}}
          fullWidth
          
          helperText="Please select your country"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>


        <FormGroup>
      <FormControlLabel id="check-box" required
       control={<Checkbox color="#4CAF50"/>} 
      label="Yes, and I agree to all the terms and conditions" />
    </FormGroup>
    <Button id="create-account" variant="contained" color='green'>Create my account</Button>
        
    <Divider id="do">OR</Divider>

    <Button id="google-btn" variant="contained" startIcon={<GoogleIcon />}>
        Continue with google
      </Button>
      <Button id="apple-btn" variant="outlined" color='dark' startIcon={<AppleIcon />}>
        Continue with Apple
      </Button>
      
    </div>
</body>
    
    </>);
}