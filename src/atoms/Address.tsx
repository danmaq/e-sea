import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/styles';
import hash from 'object-hash';
import React from 'react';

const useStyles = makeStyles(() => ({
  body: { background: 'linear-gradient(#DDDDDD, #EEEEEE)' },
  inner: { padding: '10vw 0vw' },
  column: { flexBasis: '50%', flexShrink: 0 },
}));

export interface Props {
  address: React.ReactNodeArray;
  caption: React.ReactNode;
}

const FC: React.FC<Props> = ({ address, caption }) => {
  const classes = useStyles({});
  const children = address.reduce<React.ReactNodeArray>((p, chunk) => {
    const key = hash(chunk);

    return [
      ...p,
      <React.Fragment key={key}>{chunk}</React.Fragment>,
      <br key={`${key}-br`} />,
    ];
  }, []);
  return (
    <ListItemText
      className={classes.column}
      primary={caption}
      secondary={children}
    />
  );
};
FC.displayName = 'Address';

export default FC;
