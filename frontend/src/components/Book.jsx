import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
export default function Book({ author, bookId, description, imgUrl, price, publisher, title, category, review }) {
    return (
        <Grid item xs={12} sm={6} lg={3} md={4} >
            <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imgUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {title.substring(0, 15)}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {description.substring(0, 60) + '...'}
                    </Typography>
                    <Typography variant="body2" component="div">
                        <h5>Author : {author}</h5>
                        <h5>Rating :  {review}</h5>
                        <h5>publisher :  {publisher}</h5>
                    </Typography>


                </CardContent>
                <CardActions display="flex" >
                    <Button size="small" variant="text">{'₹' + price}</Button>
                    <Button size="small" variant="contained">Add to Cart</Button>
                </CardActions>
            </Card>
        </Grid>

    );
}
