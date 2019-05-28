import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

import IntlMessage, { Business } from '~/intl';
import { top } from '~/intl/messages';

const intl = new IntlMessage();

const useStyles = makeStyles(() => ({
  body: {
    background: 'linear-gradient(#DDDDDD, #EEEEEE)'
  },
  inner: {
    padding: '10vw 0vw'
  }
}));

const FC: React.FC = () => {
  const classes = useStyles();
  const { primary, secondary } = top.business;
  const formattedBody = intl.format(secondary) as Business[];

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
          {intl.format(primary)}
        </Typography>
        <List>
          {formattedBody.map((item, index, self) => (
            <div>
              <ListItem>
                <ListItemText primary={item.title} secondary={item.note} />
              </ListItem>
              {index !== self.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </div>
          ))}
        </List>
      </Container>
    </Container>
  );
};
FC.displayName = 'Business';

export default FC;
