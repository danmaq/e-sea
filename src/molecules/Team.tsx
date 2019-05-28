import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Member from '~/atoms/Member';
import React from 'react';

import IntlMessage, { Member as TeamMember } from '~/intl';
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
  const formattedBody = intl.format(secondary) as TeamMember[];

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
        {formattedBody.map(item => {
          const { name, role, skill } = item;
          return <Member {...{ name, role, skill }} />;
        })}
      </Container>
    </Container>
  );
};
FC.displayName = 'Team';

export default FC;
