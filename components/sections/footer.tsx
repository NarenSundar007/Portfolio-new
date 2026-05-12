'use client';

import { motion } from 'framer-motion';
import { footerData } from '@/data/portfolio';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <Github className="w-5 h-5" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5" />;
      case 'Email':
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

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

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
      className="border-t border-border py-12 px-6 mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div
            variants={itemVariants}
            className="flex gap-6"
          >
            {footerData.socialLinks.map((social) => (
              <motion.a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                {getSocialIcon(social.platform)}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center space-y-2"
          >
            <p className="text-muted-foreground">
              {footerData.text}
            </p>
            <p className="text-xs text-muted-foreground/50">
              © {footerData.year} Naren Sundar L. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
