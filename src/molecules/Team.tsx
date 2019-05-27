import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  body: {
    background: 'linear-gradient(#DDDDDD, #EEEEEE)'
  },
  inner: {
    padding: '10vw 0vw'
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    color: '#AAAAAA'
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
          役員紹介
        </Typography>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>SHŪHEI Nomura</Typography>
            <Typography className={classes.secondaryHeading}>
              CEO / Web developer
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul>
              <li>ウェブアプリ・モバイルアプリ開発</li>
              <li>UI / UX デザイン</li>
              <li>開発初心者向け教材作成・勉強会など</li>
              <li>バーチャルYouTuberプロデュース・支援活動</li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>YUUKI Hamada</Typography>
            <Typography className={classes.secondaryHeading}>
              CTO / Game developer
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul>
              <li>ウェブアプリ・モバイルアプリ開発</li>
              <li>サウンド・音楽制作</li>
              <li>ゲーム開発</li>
              <li>ホラーコンテンツ制作</li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded>
          <ExpansionPanelSummary>
            <Typography className={classes.heading}>HIDETAKA Izawa</Typography>
            <Typography className={classes.secondaryHeading}>
              CMO / Sales
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ul>
              <li>食品業界・水産業界の IT 化支援</li>
              <li>BPO・ITO コンサルティング</li>
              <li>東南アジアにおけるオフショア開発</li>
            </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </Container>
  );
};
FC.displayName = 'Team';

export default FC;
