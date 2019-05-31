import { Head } from 'react-static';
import React from 'react';

import IntlMessage from '~/intl';
import { meta as metaData } from '~/intl/messages';

const intl = new IntlMessage();

const FC: React.FC = () => (
  <Head>
    <title>{intl.format(metaData.title.body)}</title>
    <meta
      property="og:site_name"
      content={intl.format(metaData.title.body) as string}
    />
    <meta
      property="og:title"
      content={intl.format(metaData.title.body) as string}
    />
    <meta
      name="twitter:title"
      content={intl.format(metaData.title.body) as string}
    />

    <meta property="og:url" content="/images/logo.png" />
    <meta property="og:image" content="/images/logo.png" />
    <link rel="icon" href="/images/favicon.ico" />

    <meta
      property="og:description"
      content={intl.format(metaData.description.body) as string}
    />
    <meta
      property="twitter:description"
      content={intl.format(metaData.description.body) as string}
    />

    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    {/* FIXME: ここに Facebook の app_id */
    /* <meta property="fb:app_id" content="" /> */
    /* または adminID */
    /* <meta property="fb:admins" content="" /> */}
  </Head>
);
FC.displayName = 'Helmet';

export default FC;
