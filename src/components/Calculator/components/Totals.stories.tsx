import type { Meta, StoryObj } from "@storybook/react";
import Totals from "./Totals";

const meta = {
  title: "Calculator/Totals",
  component: Totals,
} satisfies Meta<typeof Totals>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
