export interface MenuItem {
  name: string;
  price: string;
  note?: string;
}

export interface MenuGroup {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface FeaturedItem {
  name: string;
  price: string;
  desc: string;
}

// ─── Pizza Slices ─────────────────────────────────────────────────
export const pizzaSlices: MenuGroup = {
  id: "pizza-slices",
  title: "Grab a Slice",
  items: [
    { name: "Boudain & Bacon Slice", price: "$6.99" },
    { name: "Buffalo Chicken Slice", price: "$6.99" },
    { name: "Cheese Slice", price: "$4.99" },
    { name: "Margherita Slice", price: "$5.99" },
    { name: "Oxtail Slice", price: "$12.99" },
    { name: "Pepperoni Slice", price: "$5.99" },
    { name: "Sausage Slice", price: "$5.99" },
    { name: "Veggie Slice", price: "$6.99" },
    {
      name: "5 Borough (Meat Lovers) Slice",
      price: "$6.99",
      note: "Pepperoni, Bacon, Buffalo Chicken, Italian Sausage, Beef",
    },
  ],
};

export const cheeseGarlicBread: MenuGroup = {
  id: "cheese-garlic-bread",
  title: "Cheese Garlic Bread",
  items: [{ name: "Cheese Garlic Bread", price: "$8.99" }],
};

export const luvLemonade: MenuGroup = {
  id: "luv-lemonade",
  title: "Luv Lemonade",
  items: [
    { name: "Small", price: "$2.99" },
    { name: "Medium", price: "$3.99" },
    { name: "Large", price: "$4.99" },
  ],
};

export const cannedDrinks: MenuGroup = {
  id: "canned-drinks",
  title: "Canned Drinks",
  items: [
    {
      name: "Any Can",
      price: "$2.00",
      note: "Coca-Cola, Sprite, Fanta, Dr Pepper",
    },
  ],
};

// ─── Whole Pies ─────────────────────────────────────────────
export const nyStylePizzaSizes: MenuGroup = {
  id: "ny-style-pizza-sizes",
  title: "New York Style Pizzas",
  items: [
    { name: '16" Large', price: "$19.99" },
    { name: '18" XL', price: "$24.99" },
  ],
};

export const nyStylePizzaChoices: string[] = [
  "Cheese",
  "Pepperoni",
  "Sausage",
  "Margherita",
  "Veggie",
  "Buffalo Chicken",
  "Boudain & Bacon",
  "5 Borough (Meat Lovers)",
];

export const premiumOxtailPizza: MenuGroup = {
  id: "premium-oxtail-pizza",
  title: "Premium Oxtail Pizza",
  items: [{ name: 'One Size (18")', price: "$49.99" }],
};

export const optionalToppings: MenuGroup = {
  id: "optional-toppings",
  title: "Optional Toppings",
  items: [
    { name: "Pepperoni", price: "$2.00" },
    { name: "Sausage", price: "$2.00" },
    { name: "Bacon", price: "$3.00" },
    { name: "Onions", price: "$2.00" },
    { name: "Green Peppers", price: "$2.00" },
    { name: "Black Olives", price: "$2.00" },
    { name: "Jalapenos", price: "$2.00" },
    { name: "Extra Cheese", price: "$3.00" },
    { name: "Extra Oxtail", price: "$6.00" },
  ],
};

// ─── Flatbread Specials ───────────────────────────────────────
export const flatbreadSpecials: FeaturedItem[] = [
  {
    name: "Keke Special",
    price: "$14.99",
    desc: "Cheese, Jalapeno Flakes, Oxtail, Tomato Sauce, Hot Honey",
  },
  {
    name: "Philly Steak",
    price: "$14.99",
    desc: "Steak, Onions, Green Peppers, Mozzarella Cheese",
  },
];

// ─── Icees & Sweets ─────────────────────────────────────────────
export const pineappleStuffedFruit: MenuGroup = {
  id: "pineapple-stuffed-fruit",
  title: "Pineapple Stuffed Fruit",
  items: [
    {
      name: "Whole Pineapple",
      price: "$14.99",
      note: "Packed fresh with seasonal fruit",
    },
  ],
};

export const snowCones: MenuGroup = {
  id: "snow-cones",
  title: "Snow Cones",
  items: [
    { name: "Small", price: "$5.00" },
    { name: "Medium", price: "$6.00" },
    { name: "Large", price: "$7.00" },
  ],
};

export const waterIce: MenuGroup = {
  id: "water-ice",
  title: "Water Ice",
  items: [
    { name: "1 Scoop", price: "$3.00" },
    { name: "2 Scoops", price: "$6.00" },
    { name: "3 Scoops", price: "$9.00" },
  ],
};

// ─── Homemade Jamaican Beef Patties ──────────────────────────────
export const jamaicanPatties = {
  title: "Homemade Jamaican Beef Patties",
  price: "$4.99",
  priceLabel: "EACH",
  flavors: ["Mild Beef", "Spicy Beef", "Jerk Chicken", "Regular Chicken"],
  note: "Flaky, golden, baked fresh in-house",
};
