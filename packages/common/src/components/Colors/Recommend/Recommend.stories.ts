import type { StoryObj } from "@storybook/react";
import Recommend from ".";

const meta = {
  title: "Layout/Recommend",
  component: Recommend,
  tags: ["autodocs"],
  argTypes: {
    isSelected: { control: "boolean" },
    firstColor: { control: "color" },
    secondColor: { control: "color" },
    thirdColor: { control: "color" },
    fourthColor: { control: "color" },
    backgroundColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * 기본형
 */
export const Default: Story = {
  args: {},
};

/**
 * 커스터마이징 가능
 */
export const Customizing: Story = {
  args: {
    firstColor: "#50c7ec",
    secondColor: "#0a6d24c3",
    thirdColor: "#6658b3eb",
    fourthColor: "#cb6022ad",
    backgroundColor: "#1a7c645a",
  },
};

/**
 * 선택되었을 때
 */
export const Selected: Story = {
  args: {
    isSelected: true,
    firstColor: "#50c7ec",
    secondColor: "#0a6d24c3",
    thirdColor: "#6658b3eb",
    fourthColor: "#cb6022ad",
    backgroundColor: "#1a7c645a",
  },
};
