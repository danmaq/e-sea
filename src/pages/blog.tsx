import React from 'react';
import { useRouteData } from 'react-static';
import { Link } from '@reach/router';
import Post from '~/types';

const FC: React.FC = () => {
  const { posts } = useRouteData<{ posts: Post[] }>();

  return (
    <div>
      <h1>It&apos;s blog time.</h1>
      <br />
      All Posts:
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/blog/post/${id}/`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
FC.displayName = 'Blog';

export default FC;
