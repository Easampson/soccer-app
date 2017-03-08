import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';


export default class App extends Component {
    constructor(props) {
        super(props);

        // setting up state
        this.state = {players: [] };
    }

    componentWillMount() {
        this.setState({ players: [{
            _id: 1,
            name: "Dragov Sienen",
            lazerChasing: 57,
            rClawDmg: 82,
            fClawDmg: 75,
            speed: 57,
            pounce: 101,
            power: 66,
            hearing: 92,
            rank: "S+",
        },
           ]});
    }



    renderPlayers() {
        return this.state.players.map((player) => (
            <TeamList key={player._id} player={player} />
        ));
    }

    render () {
        return (
            <MuiThemeProvider>
                <div className="container">
                    <AppBar
                        title="Soccer App"
                        iconClassNameRight="muidocs-icons-navigation-expand-more"
                        showMenuIconButton={false} />
                    <div className="row">
                        <div className="col s12 m7"><Player /></div>
                        <div className="col s12 m5">
                            <h2>Team list</h2>
                            <Divider />
                            <List>
                                {this.renderPlayers()}
                            </List>
                            <Divider />
                        </div>
                        <div className="col s12 m3"><TeamStats /></div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}