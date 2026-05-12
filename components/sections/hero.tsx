'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { heroData } from '@/data/portfolio';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % heroData.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

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

  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center pt-30 px-6"
    >
      <div className="text-center max-w-3xl">
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {heroData.name}
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-lg shadow-black/20"
          >
            <Image
              src="/profile.jpg"
              alt="Naren Sundar L"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="h-16 md:h-20 flex items-center justify-center mb-6"
        >
          <motion.div
            key={titleIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-semibold text-accent"
          >
            {heroData.titles[titleIndex]}
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
        >
          {heroData.bio}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {heroData.cta.primary}
          </Button>
          <a href="/resume.pdf" download="Naren_Sundar_Resume.pdf">
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 text-base px-8"
            >
              {heroData.cta.secondary}
            </Button>
          </a>
        </motion.div>

        <motion.div
          variants={iconVariants}
          className="flex gap-6 justify-center items-center"
        >
          {heroData.socials.map((social) => (
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
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <ArrowDown className="w-6 h-6 text-accent opacity-50" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
