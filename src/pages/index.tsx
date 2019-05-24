import React from 'react';
import Copy from '~/atoms/Copy';
import Hero from '~/atoms/Hero';

const FC: React.FC = () => {
  return (
    <main>
      <Hero />
      <Copy>Take it, Easy.</Copy>
    </main>
  );
};
FC.displayName = 'Pages';

export default FC;
