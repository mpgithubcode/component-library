import Label from "./Label"

export default {
  title: "atoms/Label",
  component: Label,
  args: {
    text: "Label",
    styles: {
      "font-weight": "normal",
    },
  },
  argTypes: { 
  },
}

const Template = args => <Label {...args} />

export const Label_small = Template.bind({})
Label_small.args = {
}
