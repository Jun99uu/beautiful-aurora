import { TestChild } from "./index";
import type { StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Buttons/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: "small" || "large",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 헤더 버튼
 */
export const Small: Story = {
  args: {
    size: "small",
    children: TestChild(),
  },
};

/**
 * 부모 상속이라 너비 넓게 나옴
 */
export const Large: Story = {
  args: {
    size: "large",
    children: TestChild(),
  },
};
