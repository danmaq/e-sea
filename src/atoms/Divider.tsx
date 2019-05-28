import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  hero: {
    background: 'linear-gradient(#334455, #8899AA)',
    backgroundAttachment: 'fixed',
    height: '90vh',
    position: 'relative'
  }
}));

export interface Props {
  src?: string;
}

const FC: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <Container className={classes.hero} maxWidth={false}>
      {''}
    </Container>
  );
};
FC.displayName = 'Divider';

export default FC;
