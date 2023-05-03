import React from 'react';
import Card from './Card';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Adobe Valtech Headless SPA / Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;


export const WithCTA = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithCTA.args = {
  ctaLinkURL: '#',
  ctaText: 'cta text',
  cardTitle: 'Title',
  cardLastModified : '2/1/2023, 9:09:00 AM',
  src: 'https://storage.googleapis.com/kaggle-datasets-images/59760/115796/95649e825d9344084af2a24012c4d072/dataset-cover.jpg?t=2018-10-05-08-07-40'
};
WithCTA.parameters = {
  design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
}

export const WithoutCTA = Template.bind({});
WithoutCTA.args = {
  src: 'https://as1.ftcdn.net/v2/jpg/00/55/77/44/1000_F_55774465_rYM3C4B2eROfNQcVUpHlx9EOPDSYJw20.jpg'
};
WithoutCTA.parameters = {
  design: {
      type: "figma",
      url: "https://www.figma.com/file/Bx86XWEc6FgbWx5IVNPVAk/Hitachi-Brand-Portal?node-id=38%3A6322&t=qr1nJKpGfofrRnm4-1",
    },
}

