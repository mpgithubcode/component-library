import Heading1 from "./Heading1"

export default {
  title: "atoms/Heading1",
  component: Heading1,
  args: {
    text: "Heading",
    styles: {
      "font-weight": "bold",
    },
  },
  argTypes: { 
    handleClick: { action: "handleClick" },
    backgroundColor: { control: "color"}
  },
}

const Template = args => <Heading1 {...args} />

export const Heading_1 = Template.bind({})


