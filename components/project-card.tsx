'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/portfolio';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, ChevronDown } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const ProjectCard = ({ project, isExpanded, onToggleExpand }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ boxShadow: '0 20px 40px rgba(74, 144, 226, 0.1)' }}
      className="bg-card border border-border rounded-lg overflow-hidden transition-all duration-300"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {project.shortDescription}
            </p>
          </div>
          <motion.button
            onClick={onToggleExpand}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-1"
          >
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.button>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-secondary/50 text-foreground text-xs font-medium border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.metrics && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 p-4 bg-secondary/20 rounded-lg">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <p className="text-accent font-bold text-lg">{metric.value}</p>
                <p className="text-muted-foreground text-xs">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border pt-6 mb-6"
            >
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              asChild
            >
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
              >
                <Github className="w-4 h-4" />
                Source Code
              </Button>
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              asChild
            >
              <Button
                size="sm"
                className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
