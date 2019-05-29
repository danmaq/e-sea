import React from 'react';

import IntlMessage from '~/intl';
import { error } from '~/intl/messages';

const intl = new IntlMessage();

const FC: React.FC = () => {
  const { head, body } = error.http404;
  return (
    <div>
      <h1>{intl.format(head)}</h1>
      <p>{intl.format(body)}</p>
    </div>
  );
};
FC.displayName = '404';

export default FC;
