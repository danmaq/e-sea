import React from 'react';
import Copy from '~/atoms/Copy';
import Hero from '~/atoms/Hero';
import Divider from '~/atoms/Divider';

const FC: React.FC = () => {
  return (
    <main>
      <Hero />
      <Copy>Take it, Easy.</Copy>
      <Divider />
      <Copy>Take it, Easy.</Copy>
      <Divider />
    </main>
  );
};
FC.displayName = 'Pages';

export default FC;
