'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const milestones = [
  {
    icon: GraduationCap,
    title: 'Développement d\'applications web et mobile',
    subtitle: 'Université Numérique Cheikh Hamidou Kane',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: GraduationCap,
    title: 'Génie Logiciel',
    subtitle: 'Institut Polytechnique Thomas Sankara',
    color: 'from-primary to-purple-500',
  },
  {
    icon: Briefcase,
    title: 'Développeur Full Stack',
    subtitle: 'SGF SARL',
    color: 'from-orange-500 to-red-500',
  },
];

export function AboutSection() {
  return (
    <section id="apropos" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-background via-background to-primary/5">
              <CardContent className="p-6 md:p-8">
                <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-6">
                  Développeur passionné par la création d'applications performantes et intuitives.
                  J'ai conçu des solutions numériques pour des entreprises et institutions éducatives,
                  avec un accent sur la performance et l'expérience utilisateur.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-foreground/80 mb-6">
                  Actuellement développeur full stack chez <span className="font-semibold text-primary">SGF SARL</span> à Touba,
                  je contribue à la création de systèmes de gestion d'hydrocarbures robustes et évolutifs.
                </p>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Touba, Sénégal</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group"
              >
                <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${milestone.color} text-white`}>
                        <milestone.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {milestone.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
