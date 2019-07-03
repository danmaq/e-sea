import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import IntlMessage from '~/intl';
import { top } from '~/intl/messages';

const intl = new IntlMessage();

const useStyles = makeStyles(() => ({
  hero: {
    backgroundImage: 'url("/images/background/sunset.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    maxHeight: '200vmin',
    minHeight: '50vmax',
    height: '100vh',
    position: 'relative'
  },
  heroText: {
    bottom: '10vh',
    color: 'white',
    fontSize: '12vw',
    fontWeight: 900,
    letterSpacing: '-1vw',
    lineHeight: '8.8vw',
    paddingLeft: '40vw',
    position: 'absolute',
    right: '3vw',
    textAlign: 'right',
    wordBreak: 'break-all'
  }
}));

const FC: React.FC = () => {
  const classes = useStyles({});
  const { hero } = top;

  return (
    <Container className={classes.hero} maxWidth={false}>
      <Typography
        className={classes.heroText}
        component="h1"
        variant="h1"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {intl.format(hero.body)}
      </Typography>
    </Container>
  );
};
FC.displayName = 'Hero';

export default FC;
