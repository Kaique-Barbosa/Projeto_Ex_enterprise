import { Sobre } from ".";

export default {
  title: "Components/Sobre",
  component: Sobre,
  argTypes: {
    focus: {
      options: ["off"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    focus: "off",
    className: {},
  },
};
