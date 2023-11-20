import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';

export default function ActionAreaCard() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set the height to 100% of the viewport height
      }}
    >
      <Card sx={{ maxWidth: 500 }}> {/* Increase the maxWidth value */}
        <CardActionArea>
          <CardMedia
            component="img"
            height="270"
            image="https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"  // Replace this URL with your actual image URL
            alt="Placeholder Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              STRANGER THINGS
            </Typography>
            <Typography variant="body2" color="text.secondary">
            When a young boy vanishes, a small town uncovers a mystery involving secret 
            experiments, terrifying supernatural forces and one strange little girl.
              
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
