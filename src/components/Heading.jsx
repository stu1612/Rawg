import { motion } from "framer-motion";

export default function Heading({ title }) {
  return (
    <motion.h1
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="text-lg md:text-3xl lg:text-5xl py-8 font-black tracking-widest capitalize"
    >
      {title}
    </motion.h1>
  );
}
