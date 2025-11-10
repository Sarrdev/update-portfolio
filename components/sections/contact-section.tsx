"use client";

import { motion } from "framer-motion";
import {  Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";


const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "sarrmamadou658@gmail.com",
    href: "mailto:sarrmamadou658@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+221 784545595",
    href: "+221 784545595",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: MapPin,
    title: "Localisation",
    value: "Dakar, Sénégal",
    href: "#",
    color: "from-orange-500 to-red-500",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
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
            Restons en <span className="text-gradient">contact</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* === Section Informations de contact === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-2"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-6 text-center lg:text-left">
                Informations de contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="block"
                  >
                    <Card className="border-2 border-transparent hover:border-primary/20 transition-all">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-br ${info.color} text-white flex-shrink-0`}
                          >
                            <info.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-muted-foreground mb-1">
                              {info.title}
                            </p>
                            <p className="font-medium text-sm sm:text-base truncate">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* === Section Disponibilité === */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5">
              <CardContent className="p-6 md:p-8">
                <h4 className="font-semibold text-base sm:text-lg mb-3">
                  Disponibilité
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Je suis actuellement disponible pour des projets freelance et
                  des collaborations. Temps de réponse moyen :{" "}
                  <span className="font-semibold text-primary">24h</span>.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
