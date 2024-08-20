import type { Meta, StoryObj } from "@storybook/react";
import Device from "./Device";

const meta = {
  title: "Blueprint/Device",
  component: Device,
  decorators: [
    (Story) => (
      <svg viewBox="0 0 100 100">
        <Story />
      </svg>
    ),
  ],
  argTypes: {
    id: {
      control: "radio",
      options: [
        "megapack-2xl",
        "megapack-2",
        "megapack",
        "powerpack",
        "transformer",
      ],
    },
  },
} satisfies Meta<typeof Device>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "megapack-2xl",
    x: 0,
    y: 0,
    width: 10,
    height: 10,
  },
};
