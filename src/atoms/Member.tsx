import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Member as TeamMember } from '~/intl';

const useStyles = makeStyles(() => ({
  body: {
    background: 'linear-gradient(#DDDDDD, #EEEEEE)'
  },
  inner: {
    padding: '10vw 0vw'
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    color: '#AAAAAA'
  }
}));

export interface Props {
  name: string;
  position: string;
}

const FC: React.FC<TeamMember> = ({ name, role, skill }: TeamMember) => {
  const classes = useStyles();

  return (
    <ExpansionPanel expanded>
      <ExpansionPanelSummary>
        <Typography className={classes.heading}>{name}</Typography>
        <Typography className={classes.secondaryHeading}>{role}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ul>
          {skill.map(value => (
            <li>{value}</li>
          ))}
        </ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
FC.displayName = 'Team';

export default FC;
