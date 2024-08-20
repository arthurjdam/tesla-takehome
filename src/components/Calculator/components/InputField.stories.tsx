import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta = {
  title: "Calculator/InputField",
  component: InputField,
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
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "megapack",
  },
};
