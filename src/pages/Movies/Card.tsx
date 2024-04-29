import { FC } from "react";
import { IMovie } from "../../types";
import style from "./Movies.module.css";
import { Link } from "react-router-dom";
import image from "../../assets/images.png";
import LoadImg from "../../components/LoadImg/LoadImg";

const Card: FC<IMovie> = (props) => {
  const { id, year, rating, name, poster } = props;

  return (
    <div className={style.card}>
      {poster?.url ? (
        <LoadImg className={style.card__img} src={poster.url} alt={name} />
      ) : (
        <img className={style.card__img} src={image} alt={name} />
      )}
      <div className={style.card__info}>
        <Link className={style.card__name} to={`movie/${id}`}>
          {name}
        </Link>
        <div className={style.card__data}>
          <span className={style.card__rating}>{rating?.kp}</span>
          <span className={style.card__year}>{year}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
