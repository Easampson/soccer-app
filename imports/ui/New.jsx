import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Players } from '../api/players';

export default class New extends Component {
    submitPlayer(event) {
        event.preventDefault();

        Players.insert({
            name: this.refs.name.value,
            team: this.refs.team.value,
            lazerChasing:this.refs.lazerChasing.value,
            rClawDmg: this.refs.rClawDmg.value,
            fClawDmg: this.refs.fClawDmg.value,
            speed: this.refs.speed.value,
            pounce: this.refs.pounce.value,
            power: this.refs.power.value,
            hearing: this.refs.hearing.value,
            notes: this.refs.notes.value,
            createdAt: new Date()
        });

        console.log('player submitted');

        browserHistory.push('/');
    }
    render () {
        return (
            <div className="row">
                <form className="col s12" onSubmit={this.submitPlayer.bind(this)}>
                    <h3>add cat</h3>

                    <div className="row">
                        <div className="input-field col s6">
                            <input placeholder="name" ref="name" type="text" className="validate" />
                        </div>
                        <div className="input-field col s6">
                            <input placeholder="Team" ref="team" type="text" className="validate" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Lazer Chasing</h5>
                            <select className="browser-default" ref="lazerChasing">
                                <option value="0">Terrible</option>
                                <option value="1">New Tracker</option>
                                <option value="2">Hunter</option>
                                <option value="3">Rengar</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Front Claw Damage</h5>
                            <select className="browser-default" ref="fClawDmg">
                                <option value="0">Terrible</option>
                                <option value="1">New Tracker</option>
                                <option value="2">Hunter</option>
                                <option value="3">Rengar</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Rear Claw Damage</h5>
                            <select className="browser-default" ref="rClawDmg">
                                <option value="0">Terrible</option>
                                <option value="1">New Tracker</option>
                                <option value="2">Hunter</option>
                                <option value="3">Rengar</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Speed</h5>
                            <select className="browser-default" ref="speed">
                                <option value="0">Terrible</option>
                                <option value="1">New Tracker</option>
                                <option value="2">Hunter</option>
                                <option value="3">Rengar</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Pounce</h5>
                            <select className="browser-default" ref="pounce">
                                <option value="0">Terrible</option>
                                <option value="1">New Tracker</option>
                                <option value="2">Hunter</option>
                                <option value="3">Rengar</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Power</h5>
                            <select className="browser-default" ref="power">
                                <option value="0">Terrible</option>
                                <option value="1">New Tracker</option>
                                <option value="2">Hunter</option>
                                <option value="3">Rengar</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <h5>Hearing</h5>
                            <select className="browser-default" ref="hearing">
                                <option value="0">Terrible</option>
                                <option value="1">New Tracker</option>
                                <option value="2">Hunter</option>
                                <option value="3">Rengar</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s6">
                            <textarea placeholder="Notes" ref="notes" className="materialize-textarea"/>
                        </div>
                        <div className="input-field col s6">
                            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}