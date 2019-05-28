import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import hash from 'object-hash';
import React from 'react';

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
  name: React.ReactNode;
  position: React.ReactNode;
  skills: React.ReactNodeArray;
}

const FC: React.FC<Props> = ({ children, name, position, skills }) => {
  const classes = useStyles();
  const renderedSkills = skills.map(skill => (
    <li key={hash(skill)}>{skill}</li>
  ));

  return (
    <ExpansionPanel expanded>
      <ExpansionPanelSummary>
        <Typography className={classes.heading}>{name}</Typography>
        <Typography className={classes.secondaryHeading}>{position}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {children}
        <ul>{renderedSkills}</ul>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};
FC.displayName = 'Member';

export default FC;
