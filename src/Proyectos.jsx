import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

// Define tus imágenes y las rutas a las que deseas redireccionar
const images = [
  { id: 1, src: 'img/foto5.jpeg', redirectTo: 'https://github.com/10038-jatinoco/clinica/tree/main/ingreso' },
  { id: 2, src: 'img/foto6.jpeg', redirectTo: 'https://github.com/10038-jatinoco/waffles' },
];

const Proyectos = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Abre el modal y guarda la imagen seleccionada
  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Cierra el modal
  const handleCloseModal = () => {
    setOpen(false);
  };

  // Redirecciona al hacer clic en el botón del modal
  const handleRedirect = () => {
    window.location.href = selectedImage.redirectTo;
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#f5f5f5' 
    }}>
      <Typography variant="h4" gutterBottom>
        Mis Proyectos
      </Typography>
      <Box sx={{ 
        display: 'flex', 
        gap: '20px', 
        justifyContent: 'center',
        width: '80%', // Ajusta el ancho aquí según tus necesidades
      }}>
        {images.map((image) => (
          <Box key={image.id} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            border: '2px solid #ddd', // Agregado: Marco alrededor de la imagen
            borderRadius: '8px', // Agregado: Bordes redondeados
          }}>
            <img
              src={image.src}
              alt={`Imagen ${image.id}`}
              style={{ 
                width: '100%', // Ajusta el ancho de la imagen aquí
                height: '100%',
                
                borderRadius: '8px', // Agregado: Bordes redondeados
              }}
              onClick={() => handleOpenModal(image)}
            />
            <Typography variant="body2" sx={{ mt: '10px' }}>
              Proyecto {image.id}
            </Typography>
          </Box>
        ))}
      </Box>
      {/* Modal para mostrar detalles del proyecto */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          bgcolor: 'white', 
          p: 4, 
          boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', 
          borderRadius: '8px' 
        }}>
          <Typography variant="h6" id="modal-title">
            Detalles del Proyecto
          </Typography>
          <Typography variant="body1" id="modal-description" sx={{ mt: 2 }}>
            Para poder descargar el código fuente y ver más detalles del proyecto, haz clic en el siguiente botón.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleRedirect}>
            GitHub
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Proyectos;
