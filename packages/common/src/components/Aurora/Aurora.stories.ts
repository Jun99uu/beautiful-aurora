import type { StoryObj } from "@storybook/react";
import AuroraComponent from ".";

const meta = {
  title: "Layout/Aurora",
  component: AuroraComponent,
  tags: ["autodocs"],
  argTypes: {
    width: { control: "number" },
    heightt: { control: "number" },
    backgroundColor: { control: "color" },
    firstColor: { control: "color" },
    secondColor: { control: "color" },
    thirdColor: { control: "color" },
    fourthColor: { control: "color" },
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
 * 배경용
 */
export const Background: Story = {
  args: { width: "100vw" },
};

/**
 * 높이가 긴 경우
 */
export const Longer: Story = {
  args: { width: "100vw", height: "200vh" },
};

/**
 * 커스터마이징 가능
 */
export const Customizing: Story = {
  args: {
    width: "100vw",
    height: "100vh",
    firstColor: "#50c7ec",
    secondColor: "#0a6d24c3",
    thirdColor: "#6658b3eb",
    fourthColor: "#cb6022ad",
    backgroundColor: "#1a7c645a",
  },
};
