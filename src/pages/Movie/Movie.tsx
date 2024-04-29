import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMovieItem } from "../../types";
import style from "./Movie.module.css";
import Load from "../../components/Load/Load";
import useHttp from "../../hooks/useHttp";
import image from "../../assets/images.png";
import LoadImg from "../../components/LoadImg/LoadImg";

const Movie: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useHttp<IMovieItem>(
    `https://api.kinopoisk.dev/v1.4/movie/${id}`,
    [id]
  );

  if (isLoading || !data) {
    return <Load />;
  }

  if (error) {
    return (
      <div>
        {error}
        <button className={style.movie__back} onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>
    );
  }

  return (
    <div className={style.movie}>
      <div className={style.movie__info}>
        <button className={style.movie__back} onClick={() => navigate(-1)}>
          Назад
        </button>
        <h1 className={style.movie__title}>
          {data.rating?.kp} {data.name}
        </h1>
        <p className={style.movie__description}>{data.description}</p>
        <div className={style.movie__data}>
          <div className={style.movie__data_item}>
            <span>Длительность:</span>
            <span>{data.movieLength}</span>
          </div>
          <div className={style.movie__data_item}>
            <span>Год выпуска:</span>
            <span>{data.year}</span>
          </div>
          <div className={style.movie__data_item}>
            <span>Жанры:</span>
            {!!data.genres.length && (
              <span>{data.genres.map(({ name }) => name).join(", ")}</span>
            )}
          </div>
        </div>
      </div>
      {data.poster?.url ? (
        <LoadImg
          className={style.movie__img}
          src={data.poster.url}
          alt={data.name}
        />
      ) : (
        <img className={style.movie__img} src={image} alt={data.name} />
      )}
    </div>
  );
};

export default Movie;
