import { FC } from "react";
import classes from "./StartingScreen.module.scss";

const StartingScreen: FC = () => {
  return (
    <div className={classes["starting-screen"]}>
      <div className={classes["starting-screen__dots-container"]}>
        <div className={classes["starting-screen__dot"]}></div>
        <div className={classes["starting-screen__dot"]}></div>
        <div className={classes["starting-screen__dot"]}></div>
      </div>
      <p className={classes["starting-screen__text"]}>
        Press any key on your keyboard to start
      </p>
    </div>
  );
};

export default StartingScreen;
