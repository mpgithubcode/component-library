import Button from "../../components/Button"

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Press Me",
    primary: true,
    disabled: false
  },
  argTypes: { 
    handleClick: { action: "handleClick" },
    backgroundColor: { control: "color"}
  },
}

const Template = args => <Button {...args} />

export const Small = Template.bind({})
Small.args = {
}


