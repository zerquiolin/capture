import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  //UseInView
  const [element, view] = useInView({ threshold: 0.3 });

  //UseAnimation
  const controls = useAnimation();

  if (view) {
    controls.start("after");
  } else {
    controls.start("before");
  }

  return [element, controls];
};
