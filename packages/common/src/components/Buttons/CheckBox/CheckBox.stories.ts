import type { StoryObj } from "@storybook/react";
import CheckBox from ".";

const meta = {
  title: "Buttons/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    content: { control: "string" },
    checked: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본형
 */
export const Default: Story = {
  args: {
    content: "React + SCSS",
    checked: false,
  },
};
