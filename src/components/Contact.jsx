import { Typography, Box, TextField, Button, Grid, Snackbar, Alert } from '@mui/material';
import { companyInfo } from '../content/companyInfo';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { useState } from 'react';

const Contact = ({ language }) => {
  const content = companyInfo[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Replace this URL with your actual Google Form submission URL
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScx7XBATYjS-uOcoMWkBKq8PEreON_8gAgqcupOoQXXhFO6AQ/formResponse';


  // link = "https://docs.google.com/forms/d/e/1FAIpQLScx7XBATYjS-uOcoMWkBKq8PEreON_8gAgqcupOoQXXhFO6AQ/viewform?usp=pp_url&entry.1735252318=Alexander&entry.2079212150=alekmarinov@gmail.com&entry.1454401326=test6"


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create form data for submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('entry.1735252318', formData.name); // Replace with your actual entry IDs
      formDataToSubmit.append('entry.2079212150', formData.email);
      formDataToSubmit.append('entry.1454401326', formData.message);

      // Submit to Google Forms
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formDataToSubmit,
        mode: 'no-cors' // Required for Google Forms
      });

      // Show success message
      setSnackbar({
        open: true,
        message: language === 'en' ? 'Message sent successfully!' : 'Съобщението е изпратено успешно!',
        severity: 'success'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: language === 'en' ? 'Error sending message. Please try again.' : 'Грешка при изпращане на съобщението. Моля, опитайте отново.',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', width: '100%' }}>
      <Box sx={{ maxWidth: 1000, mx: 'auto', py: 8, px: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom align="left" color="primary" sx={{ mb: 4 }}>
          {language === 'en' ? 'Contact Us' : 'Свържете се с нас'}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6, textAlign: 'left' }}>
          {language === 'en' 
            ? 'Get in touch with our team for any questions or inquiries'
            : 'Свържете се с нашия екип за въпроси или запитвания'}
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
                color: 'white',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                {language === 'en' ? 'Contact Information' : 'Контактна Информация'}
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <LocationOnIcon sx={{ mr: 2, fontSize: 28 }} />
                  <Typography variant="body1">{content.address}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <PhoneIcon sx={{ mr: 2, fontSize: 28 }} />
                  <Typography variant="body1">{content.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 2, fontSize: 28 }} />
                  <Typography variant="body1">{content.email}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, height: '100%', bgcolor: 'background.default', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom color="primary">
                {language === 'en' ? 'Send us a Message' : 'Изпратете ни съобщение'}
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <TextField
                  fullWidth
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  label={language === 'en' ? 'Name' : 'Име'}
                  variant="outlined"
                  margin="normal"
                  required
                  InputProps={{
                    startAdornment: (
                      <PersonIcon sx={{ color: 'action.active', mr: 1 }} />
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  label={language === 'en' ? 'Email' : 'Имейл'}
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <EmailIcon sx={{ color: 'action.active', mr: 1 }} />
                    ),
                  }}
                />
                <TextField
                  fullWidth
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  label={language === 'en' ? 'Message' : 'Съобщение'}
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  InputProps={{
                    startAdornment: (
                      <MessageIcon sx={{ color: 'action.active', mr: 1, mt: 1 }} />
                    ),
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ mt: 3 }}
                >
                  {language === 'en' ? 'Send Message' : 'Изпрати Съобщение'}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 