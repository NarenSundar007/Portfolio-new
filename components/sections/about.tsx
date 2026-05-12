'use client';

import { motion } from 'framer-motion';
import { aboutData } from '@/data/portfolio';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        About <span className="text-accent">Me</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-3">Education</h3>
            <p className="text-muted-foreground mb-2">
              {aboutData.education.degree} in {aboutData.education.branch}
            </p>
            <p className="text-accent font-medium">{aboutData.education.institution}</p>
            <p className="text-sm text-muted-foreground mt-2">
              CGPA: {aboutData.education.cgpa} | {aboutData.education.year}
            </p>
          </div>

          <div className="h-px bg-border" />

          <p className="text-lg text-muted-foreground leading-relaxed">
            {aboutData.introduction}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Core Interests</h3>
            <ul className="space-y-2">
              {aboutData.interests.map((interest, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {interest}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">What I Build</h3>
            <ul className="space-y-2">
              {aboutData.highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
