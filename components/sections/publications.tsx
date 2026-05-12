'use client';

import { motion } from 'framer-motion';
import { publicationsData } from '@/data/portfolio';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Publications = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -4,
      boxShadow: '0 15px 30px rgba(74, 144, 226, 0.1)',
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-5xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Research & <span className="text-accent">Publications</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="space-y-6"
      >
        {publicationsData.map((pub) => (
          <motion.div
            key={pub.id}
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-lg p-6 md:p-8 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-3 leading-tight">
              {pub.title}
            </h3>

            <p className="text-muted-foreground mb-4">
              {pub.authors.join(', ')}
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <div className="space-y-1">
                <p className="text-accent font-semibold">{pub.venue}</p>
                <p className="text-sm text-muted-foreground">{pub.year}</p>
              </div>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent/80 break-all"
                >
                  DOI: {pub.doi}
                </a>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              {pub.description}
            </p>

            {pub.doi && (
              <motion.a
                href={`https://doi.org/${pub.doi}`}
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
                  <ExternalLink className="w-4 h-4" />
                  Read Publication
                </Button>
              </motion.a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Publications;
