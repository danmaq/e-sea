import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';
import React from 'react';
import { Root, Routes } from 'react-static';
import Helmet from '~/atoms/Helmet';

const FC: React.FC = () => (
  <Root>
    <Helmet />
    <CssBaseline />
    <Router>
      <Routes path="*" />
    </Router>
  </Root>
);
FC.displayName = 'App';

export default FC;
