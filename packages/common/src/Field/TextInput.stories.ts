import type { StoryObj } from "@storybook/react";
import TextInput from ".";

const meta = {
  title: "Field/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "string" },
    value: { control: "string" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본형
 */
export const Default: Story = {
  args: {
    placeholder: "width",
    value: "",
  },
};

/**
 * 밸류 있음
 */
export const Value: Story = {
  args: {
    placeholder: "width",
    value: "hi",
  },
};
