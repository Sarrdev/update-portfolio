'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Application de gestion des hydrocarbures',
    description: 'Système de gestion robuste pour SGF SARL, incluant suivi des stocks, facturation automatisée, et génération de rapports détaillés.',
    tech: ['Laravel', 'React', 'MySQL', 'Chart.js'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Dashboard d\'analyse de bons de livraison',
    description: 'Interface analytique avancée avec visualisation en temps réel des données de livraison. Statistiques détaillées et exportation de rapports.',
    tech: ['React', 'Laravel API', 'TailwindCSS', 'Recharts'],
    color: 'from-primary to-purple-500',
  },
  {
    title: 'Application de publication d\'informations pour SGF SARL',
    description: 'Plateforme moderne permettant la publication et la gestion d’informations internes pour l’entreprise SGF SARL. Projet intégrant une interface intuitive et des fonctionnalités avancées de gestion de contenu.',
    tech: ['Nextjs', 'Laravel', 'MySQL', 'TailwindCSS'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Application de préinscription en ligne',
    description: 'Plateforme complète pour gérer les préinscriptions des étudiants à l\'Institut Polytechnique Thomas Sankara. Interface intuitive avec gestion des documents et suivi en temps réel.',
    tech: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: 'from-blue-500 to-cyan-500',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  return (
    <section id="projets" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            Projets <span className="text-gradient">réalisés</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns des projets sur lesquels j'ai travaillé
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary/20">
                {/* <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 right-4 flex gap-2"
                  >
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full shadow-lg">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div> */}

                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color} text-white flex-shrink-0`}>
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-lg sm:text-xl group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* <CardFooter>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Voir les détails
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter> */}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
