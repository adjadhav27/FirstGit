import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

  return (
    <Fragment>
      <header className={classes.header}>
          <h1 className={classes.heading}>Desi Delight Dining</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="indian cuisine eatery" />
      </div>
    </Fragment>
  );
};

export default Header;
