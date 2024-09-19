import { LinkAtual } from ".";

export default {
  title: "Components/LinkAtual",
  component: LinkAtual,
  argTypes: {
    normal: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    normal: "default",
    className: {},
    linkClassName: {},
    text: "LINK",
    lineClassName: {},
    line: "/img/line-1-1.svg",
  },
};
