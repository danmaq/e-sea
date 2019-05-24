import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  body: {
    backgroundColor: '#EEEEEE',
    height: '66vh'
  }
}));

const FC: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container className={classes.body} maxWidth="lg">
      <Typography
        component="h2"
        variant="h1"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {children}
      </Typography>
    </Container>
  );
};
FC.displayName = 'Hero';

export default FC;
