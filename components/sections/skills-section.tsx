'use client';

import { motion } from 'framer-motion';
import {
  Code2,
  Smartphone,
  Database,
  Server,
  Palette,
  Rocket,
  Terminal,
  GitBranch
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    icon: Code2,
    name: 'Laravel',
    description: 'Framework PHP robuste',
    level: 'Avancé',
    color: 'from-red-500 to-orange-500',
  },
  {
    icon: Smartphone,
    name: 'React & React Native',
    description: 'Applications web et mobile',
    level: 'Avancé',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Terminal,
    name: 'TypeScript / JavaScript',
    description: 'Développement moderne',
    level: 'Avancé',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Rocket,
    name: 'Next.js',
    description: 'Framework React performant',
    level: 'Avancé',
    color: 'from-gray-700 to-gray-900',
  },
  {
    icon: Palette,
    name: 'TailwindCSS',
    description: 'Design système moderne',
    level: 'Avancé',
    color: 'from-teal-400 to-cyan-500',
  },
  {
    icon: Database,
    name: 'MySQL',
    description: 'Gestion de bases de données',
    level: 'Avancé',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Server,
    name: 'Node.js',
    description: 'Backend JavaScript',
    level: 'Intermédiaire',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: GitBranch,
    name: 'API REST / RESTful',
    description: 'Architecture backend',
    level: 'Avancé',
    color: 'from-purple-500 to-pink-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section id="competences" className="relative py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Compétences <span className="text-gradient">techniques</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et frameworks que je maîtrise pour créer des solutions innovantes
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:shadow-lg`}
                  >
                    <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </motion.div>

                  <h3 className="font-semibold text-base sm:text-lg mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    {skill.description}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Avancé' ? '90%' : '70%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">
                      {skill.level}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
