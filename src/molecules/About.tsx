import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import hash from 'object-hash';
import React from 'react';
import Address from '~/atoms/Address';
import type { Customers } from '~/intl';
import IntlMessage from '~/intl';
import { top } from '~/intl/messages';

const intl = new IntlMessage();

const useStyles = makeStyles(() => ({
  body: { background: 'linear-gradient(#DDDDDD, #EEEEEE)' },
  inner: { padding: '10vw 0vw' },
  column: { flexBasis: '50%', flexShrink: 0 },
}));

const FC: React.FC = () => {
  const classes = useStyles({});
  const { title: aboutTitle, company, date, money, offices } = top.about;
  const { primary: customersTitle, secondary } = top.customers;
  const customers = intl.format(secondary) as Customers[];

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
          {intl.format(aboutTitle.body)}
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary={intl.format(company.primary)}
              secondary={intl.format(company.secondary)}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              className={classes.column}
              primary={intl.format(date.primary)}
              secondary={intl.format(date.secondary)}
            />
            <ListItemText
              className={classes.column}
              primary={intl.format(money.primary)}
              secondary={intl.format(money.secondary)}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <Address
              caption={intl.format(offices.management.primary)}
              address={intl.format(offices.management.secondary) as string[]}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <Address
              caption={intl.format(offices.hq.primary)}
              address={intl.format(offices.hq.secondary) as string[]}
            />
          </ListItem>
        </List>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {intl.format(customersTitle)}
        </Typography>

        <List>
          {customers.map((group, index, self) => {
            const splitCount = 2;

            return (
              <div key={hash(group)}>
                {Array.from({ length: Math.ceil(group.length / 2) }, (__, i) =>
                  group.slice(i * splitCount, i * splitCount + splitCount)
                ).map((line) => (
                  <ListItem key={hash(line)}>
                    {line.map((item) => (
                      <ListItemText
                        key={item}
                        className={classes.column}
                        primary={item}
                      />
                    ))}
                  </ListItem>
                ))}
                {index !== self.length - 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </div>
            );
          })}
        </List>
      </Container>
    </Container>
  );
};
FC.displayName = 'About';
// https://www.facebook.com/hidetaka.izawa
export default FC;
