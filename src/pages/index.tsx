import React from 'react';
import Business from '~/atoms/Business';
import Contact from '~/atoms/Contact';
import Copy from '~/atoms/Copy';
import Hero from '~/atoms/Hero';
import Divider from '~/atoms/Divider';
import About from '~/molecules/About';
import Team from '~/molecules/Team';

import IntlMessage from '~/intl';
import { top } from '~/intl/messages';

const intl = new IntlMessage();

const FC: React.FC = () => {
  const { overview, details, footer } = top;
  return (
    <main>
      <Hero />
      <Copy
        caption={intl.format(overview.primary)}
        details={intl.format(overview.secondary)}
      />
      <Divider image="bubbles.jpg" />
      <Copy
        caption={intl.format(details.primary)}
        details={intl.format(details.secondary)}
      />
      <Divider image="surface.jpg" />
      <Business />
      <Divider image="sky.jpg" />
      <Team />
      <Divider image="ship.jpg" />
      <About />
      <Divider image="sea.jpg" />
      <Contact />
      <footer>
        {intl.format(footer.body, {
          date: '︎2010-2019',
          company: 'E-SEA CORPORATION',
        })}
      </footer>
    </main>
  );
};
FC.displayName = 'Pages';

export default FC;
