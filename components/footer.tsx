'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/dashboard', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mamadou-sarr-713b73286/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sarrmamadou658@gmail.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="font-display text-xl md:text-2xl font-bold text-gradient mb-2">
              Mamadou Sarr
            </p>
            <p className="text-sm text-muted-foreground">
              Développeur Full Stack
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-primary" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
              Conçu avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> par Mamadou
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} Tous droits réservés
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
