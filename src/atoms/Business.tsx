import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

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
          事業内容
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="WEB 開発" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText primary="SES コンサルティング" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText primary="農林水産業" secondary="農林水産省認可済" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText primary="食品業界 IT 化" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              primary="RPA 開発"
              secondary="Robotic Process Automation"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              primary="BPO"
              secondary="Business Process Outsourcing"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              primary="M &amp; A"
              secondary="ブロックチェーン仲介実績あり"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText primary="コンテンツパブリッシング" />
          </ListItem>
        </List>
      </Container>
    </Container>
  );
};
FC.displayName = 'Business';

export default FC;
