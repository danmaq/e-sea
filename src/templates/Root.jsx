import React from 'react';

/**
 * Type of properties.
 * @typedef IProps
 * @property {React.FC} Body
 * @property {React.FC} Head
 * @property {React.FC} Html
 */

/** @type {React.FC<React.PropsWithChildren<IProps>>} */
const FC = ({ Body, children, Head }) => (
  <html lang="ja">
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=Edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, shrink-to-fit=no, viewport-fit=cover"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,900"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <Body>{children}</Body>
  </html>
);
FC.displayName = 'Root';

export default FC;
