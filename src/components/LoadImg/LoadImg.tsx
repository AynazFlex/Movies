import { FC, useLayoutEffect, useRef, useState } from "react";
import style from "./LoadImg.module.css";

interface IProps {
  src: string;
  alt: string;
  className: string;
}

const LoadImg: FC<IProps> = ({ src, alt, className }) => {
  const [success, setSuccess] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const imgElem = ref.current;

    if (!imgElem) {
      return;
    }

    imgElem.onload = () => setSuccess(true);
  }, []);

  return (
    <>
      <img
        ref={ref}
        style={{ display: success ? "block" : "none" }}
        className={className}
        src={src}
        alt={alt}
      />
      {!success && <div className={style.load}>Загрузка картинки...</div>}
    </>
  );
};

export default LoadImg;
