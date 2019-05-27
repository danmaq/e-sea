import ListItemText from '@material-ui/core/ListItemText';
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

export interface Props {
  address: React.ReactNodeArray;
  caption: React.ReactNode;
}

const FC: React.FC<Props> = ({ address, caption }) => {
  const classes = useStyles();

  // FIXME: Edge and IE11 are not supported flatmap.
  return (
    <ListItemText
      className={classes.column}
      primary={caption}
      secondary={address.flatMap(chunk => [chunk, <br />])}
    />
  );
};
FC.displayName = 'Address';

export default FC;
