import { FC } from "react";
import classes from "./Card.module.scss";

type Props = {
  name: any;
  value?: string | number;
  about?: string;
};

const Card: FC<Props> = ({ name, value, about }) => {
  return (
    <div className={classes.card}>
      <h2 className={classes["card__name"]}>{name}</h2>
      <div className={classes.description}>
        <p className={classes["card__value"]}>{value}</p>
        <p className={classes["card__about"]}>{about}</p>
      </div>
    </div>
  );
};

export default Card;
