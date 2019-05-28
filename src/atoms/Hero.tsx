import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
// import logo from '~assets/logo.png';

const useStyles = makeStyles(() => ({
  hero: {
    background: 'linear-gradient(#AA7788, #666666)',
    backgroundAttachment: 'fixed',
    // backgroundImage: `url(${logo})`,
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
  const classes = useStyles();

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
        FOR TOMO
        <wbr />
        RROW FUN
      </Typography>
    </Container>
  );
};
FC.displayName = 'Hero';

export default FC;
