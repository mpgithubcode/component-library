import Stats from "./Stats"

export default {
  title: "components/Stats",
  component: Stats,
  args: {
    stat: "80k",
    metric: "Followers",
    styles: {
      div: {
      "display": "flex",
      "justify-content": "center",
      "flex-direction": "column",
      },
      stat: {
        "display": "flex",
        "justify-content": "center",
        "font-weight": "bold",
        "font-size": "10px", 
      },
      metric: {
        "display": "flex",
        "justify-content": "center",
        "font-weight": "normal",
        "font-size": "10px", 
      },
    },
  },
  argTypes: { 
    styles_stat: { contorl: 'object' }
  },
}

const Template = args => <Stats {...args} />

export const Stats_Div = Template.bind({})
Stats_Div.args = {
}
