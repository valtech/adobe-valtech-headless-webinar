import React from 'react';
import Text from '../Text/Text';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Adobe Valtech Headless SPA / Text',
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Text {...args} />;


export const RichText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RichText.args = {
  richText: true,
  text: `<p>Check out some of the great adventures above!</p>
  <ol>
  <li>first</li>
  <li>second</li>
  </ol>
  <ul>
  <li>bullet one</li>
  <li>bullet two</li>
  </ul>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <blockquote>Quote</blockquote>
  <hr>
  
  <hr>
  
  <p>and this is normal text</p>
  `
};

export const Table = Template.bind({});
Table.args = {
  richText: true,
  text: `<table cellpadding="1" cellspacing="0" border="1">
  <caption>Table caption</caption>
  <tbody><tr><td>one</td>
  <td>two</td>
  <td>three</td>
  </tr><tr><td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  </tr><tr><td>bla</td>
  <td>bla</td>
  <td>bla</td>
  </tr></tbody></table>
  `
  
};

