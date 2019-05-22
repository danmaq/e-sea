import React from 'react';

const Dynamic: React.FC<{ path?: string }> = ({ path }) => (
  <div>
    <p>
      This is a dynamic page! It will not be statically exported, but is
      available at runtime.
    </p>
    <p>{path}</p>
  </div>
);
export default Dynamic;
