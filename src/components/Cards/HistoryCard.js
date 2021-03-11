import { Card } from '@material-ui/core';
import React from "react";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {connect} from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";


const styles = (theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '100%',
        'background-size': 'contain'
    },
    movieCard: {
        width: '300px'
    }
});

export class HistoryCard extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {classes} = this.props;
        /*const movie = (<CardMedia
            className={classes.media}
            image={this.props.movie.movie.Poster}
            title={this.props.movie.movie.title}
        />);
        */
        return (
            <Card className={classes.movieCard}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Movie Night:
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Date: {this.props.history.date}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Host: {this.props.history.Host.username}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Location: {this.props.history.location}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Movie: {this.props.history.Movie.title}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}



export default withStyles(styles)(HistoryCard);
