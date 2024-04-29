import { Dispatch, FC, SetStateAction } from "react";
import { IData } from "../../types";
import style from "./Movies.module.css";
import Card from "./Card";
import Load from "../../components/Load/Load";
import useHttp from "../../hooks/useHttp";
import Pagin from "./Pagin";

interface IProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Movies: FC<IProps> = ({ page, setPage }) => {
  const { data, isLoading, error } = useHttp<IData>(
    `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=12`,
    [page]
  );

  if (isLoading) {
    return <Load />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data && <Pagin page={data.page} pages={data.pages} setPage={setPage} />}
      {data ? (
        <div className={style.movies}>
          {data.docs.map((movie) => (
            <Card {...movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className={style.no_data}>No Data</div>
      )}
    </>
  );
};

export default Movies;
