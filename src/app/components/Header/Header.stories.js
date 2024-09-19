import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    background: {
      options: ["normal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    background: "normal",
    className: {},
  },
};
