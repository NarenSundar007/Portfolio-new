'use client';

import { motion } from 'framer-motion';
import { resumeData } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-4xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        My <span className="text-accent">Resume</span>
      </motion.h2>

      <motion.div
        variants={itemVariants}
        whileHover={{
          boxShadow: '0 20px 40px rgba(74, 144, 226, 0.15)',
          y: -4,
        }}
        className="bg-card border border-border rounded-lg p-8 md:p-12 text-center transition-all duration-300"
      >
        <motion.div
          className="mb-6 flex justify-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
            <FileText className="w-8 h-8 text-accent" />
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-3">{resumeData.title}</h3>
        <p className="text-muted-foreground mb-8">{resumeData.description}</p>

        <motion.a
          href={resumeData.url}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          asChild
        >
          <Button
            size="lg"
            className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Resume;
