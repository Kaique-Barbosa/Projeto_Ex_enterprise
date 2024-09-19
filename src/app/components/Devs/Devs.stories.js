import { Devs } from ".";

export default {
  title: "Components/Devs",
  component: Devs,
  argTypes: {
    direO: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    direO: "vertical",
    className: {},
    coverCover: "/img/cover-2.svg",
    coverImg: "/img/cover-3.svg",
  },
};
