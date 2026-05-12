'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { heroData, contactData } from '@/data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  GitHub: <Github className="w-8 h-8" />,
  LinkedIn: <Linkedin className="w-8 h-8" />,
  Email: <Mail className="w-8 h-8" />,
};

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="py-20 px-6 max-w-2xl mx-auto"
    >
      <motion.div className="text-center mb-12">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Let&apos;s <span className="text-accent">Connect</span>
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground"
        >
          {contactData.description}
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex flex-col sm:flex-row gap-8 justify-center items-center"
      >
        {heroData.socials.map((social) => (
          <motion.a
            key={social.platform}
            href={social.url}
            target={social.platform !== 'Email' ? '_blank' : undefined}
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-3 group"
          >
            <div className="p-5 rounded-2xl border border-border bg-card text-muted-foreground group-hover:text-accent group-hover:border-accent transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-accent/10">
              {iconMap[social.platform]}
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300">
              {social.platform}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Contact;
