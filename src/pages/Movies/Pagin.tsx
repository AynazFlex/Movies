import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useLayoutEffect,
  useState,
} from "react";
import style from "./Movies.module.css";

interface IProps {
  page: number;
  pages: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagin: FC<IProps> = ({ page, pages, setPage }) => {
  const [value, setValue] = useState<number>(page);

  useLayoutEffect(() => setValue(page), [page]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value.replace(/\D/g, "");
    const activepage = value > pages ? pages : value;
    setValue(activepage);
  };

  const handleSubmit = () => {
    if (!value) {
      setValue(page);
      return;
    }

    setPage(value);
  };

  return (
    <div className={style.pagin}>
      {page > 1 && (
        <button
          onClick={() => setPage(page - 1)}
          className={style.pagin__button}
        >
          prev
        </button>
      )}
      <div className={style.pagin__page}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleSubmit}
            className={style.pagin__edit}
            value={value}
          />
        </form>
        /<div>{pages}</div>
      </div>
      {page < pages && (
        <button
          onClick={() => setPage(page + 1)}
          className={style.pagin__button}
        >
          next
        </button>
      )}
    </div>
  );
};

export default Pagin;
