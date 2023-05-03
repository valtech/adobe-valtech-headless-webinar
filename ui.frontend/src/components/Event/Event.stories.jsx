import React from 'react';
import Event from './Event';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Adobe Valtech Headless SPA / Event',
    component: Event,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        title: { control: 'text' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Event {...args} />;


export const FullyConfigured = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FullyConfigured.args = {
    title: "Ignite Training",
    description: "<p>This is wher you'll learn how to master Adobe Experience Manager</p>\n",
    imageReference: "https://picsum.photos/400",
    location: {
        name: "Los Angeles",
        lat: "34.05",
        lng: "-118.24"
    }
};
FullyConfigured.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
}


export const NoLocation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoLocation.args = {
    title: "Ignite Training",
    description: "<p>This is wher you'll learn how to master Adobe Experience Manager</p>\n",
    imageReference: "https://picsum.photos/400",

};
NoLocation.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
}


