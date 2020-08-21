export const formatPrice = (price) => {
  return price.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
};

export const foodItems = [
  {
    id: 1,
    name: "Small Meal for 1",
    img: "./img/meal/small-meal.jpeg",
    section: "Meal",
    price: 7.99,
    description:
      "Any Subway Favourite 6-Inch Sub + a packet of crisps + a cookie + a drink. ",
  },
  {
    id: 2,
    name: "Large Meal for 1",
    img: "./img/meal/large-meal.jpeg",
    section: "Meal",
    price: 11.99,
    description:
      "Any Subway Favourite Footlong Sub + a packet of crisps + a cookie + a drink.",
  },
  {
    id: 3,
    name: "Family Meal",
    img: "./img/meal/family-meal.jpeg",
    section: "Meal",
    price: 21.49,
    description:
      "Any 2x Subway Favourite Footlong Subs + Nachos + Large Pepsi Max 1.25Ltr.",
  },
  {
    id: 4,
    name: "Hash Browns",
    img: "./img/sides/hash-browns.jpeg",
    section: "Sides",
    price: 1.25,
    description: "Six golden, crispy hash browns with a sauce of your choice.",
  },
  {
    id: 5,
    name: "Nachos",
    img: "./img/sides/nachos.jpeg",
    section: "Sides",
    price: 2.5,
    description:
      "Delicious Doritos® lightly salted nacho tortilla chips, grated mozzarella and cheddar cheese, with spicy salsa and jalapenos.",
  },
  {
    id: 6,
    name: "Bowl of Meatballs",
    img: "./img/sides/meatballs.jpeg",
    section: "Sides",
    price: 2.15,
    description:
      "Choose from either our Beef meatballs topped with melted mozzarella and cheddar cheese, or our Meatless^ meatballs with melted tasty Mozzarella-style vegan˅ slices. Both covered in our signature marinara sauce and jalapenos. Just like Mama Subway ® used to make… ^May come in contact with non-vegetarian items. ˅Our vegan products are made using vegan ingredients. However, within our normal operating environment, our vegan ingredients may come into contact with non-vegan.",
  },
  {
    id: 7,
    name: "Cheesy Garlic Bread",
    img: "./img/sides/cheesy-bread.jpeg",
    section: "Sides",
    price: 1.25,
    description:
      "Grated Mozzarella and cheddar cheese, with roasted garlic and parsley spread.",
  },
  {
    id: 8,
    name: "Cheese Toasted Bite",
    img: "./img/sides/toasted-bite.jpeg",
    section: "Sides",
    price: 1.6,
    description:
      "Simple but satisfying. Two veggies of your choice, topped with grated mozzarella and cheddar cheese",
  },
  {
    id: 9,
    name: "Ham & Cheese Toasted Bite",
    img: "./img/sides/ham-toasted.jpeg",
    section: "Sides",
    price: 1.6,
    description:
      "A twist on the usual toastie.Ham‡, melting American-style cheese in a ciabatta roll with two veggies of your choice. ‡Formed Meat.",
  },
  {
    id: 10,
    name: "Steak & Cheese Toasted Bite",
    img: "./img/sides/steak-toasted.png",
    section: "Sides",
    price: 1.6,
    description:
      "The same classic flavour, in a lil' package. Philly-style steak‡Ø with white diced onions and green peppers, topped with melted American-style cheese in a ciabatta roll with two veggies of your choice. ‡Formed meat. ØMade with shaved steak strips, contains peppers & onions.",
  },
  {
    id: 11,
    name: "Tuna Melt Toasted Bite",
    img: "./img/sides/tuna-toasted.png",
    section: "Sides",
    price: 1.6,
    description:
      "A light lunch or a sizable snack. Flaked light tuna in brine mixed with lite mayo, piled into a ciabatta roll with melting American-style cheese and two veggies of your choice.",
  },
  {
    id: 12,
    name: "Mozzarella-Style Cheese-Free Toasted Bite",
    section: "Sides",
    price: 1.6,
    description:
      "Tasty Mozzarella-style vegan˅ slices with two veggies of your choice. ˅Our vegan products are made using vegan ingredients. However, within our normal operating environment, our vegan ingredients may come into contact with non-vegan ingredients.",
  },
  {
    id: 13,
    name: "Footlong Sub - Cheesy Pepperoni",
    img: "./img/subs/cheesy-pepperoni.jpeg",
    section: "Footlong Classic Subs",
    price: 5.5,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Footlong Sub - Ham",
    img: "./img/subs/ham.jpeg",
    section: "Footlong Classic Subs",
    price: 6.8,
    description:
      "Ham‡. Simple. Elegant. Delicious. A sandwich for the purists. And the ones that want to load it with veggies and sauces. ‡Formed Meat.",
  },
  {
    name: "Footlong Sub - Veggie Delite",
    img: "./img/subs/veggie-delite.jpeg",
    section: "Footlong Classic Subs",
    price: 6.75,
    description:
      "Herbivore heaven can be found in the form of our delicious veggie delite sub - packed to the brim with freshly-cut veggies and sauces of your choice. ",
  },
  {
    name: "Footlong Sub - Meat Feast",
    img: "./img/subs/meat-feast.png",
    section: "Footlong Classic Subs",
    price: 6.25,
    description:
      "A triple meaty flavour hit from Ham, spicy pepperoni and beef meatballs, covered in our signature marinara sauce and topped with American style cheese.",
  },
  {
    name: "Footlong Sub - Meatless Meatball Marinara",
    img: "./img/subs/veggie-meatballs.jpeg",
    section: "Footlong Classic Subs",
    price: 7,
    description:
      "Our plant-based Meatless Meatballs, covered with our signature marinara sauce and topped with tasty Mozzarella-style vegan slices.",
  },
  {
    name: "Footlong Sub - Rotisserie-Style Chicken",
    img: "./img/subs/rotisserie-chicken.jpeg",
    section: "Footlong Classic Subs",
    price: 8,
    description:
      "Marinated chicken breast, seared, and cooked in its own juice, before being hand-torn in store.",
  },
  {
    name: "Footlong Sub - Italian B.M.T.",
    img: "./img/subs/italian-bmt.jpeg",
    section: "Footlong Classic Subs",
    price: 7.3,
    description:
      "Our meaty classic, loaded with Ham, spicy pepperoni, and salami. MEATY. ",
  },
  {
    name: "Footlong Sub - Meatball Marinara",
    img: "./img/subs/meatballs.jpeg",
    section: "Footlong Classic Subs",
    price: 7.3,
    description:
      "The original Subway icon. Beef meatballs, covered in our signature marinara sauce, and topped with American-style cheese.",
  },
  {
    name: "Footlong Sub - Tuna",
    img: "./img/subs/tuna.jpeg",
    section: "Footlong Classic Subs",
    price: 7.3,
    description:
      "Flaked light tuna in brine, mixed with lite mayo, and heaped into your choice of fresh bread. A classic. ",
  },
  {
    name: "Footlong Sub - Spicy Italian",
    img: "./img/subs/spicy-italian.jpeg",
    section: "Footlong Classic Subs",
    price: 6.8,
    description:
      "Our signature sub that packs a spicy Italian punch - and by that we mean spicy pepperoni and fiery salami.",
  },
  {
    name: "Footlong Sub - Chicken Tikka",
    img: "./img/subs/chicken-tikka.jpeg",
    section: "Footlong Classic Subs",
    price: 7.3,
    description:
      "Cooked and diced chicken breast marinated with delicious tikka spices.",
  },
  {
    name: "Footlong Sub - Turkey Breast",
    img: "./img/subs/turkey-breast.jpeg",
    section: "Footlong Classic Subs",
    price: 6.8,
    description:
      "Fill your sub with juicy sliced turkey breast, and get your turkey fix anytime of the year.",
  },
  {
    name: "Footlong Sub - Chicken Breast",
    img: "./img/subs/chicken-breast.jpeg",
    section: "Footlong Classic Subs",
    price: 7.5,
    description:
      "Our delicious chicken breast is made from perfectly cooked, marinated chicken breast fillets - and goes great with any fillings.",
  },
  {
    name: "Footlong Sub - Turkey Breast & Ham",
    img: "./img/subs/turkey-ham.jpeg",
    section: "Footlong Classic Subs",
    price: 7,
    description:
      "Sliced turkey‡ breast and sliced Ham‡. The delicious double act that's always full on flavour - winning combo. ‡Formed Meat.",
  },
  {
    name: "Footlong Sub - Steak & Cheese",
    img: "./img/subs/steak-cheese.jpeg",
    section: "Footlong Classic Subs",
    price: 8.3,
    description:
      "Philly-style steak‡, with diced white onions and green peppers, topped with 4 slices of American-style cheese. A fan favourite. ‡Formed meat. ØMade with shaved steak strips, contains peppers & onions.",
  },
  {
    name: "Footlong Sub - Chicken Teriyaki",
    img: "./img/subs/chicken-teriyaki.jpeg",
    section: "Footlong Classic Subs",
    price: 8,
    description:
      "Marinated chicken breast, cooked to perfection and covered with a sticky, savoury, and sweet teriyaki glaze. Perfect with our Sweet Onion Sauce.",
  },
  {
    name: "Footlong Sub - Subway Melt",
    img: "./img/subs/subway-melt.jpeg",
    section: "Footlong Classic Subs",
    price: 8,
    description:
      "Ham‡. Turkey Breast‡. Smoked cured streaky bacon. Lovingly topped with 4 slices of American-style cheese. So good we put our name on it. . ‡Formed Meat.",
  },
  {
    name: "Footlong Sub - Chicken & Bacon Melt",
    img: "./img/subs/chicken-bacon.jpeg",
    section: "Footlong Classic Subs",
    price: 8.2,
    description:
      "Chicken breast, 4 slices of smoked maple streaky bacon, with grated mozzarella and cheddar cheese.",
  },
  {
    name: "Footlong Sub - Vegan Patty",
    img: "./img/subs/vegan-patty.jpeg",
    section: "Footlong Classic Subs",
    price: 8,
    description:
      "This one's for the plant lovers. Our seasoned vegan patty, made with red onion, red sweet pepper, green sweet pepper, carrot, spinach, corn, white cabbage, peas and green chillies.",
  },
  {
    name: "Footlong Sub - Chicken Pizziola",
    img: "./img/subs/chicken-pizziola.jpeg",
    section: "Footlong Classic Subs",
    price: 8,
    description:
      "Tender chicken breast and spicy pepperoni, topped with our signature marinara sauce and 4 slices of American-style cheese. Our version of a Chicken Pizza in a sub.",
  },
  {
    name: "Footlong Sub - BLT",
    img: "./img/subs/blt.jpeg",
    section: "Footlong Classic Subs",
    price: 6.7,
    description:
      "You just need 8 slices of maple smoked streaky bacon, lettuce and tomatoes to keep the tradition alive.",
  },
  {
    name: "6-Inch - Cheesy Pepperoni",
    section: "6-Inch Classic Subs",
    price: 3,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "6-Inch - Ham",
    section: "6-Inch Classic Subs",
    price: 4.3,
    description:
      "Ham‡. Simple. Elegant. Delicious. A sandwich for the purists. And the ones that want to load it with veggies and sauces. ‡Formed Meat.",
  },
  {
    name: "6-Inch - Veggie Delite",
    section: "6-Inch Classic Subs",
    price: 3.75,
    description:
      "Herbivore heaven can be found in the form of our delicious veggie delite sub - packed to the brim with freshly-cut veggies and sauces of your choice. ",
  },
  {
    name: "6-Inch - Meat Feast",
    section: "6-Inch Classic Subs",
    price: 3.75,
    description:
      "A triple meaty flavour hit from Ham, spicy pepperoni and beef meatballs, covered in our signature marinara sauce and topped with American style cheese.",
  },
  {
    name: "6-Inch - Meatless Meatball Marinara",
    section: "6-Inch Classic Subs",
    price: 4.5,
    description:
      "Our plant-based Meatless Meatballs, covered with our signature marinara sauce and topped with tasty Mozzarella-style vegan slices.",
  },
  {
    name: "6-Inch - Rotisserie-Style Chicken",
    section: "6-Inch Classic Subs",
    price: 5.5,
    description:
      "Marinated chicken breast, seared, and cooked in its own juice, before being hand-torn in store.",
  },
  {
    name: "6-Inch - Italian B.M.T.",
    section: "6-Inch Classic Subs",
    price: 4.8,
    description:
      "Our meaty classic, loaded with Ham, spicy pepperoni, and salami. MEATY. ",
  },
  {
    name: "6-Inch - Meatball Marinara",
    section: "6-Inch Classic Subs",
    price: 4.8,
    description:
      "The original Subway icon. Beef meatballs, covered in our signature marinara sauce, and topped with American-style cheese.",
  },
  {
    name: "6-Inch - Tuna",
    section: "6-Inch Classic Subs",
    price: 4.8,
    description:
      "Flaked light tuna in brine, mixed with lite mayo, and heaped into your choice of fresh bread. A classic. ",
  },
  {
    name: "6-Inch - Spicy Italian",
    section: "6-Inch Classic Subs",
    price: 4.3,
    description:
      "Our signature sub that packs a spicy Italian punch - and by that we mean spicy pepperoni and fiery salami.",
  },
  {
    name: "6-Inch - Chicken Tikka",
    section: "6-Inch Classic Subs",
    price: 4.8,
    description:
      "Cooked and diced chicken breast marinated with delicious tikka spices.",
  },
  {
    name: "6-Inch - Turkey Breast",
    section: "6-Inch Classic Subs",
    price: 4.3,
    description:
      "Fill your sub with juicy sliced turkey breast, and get your turkey fix anytime of the year.",
  },
  {
    name: "6-Inch - Chicken Breast",
    section: "6-Inch Classic Subs",
    price: 5,
    description:
      "Our delicious chicken breast is made from perfectly cooked, marinated chicken breast fillets - and goes great with any fillings.",
  },
  {
    name: "6-Inch - Turkey Breast & Ham",
    section: "6-Inch Classic Subs",
    price: 4.5,
    description:
      "Sliced turkey‡ breast and sliced Ham‡. The delicious double act that's always full on flavour - winning combo. ‡Formed Meat.",
  },
  {
    name: "6-Inch - Steak & Cheese",
    section: "6-Inch Classic Subs",
    price: 5.8,
    description:
      "Philly-style steak‡, with diced white onions and green peppers, topped with 4 slices of American-style cheese. A fan favourite. ‡Formed meat. ØMade with shaved steak strips, contains peppers & onions.",
  },
  {
    name: "6-Inch - Chicken Teriyaki",
    section: "6-Inch Classic Subs",
    price: 5.5,
    description:
      "Marinated chicken breast, cooked to perfection and covered with a sticky, savoury, and sweet teriyaki glaze. Perfect with our Sweet Onion Sauce.",
  },
  {
    name: "6-Inch - Subway Melt",
    section: "6-Inch Classic Subs",
    price: 5.5,
    description:
      "Ham‡. Turkey Breast‡. Smoked cured streaky bacon. Lovingly topped with 4 slices of American-style cheese. So good we put our name on it. . ‡Formed Meat.",
  },
  {
    name: "6-Inch - Chicken & Bacon Melt",
    section: "6-Inch Classic Subs",
    price: 5.7,
    description:
      "Chicken breast, 4 slices of smoked maple streaky bacon, with grated mozzarella and cheddar cheese.",
  },
  {
    name: "6-Inch - Vegan Patty",
    section: "6-Inch Classic Subs",
    price: 5.5,
    description:
      "This one's for the plant lovers. Our seasoned vegan patty, made with red onion, red sweet pepper, green sweet pepper, carrot, spinach, corn, white cabbage, peas and green chillies.",
  },
  {
    name: "6-Inch - Chicken Pizziola",
    section: "6-Inch Classic Subs",
    price: 5.5,
    description:
      "Tender chicken breast and spicy pepperoni, topped with our signature marinara sauce and 4 slices of American-style cheese. Our version of a Chicken Pizza in a sub.",
  },
  {
    name: "6-Inch - BLT",
    section: "6-Inch Classic Subs",
    price: 4.2,
    description:
      "You just need 8 slices of maple smoked streaky bacon, lettuce and tomatoes to keep the tradition alive.",
  },
  {
    name: "Chipotle Steak & Cheese",
    img: "./img/wraps/steak-cheese.jpeg",
    section: "Signature Loaded Wraps",
    price: 7.5,
    description:
      "Double the meat of a 6-inch. With Philly-style steak‡Ø, white diced onions and green peppers, topped with grated mozzarella and cheddar cheese, and our spicy Southwest sauce. THAT's a wrap. ‡Formed meat. ØMade with shaved steak strips, contains peppers & onions.",
  },
  {
    name: "BBQ Chicken & Bacon",
    img: "./img/wraps/chicken-bacon.jpeg",
    section: "Signature Loaded Wraps",
    price: 7.3,
    description:
      "Double the meat of a 6-inch. With tender chicken breast AND 4 slices of delicious smoked maple streaky Bacon AND crispy onions AND Hickory Smoked BBQ Sauce.",
  },
  {
    name: "Vegan",
    img: "./img/wraps/vegan.jpeg",
    section: "Signature Loaded Wraps",
    price: 7.3,
    description:
      "Herbivore heaven with two flavour-packed vegan˅ pattys, sweet SunBlush™ tomatoes and vegan˅ garlic aioli ˅Our vegan products are made using vegan ingredients. However, within our normal operating environment, our vegan ingredients may come into contact with non-vegan ingredients.",
  },
  {
    name: "Salad Bowl - Rotisserie-Style Chicken",
    section: "Salad Bowls",
    price: 5.45,
    description:
      "Marinated chicken breast, seared, and cooked in its own juice, before being hand-torn in store.",
  },
  {
    name: "Salad Bowl - Italian B.M.T.®",
    img: "./img/salad-bowls/italian-bmt.jpeg",
    section: "Salad Bowls",
    price: 5.45,
    description:
      "Our meaty classic, loaded with Ham‡, spicy pepperoni, and salami. MEATY. ‡Formed Meat.",
  },
  {
    name: "Salad Bowl - Tuna",
    img: "./img/salad-bowls/tuna.jpeg",
    section: "Salad Bowls",
    price: 5.15,
    description:
      "Flaked light tuna in brine, mixed with lite mayo, and added to your favourite veggies. A Classic.",
  },
  {
    name: "Salad Bowl - Spicy Italian",
    section: "Salad Bowls",
    price: 4.85,
    description:
      "Our signature salad that packs a spicy Italian punch - and by that we mean spicy pepperoni and fiery salami.",
  },
  {
    name: "Salad Bowl - Chicken Tikka",
    img: "./img/salad-bowls/chicken-tikka.jpeg",
    section: "Salad Bowls",
    price: 5.15,
    description:
      "Cooked and diced chicken breast marinated with delicious tikka spices.",
  },
  {
    name: "Salad Bowl - Ham",
    img: "./img/salad-bowls/ham.jpeg",
    section: "Salad Bowls",
    price: 4.85,
    description:
      "Ham‡. Simple. Elegant. Delicious. A salad for the purists. And the ones that want to load it with veggies and sauces. ‡Formed Meat.",
  },
  {
    name: "Salad Bowl - Turkey Breast",
    img: "./img/salad-bowls/turkey-breast.jpeg",
    section: "Salad Bowls",
    price: 4.85,
    description:
      "Add juicy sliced turkey breast‡ to your salad, and get your turkey fix anytime of the year.‡Formed meat.",
  },
  {
    name: "Salad Bowl - Chicken Breast",
    img: "./img/salad-bowls/chicken-breast.jpeg",
    section: "Salad Bowls",
    price: 5.4,
    description:
      "Our delicious chicken breast is made from perfectly cooked, marinated chicken breast fillets - and goes great with any fillings.",
  },
  {
    name: "Salad Bowl - Turkey Breast & Ham",
    img: "./img/salad-bowls/turkey-ham.jpeg",
    section: "Salad Bowls",
    price: 4.85,
    description:
      "Sliced turkey‡ breast and sliced ham‡. The delicious double act that's always full on flavour - winning combo. ‡Formed Meat.",
  },
  {
    name: "Salad Bowl - Veggie Delite",
    section: "Salad Bowls",
    price: 4.4,
    description:
      "Herbivore heaven can be found in the form of our delicious veggie^ delite salad - packed to the brim with freshly-cut veggies and sauces of your choice.^May come in contact with non-vegetarian items.",
  },
  {
    name: "Salad Bowl - Steak & Cheese",
    section: "Salad Bowls",
    price: 6.15,
    description:
      "Philly-style steak‡, with diced white onions and green peppers, topped with 2 slices of American-style cheese. A fan favourite. ‡Formed meat. ØMade with shaved steak strips, contains peppers & onions.",
  },
  {
    name: "Salad Bowl - Chicken Teriyaki",
    section: "Salad Bowls",
    price: 5.75,
    description:
      "Marinated chicken breast, cooked to perfection and covered with a sticky, savoury, and sweet teriyaki glaze. Perfect with our Sweet Onion Sauce..",
  },
  {
    name: "Salad Bowl - Chicken & Bacon",
    section: "Salad Bowls",
    price: 6.05,
    description:
      "Chicken breast, 2 slices of smoked maple streaky bacon, with grated mozzarella and cheddar cheese",
  },
  {
    name: "Salad Bowl - Vegan Patty",
    img: "./img/salad-bowls/vegan-patty.jpeg",
    section: "Salad Bowls",
    price: 5.85,
    description:
      "This one's for the plant lovers. Our seasoned vegan˅ patty, made with red onion, red sweet pepper, green sweet pepper, carrot, spinach, corn, white cabbage, peas and green chillies. ˅Our vegan products are made using vegan ingredients. However, within our normal operating environment, our vegan ingredients may come into contact with non-vegan ingredients.",
  },
  {
    name: "Salad Bowl - Chicken Pizziola",
    section: "Salad Bowls",
    price: 5.9,
    description:
      "Tender chicken breast and spicy pepperoni, topped with our signature marinara sauce and 2 slices of American-style cheese.",
  },
  {
    name: "Salad Bowl - BLT",
    section: "Salad Bowls",
    price: 4.85,
    description:
      "You just need 4 slices of maple smoked streaky bacon, lettuce and tomatoes to keep the tradition alive.",
  },
  {
    name: "Salad Bowl - Thai Chicken Salad",
    img: "./img/salad-bowls/thai-chicken.jpeg",
    section: "Salad Bowls",
    price: 5.75,
    description:
      "Marinated chicken breast, cooked to perfection, with a generous helping of sweet chilli sauce and heaps of crisp fresh veggies. No bread, but a whole lot of flavour.",
  },
  {
    name: "Pepsi Max 1.25ltr",
    img: "./img/drinks/pepsi-1.25ltr.jpeg",
    section: "Cold Drinks",
    price: 3.11,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Pepsi Max 500ml",
    img: "./img/drinks/pepsi-500ml.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Pepsi Max Cherry 500ml",
    img: "./img/drinks/pepsi-cherry-500ml.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Princes Gate Water 500ml",
    img: "./img/drinks/water.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Fruit Shoot Apple & Blackcurrant",
    img: "./img/drinks/fruit-shoot.jpeg",
    section: "Cold Drinks",
    price: 1.3,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Pepsi 375ml",
    img: "./img/drinks/pepsi-375ml.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "7UP Free",
    img: "./img/drinks/7up.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Lipton Ice Tea Peach",
    img: "./img/drinks/ice-tea.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Robinson's Refresh'd Raspberry & Apple",
    img: "./img/drinks/robinsons-raspberry.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Robinson's Refresh'd Orange & Passion Fruit",
    img: "./img/drinks/robinsons-orange.jpeg",
    section: "Cold Drinks",
    price: 1.3,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Gatorade Cool Blue (Raspberry)",
    img: "./img/drinks/gatorade.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Tropicana Orange Juice",
    img: "./img/drinks/tropicana.jpeg",
    section: "Cold Drinks",
    price: 1.9,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Mountain Dew Sugar Free",
    img: "./img/drinks/mountain-dew.jpeg",
    section: "Cold Drinks",
    price: 1.8,
    description:
      "Quench your thirst with one of our ice-cold bottled Pepsi Max drinks.",
  },
  {
    name: "Kids' Pak - Chicken Breast",
    img: "./img/kids/chicken.jpeg",
    section: "Kids' Pak",
    price: 4.2,
    description:
      "Marinated grilled chicken breast, in a kid-friendly mini sub, packed with all their favourite fresh salad and sauces. With a choice of a Robinsons Fruit Shoot or a bottled water. Plus a choice of a yummy Bear Yoyo, crisps or a cookie and a brain-boosting activity.",
  },
  {
    name: "Kids' Pak - Veggie Delite",
    img: "./img/kids/veggie.jpeg",
    section: "Kids' Pak",
    price: 4.2,
    description:
      "A kid-friendly Veggie Delite®^ mini sub, packed with crisp fresh-cut veggies, and their favourite sauce. With a choice of a Robinsons Fruit Shoot or a bottled water. Plus a choice of a yummy Bear Yoyo, crisps or a cookie and a brain-boosting activity. Veggielicious. ^May come in contact with non-vegetarian items",
  },
  {
    name: "Kids' Pak - Ham",
    img: "./img/kids/ham.jpeg",
    section: "Kids' Pak",
    price: 4.2,
    description:
      "Our classic ham ‡ sub, in a kid-friendly mini version, packed with all their favourite fresh salad and sauces. With a choice of a Robinsons Fruit Shoot or a bottled water. Plus a choice of a yummy Bear Yoyo, crisps or a cookie and a brain-boosting activity.‡Formed Meat",
  },
  {
    name: "Kids' Pak - Turkey Breast",
    img: "./img/kids/turkey.jpeg",
    section: "Kids' Pak",
    price: 4.2,
    description:
      "Turkey breast ‡ , in a kid-friendly mini sub, packed with all their favourite fresh salad and sauces. With a choice of a Robinsons Fruit Shoot or a bottled water. Plus a choice of a yummy Bear Yoyo, crisps or a cookie and a brain-boosting activity.‡Formed meat.",
  },
  {
    name: "Chocolate Chunk",
    img: "./img/extras/chocolate-chunk.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.8,
    description:
      "The classic - our famous Subway® cookie with melting chocolatey chunks.",
  },
  {
    name: "Double Chocolate",
    img: "./img/extras/double-chocolate.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.8,
    description:
      "Our classic Subway® cookie, with a heaping helping of chocolate chips AND white confectionary chips. Double trouble.",
  },
  {
    name: "Rainbow Candy Chip",
    img: "./img/extras/rainbow-candy.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.8,
    description:
      "Our cutest Subway® cookie, with chocolate chips and coloured sweet candies. Aw.",
  },
  {
    name: "Oatmeal Raisin",
    img: "./img/extras/oatmeal-raisin.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.8,
    description:
      "The ultimate comfort. Our classic Subway® cookie with oats and juicy raisins.",
  },
  {
    name: "White Chocolate & Macadamia Nut",
    img: "./img/extras/white-chocolate.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.8,
    description:
      "Our classic Subway® cookie pimped with white confectionary chips and macadamia nuts. One for the cookie connoisseurs.",
  },
  {
    name: "3 Pack Cookies",
    img: "./img/extras/3-pack-cookies.jpeg",
    section: "Snacks, Treats & Dip",
    price: 1.8,
    description: "Cookies on another level. Three is always better than one.",
  },
  {
    name: "Mixed 12 Pack Cookies",
    img: "./img/extras/12-pack-cookies.jpeg",
    section: "Snacks, Treats & Dip",
    price: 5,
    description:
      "Make your own mixed 12 pack of cookies, choosing the cookies of your choice!",
  },
  {
    name: "Cadbury® Muffin",
    img: "./img/extras/cadbury-muffin.jpeg",
    section: "Snacks, Treats & Dip",
    price: 1.9,
    description:
      "A heavenly Cadbury® creation with creamy mini buttons, a dense smooth chocolate topping, smooth caramel curls and a sticky caramel filling.",
  },
  {
    name: "Doritos Tangy Cheese",
    img: "./img/extras/doritos.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.9,
    description:
      "We’ve got all your favourites from Walkers Cheese & Onion to Doritos Tangy Cheese. Top tip...throw some crisps inside your sub for a flavour sensation!",
  },
  {
    name: "Walkers Cheese & Onion",
    img: "./img/extras/walkers-cheese-onion.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.9,
    description:
      "We’ve got all your favourites from Walkers Cheese & Onion to Doritos Tangy Cheese. Top tip...throw some crisps inside your sub for a flavour sensation!",
  },
  {
    name: "Walkers Ready Salted",
    img: "./img/extras/walkers-ready-salted.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.9,
    description:
      "We’ve got all your favourites from Walkers Cheese & Onion to Doritos Tangy Cheese. Top tip...throw some crisps inside your sub for a flavour sensation!",
  },
  {
    name: "Walkers Oven Baked Cheese & Onion",
    img: "./img/extras/walkers-baked-cheese-onion.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.9,
    description:
      "We’ve got all your favourites from Walkers Cheese & Onion to Doritos Tangy Cheese. Top tip...throw some crisps inside your sub for a flavour sensation!",
  },
  {
    name: "Walkers Quavers Cheese",
    img: "./img/extras/walkers-quavers.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.9,
    description:
      "We’ve got all your favourites from Walkers Cheese & Onion to Doritos Tangy Cheese. Top tip...throw some crisps inside your sub for a flavour sensation!",
  },
  {
    name: "Sweet Chilli Sunbites",
    img: "./img/extras/sweet-chilli-sunbites.jpeg",
    section: "Snacks, Treats & Dip",
    price: 0.9,
    description:
      "We’ve got all your favourites from Walkers Cheese & Onion to Doritos Tangy Cheese. Top tip...throw some crisps inside your sub for a flavour sensation!",
  },
  {
    name: "BEAR Yoyo",
    img: "./img/extras/bear-yoyo.jpeg",
    section: "Snacks, Treats & Dip",
    price: 1,
    description:
      "Delicious pure fruit roll ups, BEAR Yoyos are made from gently baked whole fresh fruit and veg, with no added sugar or concentrates. The perfect nibble to accompany your sub, salad or wrap. Perfect in a Kids Pak(TM). ",
  },
  {
    name: "Chipotle Southwest Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Hickory Smoked BBQ Sauce Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Lite Mayo Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Honey & Wholegrain Mustard Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Creamy Caesar Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Vegan Garlic Aioli (Vegan)  Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Sweet Onion (Vegan) Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "HP Brown Sauce (Vegan) Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Sriracha Hot Chilli (Vegan) Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Sticky Sweet Chilli (Vegan) Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
  {
    name: "Tomato Ketchup (Vegan) Dip",
    section: "Snacks, Treats & Dip",
    price: 0.2,
    description:
      "Your bread of choice topped with our signature marinara sauce, a blend of grated mozzarella and cheddar cheese, and spicy pepperoni.",
  },
];

export const items = foodItems.reduce((res, food) => {
  if (!res[food.section]) res[food.section] = [];
  res[food.section].push(food);
  return res;
}, {});
