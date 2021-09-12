import { Head } from 'react-static';
import React from 'react';

import IntlMessage from '~/intl';
import { meta as metaData } from '~/intl/messages';

const intl = new IntlMessage();

const FC: React.FC = () => {
  const description = intl.format(metaData.description.body) as string;
  const title = intl.format(metaData.title.body) as string;
  return (
    <Head>
      <title>{title}</title>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="coverage" content="Worldwide" />
      <meta name="description" content={description} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tooltip" content={description} />
      <meta name="rating" content="General" />
      <meta name="referer" content="same-origin" />
      <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />

      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/logo.png" />
      <meta property="og:image:height" content="485" />
      <meta property="og:image:width" content="772" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="/images/logo.png" />

      <link rel="icon" href="/images/favicon.ico" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>
  );
};
FC.displayName = 'Helmet';

export default FC;
