import { Container } from "@material-ui/core";
// aem global styles to be imported in each story
import "../src/index.scss";
import React from "react";
import { addDecorator } from "@storybook/react";
import storyRouterDecorator from "storybook-react-router";
import AEMContainer from "../src/storybook/AEMContainer/AEMContainer";
/**
 * Default config (no changes)
 */
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  columnCount: {
    name: "Column Count",
    // Text that will be shown on icon hover
    description: "Global Column Count",
    defaultValue: "12",
    toolbar: {
      /**
       * You can check all available icons by this link:
       * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
       */
      icon: "circlehollow",
      items: ["3", "6", "9", "12"],
      // Should "Container size" be shown, or just the "circlehollow" icon
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => (
    <AEMContainer columnCount={context.globals.columnCount}>
      <Story />
    </AEMContainer>
  ),
];

addDecorator(storyRouterDecorator());
