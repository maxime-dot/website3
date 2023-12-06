import {motion} from "framer-motion";
import "./circular-loader.scss";

const CircularLoader = () => (
  <motion.div
    animate={{rotate: 360}}
    transition={{repeat: Infinity, duration: 0.5}}
    className="loader"
  />
);

export default CircularLoader;
