import React from 'react';
import Business from '~/atoms/Business';
import Contact from '~/atoms/Contact';
import Copy from '~/atoms/Copy';
import Hero from '~/atoms/Hero';
import Divider from '~/atoms/Divider';
import About from '~/molecules/About';
import Team from '~/molecules/Team';

const FC: React.FC = () => {
  return (
    <main>
      <Hero />
      <Copy
        caption="Take it, Easy."
        details={[
          'e-sea は、国籍・人種・性別を超えて、あなたの能力に光を当てることができる会社です。',
          '自分の可能性を信じてチャレンジする人を応援します。'
        ]}
      />
      <Divider />
      <Copy
        caption="地方創生から派生し、9 年目"
        details="かつては、10 期目を迎えた食品商社でしたが、国有化による事業・商権譲渡のため、システム部が独立しました。"
      />
      <Divider />
      <Business />
      <Divider />
      <Team />
      <Divider />
      <About />
      <Divider />
      <Contact />
      <footer>
        Copyright ©︎2010-2019 E-SEA CORPORATION All right reserved.
      </footer>
    </main>
  );
};
FC.displayName = 'Pages';

export default FC;
