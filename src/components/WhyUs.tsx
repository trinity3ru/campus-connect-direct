import { motion } from "framer-motion";
import { Target, Wrench, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Специализируемся на продвижении сайтов через Яндекс.Директ",
    description: "Глубокое понимание специфики образовательной сферы",
  },
  {
    icon: Wrench,
    title: "Пользуемся инструментами Яндекс.Директ и собственными методиками",
    description: "Проверенные стратегии для максимальной эффективности",
  },
  {
    icon: Users,
    title: "Работаем с экспертами в сфере образования",
    description: "Понимаем особенности контекстной рекламы ВУЗов",
  },
  {
    icon: BarChart3,
    title: "Предоставляем детальные отчёты о продвижении",
    description: "Количество конверсий, показов и общий интерес к кампании",
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему заказать настройку нужно у нас?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы знаем специфику продвижения образовательных учреждений
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-card rounded-2xl shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
