import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import Member from '~/atoms/Member';

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
        <Member
          name="SHŪHEI Nomura"
          position="CEO / Web developer"
          skills={[
            'ウェブアプリ・モバイルアプリ開発',
            'UI / UX デザイン',
            '開発初心者向け教材作成・勉強会など',
            'バーチャルYouTuberプロデュース・支援活動',
            'ゲーム・ラノベなど各種作品におけるシナリオ ライティング'
          ]}
        />
        <Member
          name="YUUKI Hamada"
          position="CTO / Game developer"
          skills={[
            'ウェブアプリ・モバイルアプリ開発',
            'サウンド・音楽制作',
            'ゲーム開発',
            'ホラーコンテンツ制作'
          ]}
        />
        <Member
          name="HIDETAKA Izawa"
          position="CMO / Sales"
          skills={[
            '食品業界・水産業界の IT 化支援',
            'BPO・ITO コンサルティング',
            '東南アジアにおけるオフショア開発支援'
          ]}
        />
      </Container>
    </Container>
  );
};
FC.displayName = 'Team';

export default FC;
