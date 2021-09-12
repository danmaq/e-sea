import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import type { ReactNode, VFC } from 'react';
import React from 'react';

export interface Props {
  readonly children: Exclude<ReactNode, undefined | null>;
}

const useStyles = makeStyles(() => ({
  body: {
    background: 'linear-gradient(#EEE, #DDE)',
    display: 'table',
    padding: '5vh 7vw',
  },
}));

export const Footer: VFC<Props> = ({ children }) => {
  const classes = useStyles({});

  return (
    <Container className={classes.body} component="footer" maxWidth={false}>
      {children}
    </Container>
  );
};
Footer.displayName = 'Footer';

export default Footer;
