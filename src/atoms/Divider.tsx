import Container from '@material-ui/core/Container';
import type { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles<Theme, Props>(() => ({
  base: { height: '70vh' },
  bg: ({ image }) => ({
    display: 'block',
    position: 'sticky',
    top: 0,
    zIndex: -1,
    height: 0,
    maxHeight: 0,
    overflow: 'visible',
    '&::after': {
      backgroundImage: `url(/images/background/${image})`,
      content: '""',
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }),
}));

interface Props {
  image: string;
}

const FC: React.FC<Props> = ({ image }) => {
  const { base, bg } = useStyles({ image });
  return (
    <>
      <div className={bg} />
      <Container className={base} maxWidth={false}>
        {''}
      </Container>
    </>
  );
};
FC.displayName = 'Divider';

export default FC;
