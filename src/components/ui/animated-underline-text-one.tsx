import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "../../utils/cn";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  textClassName?: string;
  underlineClassName?: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
}

const AnimatedText = React.forwardRef<HTMLDivElement, AnimatedTextProps>(
  (
    {
      text,
      textClassName,
      underlineClassName,
      underlinePath = "M 0,20 Q 150,5 300,20",
      underlineHoverPath = "M 0,20 Q 150,35 300,20",
      underlineDuration = 1.5,
      ...props
    },
    ref
  ) => {
    const pathVariants: Variants = {
      hidden: {
        pathLength: 0,
        opacity: 0,
      },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
          duration: underlineDuration,
          ease: "easeInOut",
        },
      },
    };

    return (
      <div
        ref={ref}
        className={cn("flex flex-col items-center justify-center gap-2", props.className)}
      >
        <div className="relative inline-block">
          <motion.h2
            className={cn("text-4xl font-bold text-center", textClassName)}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {text}
          </motion.h2>

          <motion.svg
            width="100%"
            height="30"
            viewBox="0 0 300 30"
            preserveAspectRatio="none"
            className={cn("absolute -bottom-6 left-0 w-full overflow-visible", underlineClassName)}
          >
            <motion.path
              d={underlinePath}
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              fill="none"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                d: underlineHoverPath,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
            />
          </motion.svg>
        </div>
      </div>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
