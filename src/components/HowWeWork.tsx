import { motion } from "framer-motion";
import { MessageSquare, Wallet, Target, Rocket, BarChart3, Settings, Headphones } from "lucide-react";

const stages = [
  {
    title: "Предварительный этап",
    steps: [
      {
        icon: MessageSquare,
        title: "Подготовка",
        description: "Предварительная беседа с маркетологом. Специалист проанализирует информацию и составит план работы.",
      },
      {
        icon: Wallet,
        title: "Определение бюджета",
        description: "Обсуждаем общую сумму на контекстную рекламу. Можно установить дневной, недельный или месячный бюджет.",
      },
      {
        icon: Target,
        title: "Определение целей",
        description: "Обсуждаем цели кампании — увеличение посетителей, заявок, повышение узнаваемости ВУЗа.",
      },
    ],
  },
  {
    title: "Настройка и запуск",
    steps: [
      {
        icon: Rocket,
        title: "Создание аккаунта",
        description: "Специалист настраивает аккаунт в Яндекс.Директ, создаёт кампании и группы объявлений.",
      },
      {
        icon: BarChart3,
        title: "Семантическое ядро",
        description: "Исследуем ключевые слова, формируем списки запросов, копирайтер пишет цепляющие объявления.",
      },
      {
        icon: Settings,
        title: "Таргетинг на ЦА",
        description: "Настраиваем географию, возраст, пол, интересы для максимальной релевантности объявлений.",
      },
    ],
  },
  {
    title: "Сопровождение",
    steps: [
      {
        icon: Headphones,
        title: "Постоянная оптимизация",
        description: "Маркетологи отслеживают результаты, вносят корректировки, отключают неэффективные объявления.",
      },
    ],
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как мы работаем?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Настройка и ведение контекстной рекламы ВУЗа выполняется в три этапа
          </p>
        </motion.div>

        <div className="space-y-12">
          {stages.map((stage, stageIndex) => (
            <motion.div
              key={stageIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stageIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gold-gradient text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {stageIndex + 1}
                </span>
                {stage.title}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pl-11">
                {stage.steps.map((step, stepIndex) => (
                  <div
                    key={stepIndex}
                    className="p-6 bg-card rounded-xl border border-border hover:border-gold/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="text-lg font-semibold text-card-foreground mb-2">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
