import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, TrendingUp, Users } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
        {/* Gold gradient accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 backdrop-blur-sm text-gold text-sm mb-6 border border-gold/20">
              <GraduationCap className="w-4 h-4" />
              Специализация на образовательных учреждениях
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8"
          >
            онтекстная и таргетированная реклама для ВУЗов {" "}
            <span className="text-gold-gradient">Яндекс.Директ | ВК</span>
          </motion.h1>

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 mb-10"
          >
            <li className="flex items-start gap-3 text-muted-foreground text-lg">
              <TrendingUp className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
              Увеличим число поступающих уже в первый месяц работы
            </li>
            <li className="flex items-start gap-3 text-muted-foreground text-lg">
              <Users className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
              Найдём больше абитуриентов, заинтересованных в обучении
            </li>
            <li className="flex items-start gap-3 text-muted-foreground text-lg">
              <GraduationCap className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
              Оперативно сообщим о новых программах, акциях и мероприятиях
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-8 py-6 font-semibold bg-gold-gradient hover:shadow-gold-lg transition-all text-primary-foreground"
            >
              Оставить заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("how-we-work")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8 py-6 bg-transparent border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50"
            >
              Узнать подробнее
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
