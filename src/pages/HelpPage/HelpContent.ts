import { AccordianPropType } from '../../components/AppAccordion';

export const GettingStartedContent: AccordianPropType = {
  title: 'Getting Started',
  items: [
    {
      header: 'To see all posts',
      content: 'You can click on home tab to see latest posts',
    },
    {
      header: 'To see own profile',
      content: 'You can click on profile tab to see latest posts',
    },
    {
      header: 'To posts something',
      content:
        'You can click on star tab to see latest posts You will get three screens 1. Select post type 2. Select Recipient 3. Add caption to post',
    },
  ],
};

export const OtherStuffsContent: AccordianPropType = {
  title: 'Other Stuffs',
  items: [
    {
      header: 'To see leaderboard',
      content: 'You can click on leaderboard tab from sidebar',
    },
    {
      header: 'To see trending tags',
      content: 'You can click on trending tab from sidebar',
    },
    {
      header: 'To know more about Vayana',
      content: 'You can click on Vayana tab from sidebar',
    },
  ],
};
