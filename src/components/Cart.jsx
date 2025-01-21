import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../reducer/CartReducer";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Cart = () => {
    const itemCount = useSelector((state) => state.cart.itemCount);
    const dispatch = useDispatch();

    return (
        <div style={{ margin: '5%' }}>
            <Grid container spacing={4} direction="row" justifyContent="center" alignItems="flex-start">
                
                
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Fashionable Dress"
                            height="180"
                            image="https://img.freepik.com/free-photo/portrait-happy-friends-walking-together-street_23-2147861850.jpg?t=st=1737003712~exp=1737007312~hmac=c14062a0c153fe25f6ede5f206d1520a273e6129b0e36b42143c6b2ad8b17e26&w=2000"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Fashionable Dress
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => dispatch(addItem())}
                            >
                                Add Item
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => dispatch(removeItem())}
                            >
                                Remove Item
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="Shopping Accessories"
                            height="180"
                            image="https://img.freepik.com/free-photo/top-view-arrangement-cyber-monday-sale_23-2148670046.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Accessories
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => dispatch(addItem())}
                            >
                                Add Item
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => dispatch(removeItem())}
                            >
                                Remove Item
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>

            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                Total Items in Cart: {itemCount}
            </h2>
        </div>
    );
};

export default Cart;
