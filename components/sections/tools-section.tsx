'use client';

import { motion } from 'framer-motion';
import {
  GitBranch,
  Trello,
  MessageSquare,
  TestTube,
  Bug,
  Zap,
  FolderKanban,
  FileCode
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const toolCategories = [
  {
    category: 'Gestion de projet',
    icon: FolderKanban,
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'Git / GitHub', icon: GitBranch, description: 'Contrôle de version' },
      { name: 'Trello', icon: Trello, description: 'Gestion de tâches' },
      { name: 'Jira', icon: FolderKanban, description: 'Suivi de projets' },
      { name: 'Slack', icon: MessageSquare, description: 'Communication' },
    ],
  },
  {
    category: 'Tests & Qualité',
    icon: TestTube,
    color: 'from-green-500 to-emerald-500',
    tools: [
      { name: 'Postman', icon: Zap, description: 'Tests API' },
      { name: 'Jest', icon: TestTube, description: 'Tests unitaires JS' },
      { name: 'React Testing Library', icon: TestTube, description: 'Tests React' },
    ],
  },
  {
    category: 'Débogage & Performance',
    icon: Bug,
    color: 'from-orange-500 to-red-500',
    tools: [
      { name: 'Chrome DevTools', icon: Bug, description: 'Inspection web' },
      { name: 'React DevTools', icon: Bug, description: 'Debug React' },
      { name: 'VS Code Debugger', icon: Bug, description: 'Debug IDE' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function ToolsSection() {
  return (
    <section id="outils" className="relative py-16 md:py-24 overflow-hidden bg-muted/30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            Outils du <span className="text-gradient">développeur</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies et outils que j'utilise pour garantir la qualité et l'efficacité
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {toolCategories.map((category, categoryIndex) => (
            <motion.div key={categoryIndex} variants={item}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={toolIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: toolIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer group"
                      >
                        <tool.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors">
                            {tool.name}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {tool.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
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
