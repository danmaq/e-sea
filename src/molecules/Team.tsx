import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import IntlMessage, { Member } from '~/intl';
import { top } from '~/intl/messages';

const intl = new IntlMessage();

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

const FC: React.FC = () => {
  const classes = useStyles();
  const { primary, secondary } = top.team;
  const formattedBody = intl.format(secondary) as Member[];

  return (
    <Container className={classes.body} maxWidth={false}>
      <Container className={classes.inner} maxWidth="md">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {intl.format(primary)}
        </Typography>
        {formattedBody.map(item => (
          <ExpansionPanel expanded>
            <ExpansionPanelSummary>
              <Typography className={classes.heading}>{item.name}</Typography>
              <Typography className={classes.secondaryHeading}>
                {item.role}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ul>
                {item.skill.map(value => (
                  <li>{value}</li>
                ))}
              </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </Container>
    </Container>
  );
};
FC.displayName = 'Team';

export default FC;
