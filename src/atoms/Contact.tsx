import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  body: {
    background: 'linear-gradient(#DDDDDD, #EEEEEE)'
  },
  inner: {
    padding: '10vw 0vw'
  },
  column: {
    flexBasis: '50%',
    flexShrink: 0
  }
}));

const FC: React.FC = () => {
  const classes = useStyles();

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
          Contact
        </Typography>
        <Typography align="center" color="textPrimary" gutterBottom>
          <a
            href="https://www.facebook.com/hidetaka.izawa"
            rel="noopener noreferrer"
            target="_blank"
          >
            伊澤までお問い合わせください。
          </a>
        </Typography>
      </Container>
    </Container>
  );
};
FC.displayName = 'Contact';

export default FC;
