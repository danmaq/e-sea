import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';
import React from 'react';
import { Root, Routes } from 'react-static';
import Helmet from '~/atoms/Helmet';

const FC: React.FC = () => (
  <Root>
    <Helmet />
    <CssBaseline />
    <React.Suspense fallback={<em>Loading...</em>}>
      <Router>
        <Routes path="*" />
      </Router>
    </React.Suspense>
  </Root>
);
FC.displayName = 'App';

export default FC;
