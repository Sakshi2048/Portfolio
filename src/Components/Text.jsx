import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["code", "create", "build", "design","develop"];
function Text() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" ">
     
      <div className="bg-gradient-to-b from-[#050E1F] via-[#010b1c] to-black relative isolate overflow-hidden py-20 flex justify-center pt-20">
        <div>
          <h1 className="text-3xl px-24 font-bold  tracking-tight text-white sm:text-4xl  ">
            Let's{" "}
            <span className="text-yellow-500 text-5xl sm:text-5xl">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    opacity: { duration: 0.8 },
                    y: { duration: 0.6 },
                  }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            something beautiful together !
          </h1>
          <p className="text-gray-400 px-24 pt-2">
          I’ve actively contributed to diverse team-based projects that pushed my boundaries and strengthened my skills in full-stack development and AI integration as well as collaboration & problem-solving.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Text;
