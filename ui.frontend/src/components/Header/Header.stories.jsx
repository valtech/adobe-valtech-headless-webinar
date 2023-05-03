import React from 'react';
import Header from './Header';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Adobe Valtech Headless SPA / Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args} />;


export const WithNav = Template.bind({});

WithNav.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
      },
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithNav.args = {
    items: [
        {
            url: 'url',
            children: [
                {
                    active: true,
                    title: 'child 1',
                    url: '#',
                    children: [{
                        active: false,
                        title: 'child 1 / 1',
                        url: 'pathname',
                        children: []
                    }]
                },
                {
                    active: false,
                    title: 'child 2',
                    url: '#',
                    children: [{
                        active: false,
                        title: 'child 2 / 1',
                        url: '#',
                        children: []
                    }]
                }
            ]
        }
    ],
    location: {
        pathname: 'pathname'
    }
};
