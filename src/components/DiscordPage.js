const DiscordOauth2 = require('discord-oauth2');
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import {connect} from "react-redux";

import {Creators as groupsActions} from "../store/reducers/groups"

class DiscordPage extends React.Component {
    componentDidMount() {
        this.props.fetchGroups(this.props.user);
    }
    
    handleDiscord(){
	    window.open("https://discord.com/api/oauth2/authorize?client_id=761072595419398164&redirect_uri=http%3A%2F%2Fmovies.ulimartech.com&response_type=code&scope=identify");
    }

    render() {
        return (
            <React.Fragment>

                <Grid container spacing={24}>
                    <Grid item xs={12} style={{marginTop:10}}>
                        <Paper className="homepagepaper">
                            <Typography variant="body1" gutterBottom align="center">
				Connect with discord
                            </Typography>
				<Button onClick={this.handleDiscord}>
					Connect
				</Button>

                        </Paper>
                    </Grid>

                </Grid>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    connected: state.auth.connected,
    loading: state.auth.fetching,
    user: state.auth.user
});



const mapDispatchToProps = (dispatch)=>({
    fetchGroups: (user)=> dispatch(groupsActions.groups_request(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(DiscordPage);
