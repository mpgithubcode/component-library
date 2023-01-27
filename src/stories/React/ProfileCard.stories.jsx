import ProfileCard from "./ProfileCard"

export default {
  title: "Components/ProfileCard",
  component: ProfileCard,
  args: {
    image: "https://via.placeholder.com/500",
    prof_pic: "https://via.placeholder.com/500",
    name: "Victor Crest",
    age: 26,
    location: "London",
    stats: [
      {
        stat: "80k",
        metric: "Followers",
      },
      {
        stat: "803k",
        metric: "Likes",
      },
      {
        stat: "1.4k",
        metric: "Photos",
      },
    ],
    styles: {
      container: {
        "width": "100%",
        "max-width": "500px",
        "display": "flex",
        "justify-content": "center",
        "flex-direction": "column",
        "align-items": "center",
        "text-align": "center",
        "border-radius": "10px",
        "background": "#fff",
        "overflow": "hidden",
        "position": "relative",
        "font-family": "'Kumbh Sans', sans-serif",
      },
      image: {
        "object-fit": "cover",
        "max-width": "100%",
        "flex-basis": "20%",
        "flex-shrink": "1",
      },
      prof_pic: {
        "border-radius": "50%",
        "width": "5rem",
        "position": "absolute",
        "left": "50%",
        "bottom": "13rem",
        "transform": "translateX(-50%)",
        "border": "5px solid white"
      },
      content: {
        "display": "flex",
        "flex-direction": "column",
        "width": "100%",
        "font-size": "18px",
        "padding": "1.5rem",
      },
      info: {
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "center",
        "align-items": "center",
        "margin-top": "2rem",
      },
      name: {
        "font-size": "18px",
        "margin-right": ".5rem",
      },
      age: {
        "font-size": "18px",
      },
      location: {
        "padding-bottom": "5rem",
      },
      stat_div: {
        "display": "flex",
        "flex-direction": "row",
        "justify-content": "space-between"
      },
      stats: {
        div: {
        "display": "flex",
        "justify-content": "center",
        "flex-direction": "column",
        },
        stat: {
          "display": "flex",
          "justify-content": "center",
          "font-weight": "bold",
        },
        metric: {
          "display": "flex",
          "justify-content": "center",
          "font-weight": "normal",
          "font-size": "10px", 
        },
      },
    },
  },
  argTypes: { 
  },
}

const Template = args => <ProfileCard {...args} />

export const Card = Template.bind({})
Card.args = {
}
