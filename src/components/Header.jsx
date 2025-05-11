import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bg' : 'en');
  };

  return (
    <HideOnScroll>
      <AppBar position="sticky" color="primary" elevation={0} sx={{ width: '100vw', left: 0 }}>
        <Toolbar disableGutters sx={{ minHeight: 64, px: 0 }}>
          <Box sx={{ width: '100%', maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 4 }, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <AccountBalanceIcon sx={{ mr: 1, fontSize: 32 }} />
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 700,
                  letterSpacing: '0.5px',
                }}
              >
                {language === 'en' ? 'Accrules' : 'АКРУЛС'}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Button
                color="inherit"
                component={RouterLink}
                to="/"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {language === 'en' ? 'Home' : 'Начало'}
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/services"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {language === 'en' ? 'Services' : 'Услуги'}
              </Button>
              <Button
                color="inherit"
                component={RouterLink}
                to="/contact"
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {language === 'en' ? 'Contact' : 'Контакти'}
              </Button>
              <Button
                color="inherit"
                onClick={toggleLanguage}
                startIcon={<LanguageIcon />}
                sx={{
                  ml: 1,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                  },
                }}
              >
                {language.toUpperCase()}
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header; 