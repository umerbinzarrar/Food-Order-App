import { Fragment } from "react/jsx-runtime";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";

function Meals() {
    return (
        <Fragment>
            <MealSummary />
            <AvailableMeals />
        </Fragment>);
}

export default Meals;