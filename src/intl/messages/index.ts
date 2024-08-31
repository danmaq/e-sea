import { defineMessages } from 'react-intl';

export const meta = {
  title: defineMessages({ body: { id: 'meta.title' } }),
  description: defineMessages({ body: { id: 'meta.description' } }),
};

export const top = {
  hero: defineMessages({ body: { id: 'pages.top.hero' } }),
  overview: defineMessages({
    primary: { id: 'pages.top.overview.primary' },
    secondary: { id: 'pages.top.overview.secondary' },
  }),
  details: defineMessages({
    primary: { id: 'pages.top.details.primary' },
    secondary: { id: 'pages.top.details.secondary' },
  }),
  footer: defineMessages({ body: { id: 'pages.top.footer' } }),
  business: defineMessages({
    primary: { id: 'pages.top.business.primary' },
    secondary: { id: 'pages.top.business.secondary' },
  }),
  team: defineMessages({
    primary: { id: 'pages.top.team.primary' },
    secondary: { id: 'pages.top.team.secondary' },
  }),
  about: {
    title: defineMessages({ body: { id: 'pages.top.about.head' } }),
    company: defineMessages({
      primary: { id: 'pages.top.about.body.company.primary' },
      secondary: { id: 'pages.top.about.body.company.secondary' },
    }),
    date: defineMessages({
      primary: { id: 'pages.top.about.body.date.primary' },
      secondary: { id: 'pages.top.about.body.date.secondary' },
    }),
    money: defineMessages({
      primary: { id: 'pages.top.about.body.money.primary' },
      secondary: { id: 'pages.top.about.body.money.secondary' },
    }),
    offices: {
      cambodia: defineMessages({
        primary: { id: 'pages.top.about.body.offices.cambodia.primary' },
        secondary: { id: 'pages.top.about.body.offices.cambodia.secondary' },
      }),
      factory: defineMessages({
        primary: { id: 'pages.top.about.body.offices.factory.primary' },
        secondary: { id: 'pages.top.about.body.offices.factory.secondary' },
      }),
      hq: defineMessages({
        primary: { id: 'pages.top.about.body.offices.hq.primary' },
        secondary: { id: 'pages.top.about.body.offices.hq.secondary' },
      }),
      hr: defineMessages({
        primary: { id: 'pages.top.about.body.offices.hr.primary' },
        secondary: { id: 'pages.top.about.body.offices.hr.secondary' },
      }),
      management: defineMessages({
        primary: { id: 'pages.top.about.body.offices.management.primary' },
        secondary: { id: 'pages.top.about.body.offices.management.secondary' },
      }),
      sales: defineMessages({
        primary: { id: 'pages.top.about.body.offices.sales.primary' },
        secondary: { id: 'pages.top.about.body.offices.sales.secondary' },
      }),
      studio: defineMessages({
        primary: { id: 'pages.top.about.body.offices.studio.primary' },
        secondary: { id: 'pages.top.about.body.offices.studio.secondary' },
      }),
      vietnam: defineMessages({
        primary: { id: 'pages.top.about.body.offices.vietnam.primary' },
        secondary: { id: 'pages.top.about.body.offices.vietnam.secondary' },
      }),
    },
  },
  customers: defineMessages({
    primary: { id: 'pages.top.customers.primary' },
    secondary: { id: 'pages.top.customers.secondary' },
  }),
  contact: defineMessages({
    primary: { id: 'pages.top.contact.primary' },
    secondary: { id: 'pages.top.contact.secondary' },
  }),
};

export const error = {
  http404: defineMessages({
    head: { id: 'pages.error.http404.head' },
    body: { id: 'pages.error.http404.body' },
  }),
};
