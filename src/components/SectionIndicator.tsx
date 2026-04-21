import { motion } from "motion/react";

export default function SectionIndicator() {
  return (
    <div className="flex justify-center mb-4">
      <motion.div
        className="w-3 h-3 rounded-full"
        animate={{
          backgroundColor: ["#FF0033", "#00FF66", "#FF0033"],
          boxShadow: [
            "0 0 15px 4px rgba(255, 0, 51, 0.8)",
            "0 0 25px 8px rgba(0, 255, 102, 0.9)",
            "0 0 15px 4px rgba(255, 0, 51, 0.8)",
          ],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
