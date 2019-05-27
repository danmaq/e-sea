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

export interface Props {
  name: string;
  position: string;
}

const FC: React.FC = () => {
  const classes = useStyles();

  return (
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
  );
};
FC.displayName = 'Team';

export default FC;
