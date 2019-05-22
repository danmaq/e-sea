import React from 'react';

const FC: React.FC = ({ children }) => (
  <div style={{ border: '1px solid red' }}>{children}</div>
);
FC.displayName = 'FancyDiv';

export default FC;
