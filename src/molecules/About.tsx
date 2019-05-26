import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Address from '~/atoms/Address';

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
          会社概要
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="e-sea 株式会社"
              secondary="英文登記: E-SEA CORPORATION"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="設立"
              secondary="2010 年 2 月"
            />
            <ListItemText
              className={classes.column}
              primary="資本金"
              secondary="300 万円"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <Address
              caption="営業部"
              address={[
                '〒1600004',
                '東京都新宿区四谷 1-18',
                'オオノヤビル 8F GENZ Inc.'
              ]}
            />
            <Address
              caption="請求管理部"
              address={[
                '〒1700002',
                '東京都豊島区巣鴨 3-21-16',
                'グレースベルツリービル 5F 萩中央水産(株)'
              ]}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <Address
              caption="R&amp;D センター"
              address={['〒1750094', '東京都板橋区成増 5-18-17-302']}
            />
            <Address
              caption="本社"
              address={[
                '〒7580011',
                '山口県萩市椿東 6450-1',
                '萩池々茶屋ビル 2F'
              ]}
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
          取引先実績
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="石川中央魚市株式会社"
            />
            <ListItemText
              className={classes.column}
              primary="中央魚類株式会社（築地マルナカ）"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="中部水産株式会社"
            />
            <ListItemText
              className={classes.column}
              primary="広島うおいち株式会社"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="JF山口・山口県漁協共同組合"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText className={classes.column} primary="VIDA 株式会社" />
            <ListItemText
              className={classes.column}
              primary="ナレッジスイート株式会社"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="株式会社サインウェーブ"
            />
            <ListItemText
              className={classes.column}
              primary="株式会社ナノ・メディア"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="株式会社アウスタ"
            />
            <ListItemText
              className={classes.column}
              primary="アスタリスクシステムズ株式会社"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="株式会社ジランソフト（韓国）"
            />
            <ListItemText
              className={classes.column}
              primary="ゾディアックアジア株式会社"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="株式会社オルトプラス"
            />
            <ListItemText
              className={classes.column}
              primary="株式会社EAS（ベトナム）"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="株式会社サイバード"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="株式会社アスキング"
            />
            <ListItemText
              className={classes.column}
              primary="44マグナム・イベントスパースDAIA"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              className={classes.column}
              primary="アローサル・テクノロジー株式会社"
            />
            <ListItemText className={classes.column} primary="他 多数" />
          </ListItem>
        </List>
      </Container>
    </Container>
  );
};
FC.displayName = 'About';
// https://www.facebook.com/hidetaka.izawa
export default FC;
