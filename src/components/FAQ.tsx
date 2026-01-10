import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Какие услуги ВУЗа можно продвигать в Яндексе?",
    answer:
      "Яндекс.Директ хорош для любых задач: набор абитуриентов на бакалавриат и магистратуру, продвижение программ дополнительного образования, курсов повышения квалификации, летних школ и дней открытых дверей.",
  },
  {
    question: "Как измерить эффективность контекстной рекламы ВУЗа?",
    answer:
      "Это делается с помощью метрик и инструментов аналитики Яндекс.Директ. Мы регулярно предоставляем отчёты с описанием результатов продвижения и данными метрик. Если что-то непонятно — персональный менеджер проконсультирует вас.",
  },
  {
    question: "Как вы настраиваете рекламу для привлечения целевой аудитории?",
    answer:
      "Мы используем ключевые слова и фразы, связанные с образованием и поступлением. Также выполняем географическую настройку, таргетинг по возрасту, роду деятельности, интересам. Ваше объявление показывается только заинтересованным абитуриентам в нужной локации.",
  },
  {
    question: "Сколько времени нужно для запуска рекламной кампании?",
    answer:
      "Обычно запуск первой кампании занимает 5-7 рабочих дней. За это время мы проводим анализ, собираем семантическое ядро, создаём объявления и настраиваем таргетинг. Первые результаты вы увидите уже в первую неделю после запуска.",
  },
  {
    question: "Можно ли продвигать ВУЗ в нескольких регионах одновременно?",
    answer:
      "Да, это одно из преимуществ Яндекс.Директ. Мы можем настроить отдельные кампании для разных регионов с учётом их специфики, конкуренции и особенностей аудитории. Также возможно продвижение на страны СНГ для программ с дистанционным обучением.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Частые вопросы
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-gold data-[state=open]:border-gold/30 transition-all"
              >
                <AccordionTrigger className="text-left text-card-foreground font-semibold hover:no-underline hover:text-gold py-5 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
