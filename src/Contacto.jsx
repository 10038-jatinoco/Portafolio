import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contacto = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      padding: '100px',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
    >
      <Typography variant="h4" gutterBottom>
        Contacto
      </Typography>
      <Box
        sx={{
          width: '100%', // Ajuste para ocupar todo el ancho disponible
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
          gap: '20px',
        }}
      >
        {/* Iconos de contacto */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <EmailIcon sx={{ fontSize: 40 }} />
            <Typography variant="body1">jeimmy471@gmail.com</Typography>
          </Grid>
          <Grid item>
            <PhoneIcon sx={{ fontSize: 40 }} />
            <Typography variant="body1">0992711111</Typography>
          </Grid>
          <Grid item>
            <FacebookIcon sx={{ fontSize: 40 }} />
            <Typography variant="body1">
              <a
                href="https://www.facebook.com/jeimmy.anahi?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contacto;
