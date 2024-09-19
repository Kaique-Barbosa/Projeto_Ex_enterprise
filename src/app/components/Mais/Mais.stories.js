import { Mais } from ".";

export default {
  title: "Components/Mais",
  component: Mais,
  argTypes: {
    direO: {
      options: ["vertical", "horizontal", "horizontal-mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    direO: "vertical",
    className: {},
    coverCover: "/img/cover-5.svg",
    coverImg: "/img/cover-6.svg",
    coverCover1: "/img/cover-7.svg",
  },
};
