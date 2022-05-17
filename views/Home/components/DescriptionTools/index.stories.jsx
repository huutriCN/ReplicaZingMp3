/// components
import DescriptionTools from "./index";

const Template = ({ display }) => <DescriptionTools display={display} />;

export default {
  title: "views/Home/components/DescriptionTools",
  component: DescriptionTools,
  argTypes: {
    display: {
      control: { type: "boolean" },
    },
  },
};

export const Primary = Template.bind({});
Primary.args = {
  display: true,
};
