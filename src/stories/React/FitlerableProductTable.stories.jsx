import FilterableProductTable from "./FilterableProductTable"

export default {
  title: "Components/FilterableProductTable",
  component: FilterableProductTable,
  args: {
    products: [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ],
  },
  argTypes: { 
  },
}

const Template = args => <FilterableProductTable {...args} />

export const Table1 = Template.bind({})
Table1.args = {
}



