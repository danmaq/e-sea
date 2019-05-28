import { defineMessages } from 'react-intl';

export const top = {
  hero: defineMessages({
    body: { id: 'pages.top.hero' }
  }),
  overview: defineMessages({
    primary: { id: 'pages.top.overview.primary' },
    secondary: { id: 'pages.top.overview.secondary' }
  }),
  details: defineMessages({
    primary: { id: 'pages.top.details.primary' },
    secondary: { id: 'pages.top.details.secondary' }
  }),
  footer: defineMessages({
    body: { id: 'pages.top.footer' }
  }),
  business: defineMessages({
    primary: { id: 'pages.top.business.primary' },
    secondary: { id: 'pages.top.business.secondary' }
  }),
  team: defineMessages({
    primary: { id: 'pages.top.team.primary' },
    secondary: { id: 'pages.top.team.secondary' }
  })
};

export const error = {
  http404: defineMessages({
    head: { id: 'pages.error.http404.head' },
    body: { id: 'pages.error.http404.body' }
  })
};
