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

import {Creators as nightsActions} from "../store/reducers/nights";

import HistoryCard from '../components/Cards/HistoryCard';

class HistoryPage extends React.Component {
    componentDidMount() {
        this.props.fetchHistory({id: this.props.group.id, user: this.props.user});
    }

    render() {
        const history_cards = [];
        if(this.props.history){
            for(let i = 0; i < this.props.history.length; i++){
                history_cards.push(<HistoryCard group={this.props.group} history={this.props.history[i]} user={this.props.user} key={i} />);
            }
        }
        return (
            <React.Fragment>

                <Grid container spacing={24}>
                    <Grid item xs={12} style={{marginTop:10}}>
                        <Paper className="homepagepaper">
                            <Typography variant="body1" gutterBottom align="center">
                                This is a list of your movie nights.
                            </Typography>

                        </Paper>
                    </Grid>

                </Grid>
                <Grid container spacing={24}>
                    {history_cards}
                </Grid>
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.auth.fetching,
    user: state.auth.user,
    group: state.groups.currentGroup,
    history: state.nights.history
});

const mapDispatchToProps = (dispatch)=>({
    fetchHistory: (data)=> dispatch(nightsActions.get_history_request(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage);
