import React from 'react'
import Button from "@mui/material/Button";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import XIcon from '@mui/icons-material/X';
export default function Contact() {
  return (
    <div>
        <h1 style={{color:"greenyellow"}}>Contact Page</h1>
        <h2 style={{color:"grey"}}>For more information</h2>
        <Button  variant="text" startIcon= {<InstagramIcon/>}>Instagram</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button  variant="text" startIcon= {<FacebookIcon/>}>Facebook</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button  variant="text" startIcon= {<AlternateEmailIcon/>}>Email</Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button  variant="text" startIcon= {<XIcon/>}>Twitter</Button>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}
