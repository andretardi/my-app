import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (
    <a href={props.link}>
    <Card sx={{ maxWidth: 3450 }}>
      <CardMedia
        component="img"
        image={props.immagine}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.titolo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.testo}
          </Typography>
        </CardContent>

    </Card>
    </a>
  );
}