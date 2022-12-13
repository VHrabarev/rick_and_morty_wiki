import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

const CardList = function(props) {
    const {cards = [], url = "characters"} = props;

    return (
        <Box component="section" sx={{ mb: 2 }}>
            <Typography component="h2" className="visually-hidden">Card list</Typography>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {cards.map(card => {
                    return (
                        <Grid item xs={4} key={card.id}>
                            <Card sx={{ maxWidth: 300 }}>
                                {card.image && 
                                <CardMedia 
                                    component="img"
                                    height="240"
                                    image={card.image}
                                    alt={`${card.name}'s image`}
                                />}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">{card.name}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={`${url}/${card.id}`} className="link"> 
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default CardList;