import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { companyInfo } from '../content/companyInfo';
import { useNavigate } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Home = ({ language }) => {
  const content = companyInfo[language];
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', width: '100%' }}>
      <Box sx={{ maxWidth: 1000, mx: 'auto', py: 8, px: 2 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            py: 6,
            px: 3,
            borderRadius: 2,
            mb: 6,
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            {content.name}
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            {content.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/contact')}
            sx={{ mr: 2 }}
          >
            {language === 'en' ? 'Get Started' : 'Започнете'}
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            onClick={() => navigate('/services')}
          >
            {language === 'en' ? 'Our Services' : 'Нашите Услуги'}
          </Button>
        </Box>

        {/* Mission Section */}
        <Box
          sx={{
            p: 4,
            borderRadius: 2,
            background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
            color: 'white',
            mb: 6,
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            {language === 'en' ? 'Our Mission' : 'Нашата Мисия'}
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
            {content.mission}
          </Typography>
        </Box>

        {/* Contact Information Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: 'background.default',
                borderRadius: 2,
              }}
            >
              <BusinessIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                {language === 'en' ? 'Address' : 'Адрес'}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {content.address}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: 'background.default',
                borderRadius: 2,
              }}
            >
              <ContactMailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                {language === 'en' ? 'Contact' : 'Контакт'}
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                {content.phone}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {content.email}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: 'background.default',
                borderRadius: 2,
              }}
            >
              <AccountBalanceIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                {language === 'en' ? 'Business Hours' : 'Работно Време'}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {language === 'en' ? 'Monday - Friday' : 'Понеделник - Петък'}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {language === 'en' ? '9:00 AM - 6:00 PM' : '9:00 - 18:00'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 