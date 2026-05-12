'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { projectsData } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';
import ProjectCard from '@/components/project-card';

const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        Featured <span className="text-accent">Projects</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid gap-8"
      >
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="group"
          >
            <ProjectCard
              project={project}
              isExpanded={expandedId === project.id}
              onToggleExpand={() =>
                setExpandedId(expandedId === project.id ? null : project.id)
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
