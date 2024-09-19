import { Link } from ".";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    padrO: {
      options: ["header-hover", "menu-hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    padrO: "header-hover",
    className: {},
    text: "LINK",
  },
};
