import { FC, useEffect, useRef, useState } from "react";
import style from "./LoadImg.module.css";

interface IProps {
  src: string;
  alt: string;
  className: string;
}

const LoadImg: FC<IProps> = ({ src, alt, className }) => {
  const [success, setSuccess] = useState(true);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setSuccess(false);

    ref.current.onload = () => {
      setSuccess(true);
    };
  }, []);

  if (!success) {
    return <div className={style.load}>Загрузка картинки</div>;
  }

  return <img className={className} ref={ref} src={src} alt={alt} />;
};

export default LoadImg;
