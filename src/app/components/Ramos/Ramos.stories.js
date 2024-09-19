import { Ramos } from ".";

export default {
  title: "Components/Ramos",
  component: Ramos,
  argTypes: {
    focus: {
      options: ["on"],
      control: { type: "select" },
    },
    screen: {
      options: ["desktop", "tablet", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    focus: "on",
    screen: "desktop",
    className: {},
  },
};
