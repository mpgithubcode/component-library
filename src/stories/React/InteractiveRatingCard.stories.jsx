
import InteractiveRatingCard from "./InteractiveRatingCard"

export default {
  title: "Components/InteractiveRatingCard",
  component: InteractiveRatingCard,
  args: {
    heading: "How did we do?",
    text: "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!",
    list_items: [
      1, 2, 3, 4, 5,
    ],
    submit_button: "Submit"
  },
  argTypes: { 
  },
}

const Template = args => <InteractiveRatingCard {...args} />

export const Interactive_Rating_Card = Template.bind({})
Interactive_Rating_Card.args = {
}
