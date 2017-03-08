import { Mongo } from 'meteor/mongo';

export const Players = new Mongo.Collection('players');


// collection (db schema)
const PlayerSchema = new SimpleSchema({
    name: { type: String },
    team: { type: String },
    lazerChasing: { type: Number, defaultValue: 0 },
    rClawDmg: { type: Number, defaultValue: 0 },
    fClawDmg: { type: Number, defaultValue: 0 },
    speed: { type: Number, defaultValue: 0 },
    pounce: { type: Number, defaultValue: 0 },
    power: { type: Number, defaultValue: 0 },
    hearing: { type: Number, defaultValue: 0 },
    notes: {type: String, optional: true},
});

// attaches schema to collection
Players.attachSchema(PlayerSchema);