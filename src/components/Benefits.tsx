import { motion } from "framer-motion";

const benefits = [
  {
    number: "01",
    title: "Увеличить число обращений",
    description:
      "Яндекс.Директ позволяет моментально привлечь новых посетителей. Как только кампании запущены и объявления начинают показываться потенциальным абитуриентам — они реагируют и совершают целевые действия.",
  },
  {
    number: "02",
    title: "Структурировать бюджет",
    description:
      "Настройка контекстной рекламы ВУЗа помогает оптимизировать издержки на продвижение. Мы проанализируем результаты кампании, проведём тестирование ключевых слов и снизим стоимость привлечения абитуриентов.",
  },
  {
    number: "03",
    title: "Реагировать быстро",
    description:
      "Яндекс.Директ позволяет адаптировать тактику в соответствии с вашей маркетинговой стратегией. Расширить географию показа, изменить время, сегментировать аудиторию — всё это можно сделать оперативно.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Что даёт продвижение сайта с Яндекс.Директ
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="text-7xl font-bold text-gold/15 mb-4">
                {benefit.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 -mt-8">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
