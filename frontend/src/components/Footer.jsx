import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          Hope You like it, RG
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
