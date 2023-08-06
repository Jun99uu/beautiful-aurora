import type { StoryObj } from "@storybook/react";
import Aurora from ".";

const meta = {
  title: "Layout/Aurora",
  component: Aurora,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Background: Story = {
  args: { width: "100vw" },
};

export const Longer: Story = {
  args: { width: "100vw", height: "200vh" },
};
