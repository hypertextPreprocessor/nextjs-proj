"use client"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ButtonGroup,Button } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { FormControl,InputLabel,Input,FilledInput,TextField,FormControlLabel,FormGroup,FormHelperText,FormLabel } from '@mui/material';
import Container from '@mui/material/Container';
import NoSsr from '@mui/material/NoSsr';
import { useEffect, useState } from 'react';
export default function Index(){
    const [docHeight,setDocHeight] = useState('auto');
    useEffect(()=>{
        setDocHeight(document.documentElement.clientHeight);
    },[])
    return ( 
                <Container maxWidth={false} sx={{height:docHeight,display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <FormControl  className="w-lg">
                        <TextField
                            id="standard-usr-input"
                            label="用户名"
                            type="text"
                            margin="normal"
                            size="medium"
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            id="standard-password-input"
                            label="密码"
                            margin="normal"
                            size="medium"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                        />
                    <ButtonGroup size="large" sx={{mt:6,display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
                            <Button classes={{
                                
                            }}>登录</Button>
                    </ButtonGroup>
                    </FormControl>
                </Container>
        );
}