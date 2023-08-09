import type { StoryObj } from "@storybook/react";
import SliderControl from ".";

const meta = {
  title: "Layout/SliderControl",
  component: SliderControl,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본형 슬라이더 컨트롤
 */
export const Default: Story = {
  args: {},
};
