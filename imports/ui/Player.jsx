import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    button: {
        margin: 12,
    }
};

export default class Player extends Component {
    render () {
        return (
            <Card>
                <CardMedia
                    overlay={<CardTitle title="Dragov Sienen" subtitle="O-fence: 23 - D-fence: 332" />}
                >
                    <img src="sircat.jpg" />
                </CardMedia>
                <CardText>
                    <div style={styles.wrapper}>
                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                57
                            </Avatar>
                            Lazer Chasing
                        </Chip>

                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                82
                            </Avatar>
                            Rear claw DNG
                        </Chip>

                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                75
                            </Avatar>
                            Front Claw DMG
                        </Chip>

                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                92
                            </Avatar>
                            Hearing
                        </Chip>

                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                57
                            </Avatar>
                            speed
                        </Chip>

                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                66
                            </Avatar>
                            Power
                        </Chip>

                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                101
                            </Avatar>
                            Pouncing
                        </Chip>

                        <Chip
                            backgroundColor={blue200}
                            style={styles.chip}
                        >
                            <Avatar size={32} color={blue200} backgroundColor={blue900}>
                                S+
                            </Avatar>
                            Rank
                        </Chip>
                    </div>

                </CardText>
                <CardActions>


                </CardActions>
            </Card>
        )
    }
}