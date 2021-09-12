import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  hero: { backgroundAttachment: 'fixed', height: '90vh', position: 'relative' },
}));

interface Props {
  image?: string;
}

const FC: React.FC<Props> = ({ image }) => {
  const classes = useStyles({});

  return (
    <Container
      className={classes.hero}
      maxWidth={false}
      style={
        image
          ? {
              backgroundImage: `url(/images/background/${image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }
          : { background: 'linear-gradient(#334455, #8899AA)' }
      }
    >
      {''}
    </Container>
  );
};
FC.displayName = 'Divider';

export default FC;
