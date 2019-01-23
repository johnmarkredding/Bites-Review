# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.destroy_all
Comment.destroy_all
Item.destroy_all


res1 = Restaurant.create(name: "Seva", address: "30-07 34th St, Astoria, NY 11103")
res2 = Restaurant.create(name: "Spicy Shallot", address: "7701 Woodside Ave, Queens, NY")
res3 = Restaurant.create(name: "Front Street Pizza", address: "80 Front St, Brooklyn, NY 11201")

item1 = Item.create(restaurant: res1, name: "Lamb Spring Roll Ground", description: "lamb, chili, coriander, cucumber raita", price: "7", likes: 0, dislikes: 0)
item2 = Item.create(restaurant: res1, name: "Naan", description: "garlic/onion/cilantro/cheese/coconut", price: "3.5", likes: 0, dislikes: 0)
item3 = Item.create(restaurant: res1, name: "Chicken Tikka Masala", description: "Clay oven cooked white meat, tomato light cream sauce", price: "13.95", likes: 0, dislikes: 0)
item4 = Item.create(restaurant: res1, name: "Chicken Korma", description: "Almond and cashew nut sauce, yogurt, coconut", price: "13.95", likes: 0, dislikes: 0)
item5 = Item.create(restaurant: res1, name: "Lamb Vindaloo", description: "Fiery sauce, sundried Kashmiri red chili, potato, tamarin", price: "14.95", likes: 0, dislikes: 0)
item6 = Item.create(restaurant: res1, name: "Lamb Korma", description: "Almond and cashew nut sauce, yogurt, coconut", price: "14.95", likes: 0, dislikes: 0)

item7 = Item.create(restaurant: res2, name: "Angel Marinated Chicken Wings", description: "Golden-fried chicken wings served with sweet chili sauce", price: "7", likes: 0, dislikes: 0)
item8 = Item.create(restaurant: res2, name: "Calamari Todd Krob", description: "Served with chili dipping sauce", price: "8", likes: 0, dislikes: 0)
item9 = Item.create(restaurant: res2, name: "Crab Rangoon", description: "crabmeat with cream cheese in crispy wonton served with spicy and sweet chili sauce", price: "6", likes: 0, dislikes: 0)
item10 = Item.create(restaurant: res2, name: "Small Tom Yum Soup (Spicy Lemongrass)", description: "Vegetable broth with onion, bell pepper, mushroom", price: "5", likes: 0, dislikes: 0)
item10 = Item.create(restaurant: res2, name: "Large Tom Yum Soup (Spicy Lemongrass)", description: "Vegetable broth with onion, bell pepper, mushroom", price: "9", likes: 0, dislikes: 0)
item11 = Item.create(restaurant: res2, name: "Spicy Basil Noodle", description: "stir-fried broad flat noodle with onion, bell pepper, egg in spicy basil sauce", price: "10", likes: 0, dislikes: 0)

item12 = Item.create(restaurant: res3, name: "Margarita Pizza", description: "Fresh mozzarella, tomato, garlic, basil and olive oil.", price: "24.95", likes: 0, dislikes: 0)
item13 = Item.create(restaurant: res3, name: "Greek Salad Special", description: "Romaine, black olives, tomatoes, cucumbers, red onions and feta cheese.", price: "7.95", likes: 0, dislikes: 0)
item14 = Item.create(restaurant: res3, name: "Penne Vodka Sauce Pizza", description: "Fresh mozzarella and vodka sauce.", price: "21.95", likes: 0, dislikes: 0)
item15 = Item.create(restaurant: res3, name: "Buffalo Chicken Pizza", description: "Chicken, cheddar, hot sauce and bleu cheese.", price: "24.95", likes: 0, dislikes: 0)
item16 = Item.create(restaurant: res3, name: "Garlic Knots", description: "Garlic-y Dough tied like a bow!", price: "1.50", likes: 0, dislikes: 0)


Comment.create(content: "Great food. This dish is the best here.", item_id: Item.all.sample.id)
Comment.create(content: "Hated this dish!!!! You'd be better off with something else.", item_id: Item.all.sample.id)
