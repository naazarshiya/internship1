import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '60px',
        backgroundColor: '#f5f5f5',
        padding: '0 20px', 
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} SIET.
      </Typography>

      
      <div>
        <IconButton
          color="inherit"
          href="https://www.instagram.com/_arshiya28_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          color="inherit"
          href="https://github.com/naazarshiya/naazarshiya.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          color="inherit"
          href="https://www.facebook.com/arshiya.naaz.3388?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </IconButton>
      </div>
    </Box>
  );
}

export default Footer;
