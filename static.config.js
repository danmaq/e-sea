/* eslint-disable react/react-in-jsx-scope */

import axios from 'axios';
import path from 'path';
import Root from './src/templates/Root';

// Typescript support in static.config.js is not yet supported, but is coming in a future update!
/** @typedef {import('react-static').ReactStaticConfig} ReactStaticConfig */
/** @typedef {import('react-static').Route} Route */
/** @typedef {import('react-static').RouteFlags} RouteFlags */
/** @typedef {import('./src/types').default} Post */

/** @type {Pick<ReactStaticConfig, Exclude<keyof ReactStaticConfig, 'getRoutes'>> & { getRoutes: (flags: RouteFlags) => (Route[] | Promise<Route[]>), [o: string]: unknown }} */
const config = {
  Document: Root,
  entry: 'index.tsx',
  getRoutes: async () => {
    /** @type {{ data: Post[] }} */
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    /** @type {Route[]} */
    const route = [
      {
        path: '/blog',
        getData: () => ({ posts }),
        children: posts.map(post => ({
          getData: () => ({ post }),
          path: `/post/${post.id}`,
          replace: false,
          template: 'src/containers/Post'
        })),
        replace: false
      }
    ];
    return route;
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      { location: path.resolve('./src/pages') }
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap')
  ]
};

export default config;
