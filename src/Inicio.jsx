import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

const Inicio = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#f5f5f5', 
      padding: '70px', 
      textAlign: 'center', 
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)',
      maxWidth: '800px',
      width: '100%',
      borderRadius: '8px',
    }}>
      <Typography variant="h4" gutterBottom>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        ¡Bienvenido a mi portafolio!
      </Typography>
      <Divider sx={{ marginBottom: '20px' }} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Avatar
                alt="Foto de perfil"
                src="img/foto1.jpeg"
                sx={{ width: '100%', height: 'auto', maxWidth: '300px', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)' }}
              />
            </Grid>
            <Grid item>
              <Grid container direction="column" spacing={2} justifyContent="center">
                <Grid item>
                  <br />
                  <br />
                  <br />
                  <br />
                  <EngineeringIcon sx={{ fontSize: '55px' }} />
                </Grid>
                <Grid item>
                  <Avatar alt="Foto 2" src="img/foto2.jpeg" />
                </Grid>
                <Grid item>
                  <Avatar alt="Foto 3" src="img/foto3.jpeg" />
                </Grid>
                <Grid item>
                  <Avatar alt="Foto 4" src="img/foto4.jpeg" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="body1" sx={{ maxWidth: '400px', margin: '0 auto' }}>
            Hola, soy Jeimmy Anahi Tinoco Ochoa. Soy estudiante universitaria, actualmente tengo 22 años, sigo la carrera de TICS. Mi pasión es la programación web.
            En mi portafolio, encontrarás una sección de mis proyectos y trabajos anteriores. Estoy emocionada de compartir mi trabajo contigo y espero poder colaborar en proyectos futuros.
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '20px', marginTop: '40px' }} />
      <Typography variant="h5" gutterBottom>
        Estudios
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <SchoolIcon sx={{ fontSize: '40px' }} />
          <Typography variant="body1">
            Primaria - Unidad Educativa "Consejo Provincial de Pichincha"
            <br></br>
            Secundaria - Unidad Educativa "Consejo Provincial de Pichincha"
            <br></br>
            Ing. en Sistemas de Información - Universidad de las Fuerzas Armadas ESPE
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ marginBottom: '20px', marginTop: '40px' }} />
      <Typography variant="h5" gutterBottom>
        Habilidades
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <StarIcon sx={{ fontSize: '40px' }} />
          <Typography variant="body1">
            Desarrollo web
            <br></br>
            Eficas
            <br></br>
            Creativa
            <br></br>
            Responsable
          </Typography>
        </Grid>
        {/* Agrega más habilidades según sea necesario */}
      </Grid>
    </Box>
  );
};

export default Inicio;
