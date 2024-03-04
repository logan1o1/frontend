import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../assets/WhatsApp Image 2024-03-04 at 19.33.08_f16c8063.jpg'
export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src={image} alt="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{fontWeight: 'bold'}}>
          Book Name
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{color: 'red' , fontSize: '20px' }}>
          Author name
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontSize: '15px' }}>
          Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color: 'red' , }}>Sold</Button>
        <Button size="small">Category</Button>
      </CardActions>
    </Card>
  );
}