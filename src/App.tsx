import CircularProgress from '@material-ui/core/CircularProgress';
import { Link, Router } from '@reach/router';
import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import FancyDiv from '~/components/FancyDiv';
import Dynamic from '~/containers/Dynamic';
import './app.css';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const FC: React.FC = () => (
  <Root>
    <React.StrictMode>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content">
        <FancyDiv>
          <React.Suspense fallback={<CircularProgress />}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </FancyDiv>
      </div>
    </React.StrictMode>
  </Root>
);
FC.displayName = 'App';

export default FC;
