import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import Post from '../../types';

const FC: React.FC = () => {
  const { post } = useRouteData<{ post: Post }>();

  return (
    <div>
      <Link to="/blog/">&lt; Back</Link>
      <br />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};
FC.displayName = 'Post';

export default FC;
