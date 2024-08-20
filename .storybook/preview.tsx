import React from "react";
import type { Preview } from "@storybook/react";
import { CalculatorProvider } from "../src/context/CalculatorContext";
import "../src/index.css";

const preview: Preview = {
  parameters: {},
  decorators: [
    (Story) => (
      <CalculatorProvider>
        <Story />
      </CalculatorProvider>
    ),
  ],
};

export default preview;
