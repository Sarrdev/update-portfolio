'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Disponible pour des projets</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              Bonjour, je suis{' '}
              <span className="text-gradient">Mamadou Sarr</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-light"
            >
              Développeur web & mobile full stack
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg text-foreground/80 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Je transforme les idées en expériences numériques élégantes et utiles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group text-base sm:text-lg px-6 sm:px-8"
              >
                Voir mes projets
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-base sm:text-lg px-6 sm:px-8"
              >
                Me contacter
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 0.95, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 geometric-shape bg-gradient-to-br from-primary via-blue-500 to-orange-400 opacity-20"
              />

              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 0.95, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-500 via-primary to-orange-400 opacity-30"
              />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white shadow-2xl"
              >
                <span className="text-6xl sm:text-7xl md:text-8xl font-display font-bold">MS</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
