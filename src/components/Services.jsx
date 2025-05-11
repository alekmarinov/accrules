import { Container, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { services } from '../content/services';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Services = ({ language }) => {
  const content = services[language];

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', width: '100%' }}>
      <Box sx={{ maxWidth: 1000, mx: 'auto', py: 8, px: 2 }}>
        <Typography variant="h2" component="h1" gutterBottom align="left" color="primary" sx={{ mb: 4 }}>
          {content.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6, textAlign: 'left' }}>
          {content.description}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {content.categories.map((category, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="h5" component="h2" color="primary" sx={{ mb: 1, fontWeight: 600, textAlign: 'left' }}>
                {category.name}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <List>
                {category.features.map((feature, featureIndex) => (
                  <ListItem key={featureIndex} sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleOutlineIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={feature} 
                      primaryTypographyProps={{
                        variant: 'body1',
                        color: 'text.primary',
                        sx: { textAlign: 'left' },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services; 