import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  //PathName es un atributo de UseLocation();
  //Por ello se extrae de esa manera!
  //Si quisieramos el objeto completo, quitamos las llaves!
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
};

export default ScrollTop;
