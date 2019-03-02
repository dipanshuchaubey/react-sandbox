import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonAppBar from "./components/layout/Header";
import RecipeReviewCard from "./components/Posts";
import ResponsiveDialog from "./components/layout/About";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonAppBar />
        <div className="container mt-3 mb-3">
          <div className="row">
            <RecipeReviewCard
              title="Pizza"
              image="https://knowbbies.com/storage/courses/June2018/35118898_1675576969163519_65233698458435584_n-medium.jpg"
              content="This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like."
            />
            <RecipeReviewCard
              title="Samosa"
              image="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/Top-Not-to-miss-food-items-in-Monsoon/4.jpg"
              content="This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like."
            />
            <RecipeReviewCard
              title="Paella dish"
              image="https://img.timesnownews.com/story/1523535111-spicy_food.PNG?d=600x450"
              content="This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like."
            />
            <RecipeReviewCard
              title="Paella dish"
              image="https://img.timesnownews.com/story/1523535111-spicy_food.PNG?d=600x450"
              content="This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like."
            />
            <RecipeReviewCard
              title="Paella dish"
              image="https://img.timesnownews.com/story/1523535111-spicy_food.PNG?d=600x450"
              content="This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like."
            />
            <RecipeReviewCard
              title="Paella dish"
              image="https://img.timesnownews.com/story/1523535111-spicy_food.PNG?d=600x450"
              content="This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like."
            />
          </div>
          <div className="text-center mt-2">
            <ResponsiveDialog />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
