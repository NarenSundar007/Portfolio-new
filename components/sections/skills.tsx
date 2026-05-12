'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/data/portfolio';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 40px rgba(74, 144, 226, 0.15)',
      transition: { duration: 0.3 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: 'rgba(74, 144, 226, 0.15)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Technical <span className="text-accent">Skills</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillsData.map((category) => (
          <motion.div
            key={category.name}
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-lg p-6 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">
              {category.name}
            </h3>

            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
            >
              {category.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  variants={skillVariants}
                  whileHover="hover"
                  className="px-3 py-1 rounded-full bg-secondary/50 text-foreground text-sm font-medium cursor-default border border-border/50 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
