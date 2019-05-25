import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router } from '@reach/router';
import React from 'react';
import { Root, Routes } from 'react-static';

const FC: React.FC = () => (
  <Root>
    <CssBaseline />
    <React.Suspense fallback={<CircularProgress />}>
      <Router>
        <Routes path="*" />
      </Router>
    </React.Suspense>
  </Root>
);
FC.displayName = 'App';

export default FC;
