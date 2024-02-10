import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Naan",
    description: "Leavened, oven-baked flatbread",
    price: 20,
  },
  {
    id: "m2",
    name: "Butter Chicken",
    description: "Tender chicken cooked in rich tomato and butter sauce",
    price: 80,
  },
  {
    id: "m3",
    name: "Paneer Tikka Masala",
    description: "Grilled cottage cheese cubes in creamy tomato gravy",
    price: 85,
  },
  {
    id: "m4",
    name: "Biryani",
    description:
      "Fragrant basmati rice cooked with aromatic spices and tender meat/vegetables",
    price: 95,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />                                            // Here we can use meal = {meal} as well instead of adding all
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
