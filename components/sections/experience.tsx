'use client';

import { motion } from 'framer-motion';
import { experienceData } from '@/data/portfolio';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Experience & <span className="text-accent">Leadership</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="space-y-8"
      >
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={itemVariants}
            whileHover={{ x: 8 }}
            className="border-l-2 border-accent pl-8 pb-8 relative"
          >
            <motion.div
              className="w-4 h-4 rounded-full bg-accent absolute -left-2.5 top-2"
              whileHover={{ scale: 1.5 }}
            />

            <div>
              <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
              <p className="text-accent font-semibold mb-2">{exp.organization}</p>
              <p className="text-sm text-muted-foreground mb-3">{exp.duration}</p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.achievements && (
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mt-1.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Experience;
