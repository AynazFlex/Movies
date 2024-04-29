import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies/Movies";
import style from "./App.module.css";
import Movie from "./pages/Movie/Movie";

const Main: FC = () => {
  const [page, setPage] = useState(1);

  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<Movies page={page} setPage={setPage} />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </main>
  );
};

const App: FC = () => {
  return (
    <div className={style.app}>
      <header className={style.header}>Header</header>
      <Main />
      <footer className={style.footer}>Footer</footer>
    </div>
  );
};

export default App;
