import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Stethoscope, ChevronDown, MessageCircle, Briefcase, Users, Award } from "lucide-react";

import caseStudyImage1 from "@/assets/case-study-1.jpg";
import caseStudyImage2 from "@/assets/case-study-2.jpg";
import caseStudyImage3 from "@/assets/case-study-3.jpg";
import caseStudyImage4 from "@/assets/case-study-4.jpg";

interface CaseStudy {
  id: number;
  title: string;
  year: string;
  icon: React.ElementType;
  shortDescription: string;
  fullContent: string;
  results: string[];
  conclusions: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Университет БРИКС",
    year: "2022",
    icon: GraduationCap,
    shortDescription: "25-40 регистраций в неделю через VK и myTarget с CPA от 467 ₽",
    fullContent: `Как с нуля выстроили воронку набора через ВК и My Target абитуриентов в университет и вышли на стабильные 25–40 регистраций в личный кабинет в неделю с CPA от 467 ₽.

Цель кампании — увеличить количество регистраций в личном кабинете абитуриента на сайте университета за счёт таргетированной рекламы ВК и myTarget. Минимальной стоимости регистрации удалось добиться в myTarget — 467 ₽ за конверсию в ЛК.

Клиент — частный вуз с программами бакалавриата и магистратуры, делающий упор на получение диплома российского и международного образца, гибкие форматы обучения и сотрудничество с работодателями.

Целевая аудитория:
• Основная: абитуриенты 17–22 лет
• Важный дополнительный сегмент: родители старшеклассников

Проведенные работы (июнь–ноябрь 2022):
• Настроена таргетированная реклама в VK и myTarget
• Применялась сегментация по возрасту и интересам
• Протестировано более 160 креативов
• Добавлена форма обратного звонка с приёмной комиссией

Ключевые моменты:
• Запуск таргета во ВКонтакте снизил стоимость регистрации в Яндекс.Директе за счёт увеличения доли тёплой аудитории
• MyTarget показал лучшую точечную эффективность по CPA
• На период пикового спроса показатель вырос до ~40 регистраций в неделю без кратного роста затрат`,
    results: [
      "Стабильный поток 25-30 регистраций в неделю",
      "До 40 регистраций в пик сезона (август)",
      "Минимальный CPA: 467 ₽ за регистрацию в ЛК",
      "160+ протестированных креативов",
      "Снижение стоимости конверсий в Яндекс.Директе",
    ],
    conclusions: "Связка VK как первое касание + myTarget как перформанс-инструмент позволила получить стабильный поток регистраций и снизить стоимость конверсий за счёт прогрева аудитории. Масштабное тестирование креативов было критичным фактором успеха.",
    image: caseStudyImage1,
  },
  {
    id: 2,
    title: "Колледж БРИКС",
    year: "2022",
    icon: BookOpen,
    shortDescription: "От 790 ₽ до 194 ₽ за регистрацию для нового бренда",
    fullContent: `Набор в колледж через ВК: 25–40 регистраций в неделю для нового бренда без имени.

Клиент — частный университетский колледж, который реализует программы СПО с акцентом на международное образование, языковую подготовку и практико-ориентированное обучение.

Целевая аудитория: школьники 9–11 классов и их родители по всей России, ориентированные на поступление после школы без ЕГЭ.

Особенность: бренд был новым в 2022 году — лицензия и аккредитация есть, но узнаваемости почти не было.

Проведенные работы:
• Настроена полная аналитика: пиксель ВК, цели в Метрике и GA
• Запущены кампании во ВКонтакте в формате универсальной записи
• Разбивка по сегментам: школьники 9–11 классов, родители, интересы
• Основной объем заявок давал контекстный таргетинг по ключевым словам
• Отдельные кампании под каждую специальность
• Протестировано более 180 креативов

Анализ показал, что до регистрации требовалось 5-6 касаний с рекламой и сайтом.

Офферы:
• "В вуз без ЕГЭ" — лучшие результаты по CPA среди школьников
• "Надоела школа" — высокая конверсия
• Креативы по конкретным специальностям — усиление мотивации`,
    results: [
      "Стоимость регистрации снизилась с 790 ₽ до 194 ₽",
      "25-40 регистраций в неделю стабильно",
      "180+ протестированных креативов",
      "Отложенные конверсии продолжались даже через год",
      "Контекстный таргетинг показал лучший CPA",
    ],
    conclusions: "При правильной работе с контекстным таргетингом, офферами и аналитикой возможно устойчиво масштабировать набор абитуриентов в частные образовательные организации даже для нового бренда без узнаваемости.",
    image: caseStudyImage2,
  },
  {
    id: 3,
    title: "Татищевский государственный университет",
    year: "2024",
    icon: GraduationCap,
    shortDescription: "Набор студентов на программы для выпускников колледжей",
    fullContent: `Заказчик: Региональный частный вуз

Задача: Набор студентов на программы для выпускников колледжей.

Кампания стартовала весной 2024 года и длилась один сезон. Основной канал – Яндекс.Директ (поиск + РСЯ + ретаргетинг).

Клиент сформулировал пять KPI: увеличить целевой трафик на сайт; удержать среднюю стоимость клика (CPC) в поиске не выше 40 руб.; добиться приоритета показа на 1–2 позициях; разделить аудитории на студентов и родителей; удержать среднее время на сайте не ниже 3 мин.

Специалисты собрали семантику с оператором «!» (фиксирование формы слова) – например, запросы «после колледжа» – и разбили её на логические группы по направлениям обучения. Для каждого факультета создали отдельную кампанию с своими заголовками и посадочными страницами.

В кампаниях в РСЯ настроили корректировки по возрасту: исключили показы для аудитории до 18 лет и в диапазоне 25–34 года, так как она не попадала в целевую аудиторию. Для тех, кто посещал ключевые разделы сайта, настроили ретаргетинг с предложением пройти пробный экзамен онлайн.

Дополнительно запустили отдельную кампанию по информационным запросам («как поступить после колледжа без ЕГЭ» и т.п.) – на лендинге подробно рассказали об условиях поступления. В процессе показов мониторили поисковые запросы и площадки, регулярно добавляя минус-слова и запрещая площадки с низким качеством.`,
    results: [
      "CPC снизился до 30 руб.",
      "CTR составил 25,5%",
      "Показатель отказов — около 15%",
      "Среднее время на сайте превысило 4 мин.",
      "Целевой трафик вырос почти вдвое",
    ],
    conclusions: "Чёткая сегментация (студенты / родители) и разделение кампаний по направлениям позволяют контролировать стоимость клика и повысить вовлечённость. Информационные кампании помогают захватывать аудиторию на раннем этапе.",
    image: caseStudyImage1,
  },
  {
    id: 4,
    title: "Квизы для набора на специалитет",
    year: "2024",
    icon: Users,
    shortDescription: "Использование квиз-опросов для технического университета",
    fullContent: `В рамках набора абитуриентов по программе специалитета питерского технического университета мы столкнулись с тем, что корпоративный сайт совершенно не подходит для проведения эффективной рекламной кампании.

Ввиду ограничения по срокам и бюджету мы предложили заказчику использовать самую популярную платформу для квиз-опросов – Марквиз.

Задача: Набрать максимум заинтересованной аудитории для посещения дней открытых дверей, а позже и для набора потенциальных абитуриентов.

Выбрали 3-5 вопросов, которые показывают заинтересованность абитуриентов:
- Финансовые гарантии
- Специальности и их перспективность
- Сравнение с другими смежными специальностями
- "Пройди короткий опрос и узнай, почему именно мы..."

Разработали квизы на базе платформы Марквиз с интеграцией в Яндекс.Директ. Настроили таргетинг на целевую аудиторию выпускников школ и их родителей.`,
    results: [
      "Средняя конверсия квиза 3-4%",
      "100% аналитика всех действий посетителей",
      "Прозрачные отчёты о стоимости посетителя",
      "Встроенная аналитика показывает интересы аудитории",
    ],
    conclusions: "Квизы – рабочий способ вовлечь аудиторию, которой скучны стандартные формы. Они позволяют выявлять интересы посетителей и персонализировать предложение. Даже небольшой интерактив способен увеличить количество заявок и снизить CPL без привлечения большого бюджета.",
    image: caseStudyImage2,
  },
  {
    id: 5,
    title: "Университет повышения квалификации",
    year: "2024-2025",
    icon: Briefcase,
    shortDescription: "Переподготовка для медицинских работников",
    fullContent: `Заказчик: Университет повышения квалификации и переподготовки для медицинских работников.

Задача: Клиент получал заявки только по рекомендации от тех, кто уже отучился. Идея — попробовать канал Яндекс Директ как дополнительный источник заявок.

Начали с настройки аналитики и подключения коллтракинга Callibri. Выбрали наиболее перспективные направления с точки зрения клиента. По факту – выстрелили немного другие направления.

Протестировали ретаргетинг. Рекламу запускали как в России, так и по СНГ.

Отличительные особенности проекта:
- Нет привязки к сезону и летних наборов — обучение идёт круглый год
- Обучение оффлайн, медработники должны приехать в город на период прохождения курсов
- Долгий период принятия решения

Рекламу остановили на Новый год 2025. А заявки продолжали приходить ещё в течение нескольких месяцев благодаря накопленному ретаргетингу и узнаваемости.`,
    results: [
      "Новый канал привлечения заявок",
      "Работающий ретаргетинг с долгим эффектом",
      "Заявки из России и СНГ",
      "Заявки продолжались после остановки рекламы",
    ],
    conclusions: "Яндекс.Директ эффективен даже для узкоспециализированных образовательных программ с длинным циклом принятия решения. Ретаргетинг особенно важен для такой аудитории.",
    image: caseStudyImage3,
  },
  {
    id: 6,
    title: "Комплексная стратегия для ВУЗа",
    year: "2024",
    icon: Award,
    shortDescription: "Интеграция всех каналов продвижения",
    fullContent: `Комплексный проект для крупного регионального университета, объединивший все наработки предыдущих кампаний.

Задача: Создать единую систему привлечения абитуриентов через Яндекс.Директ с интеграцией всех каналов — поиска, РСЯ, ретаргетинга и квизов.

Подход:
1. Аудит текущих рекламных кампаний и выявление точек роста
2. Сегментация аудитории по направлениям подготовки
3. Создание отдельных кампаний для каждого факультета
4. Разработка квизов для повышения вовлечённости
5. Настройка сквозной аналитики

Особое внимание уделили работе с родителями абитуриентов — отдельные кампании с другими посылами и временем показа.

Интегрировали CRM-систему для отслеживания полного пути абитуриента от первого клика до подачи документов.`,
    results: [
      "Рост заявок на 150% по сравнению с прошлым годом",
      "Снижение CPL на 35%",
      "Полная прозрачность воронки продаж",
      "Данные для улучшения следующих кампаний",
    ],
    conclusions: "Комплексный подход с интеграцией всех инструментов Яндекс.Директ и аналитики даёт синергетический эффект и позволяет масштабировать успешные решения.",
    image: caseStudyImage4,
  },
];

const CaseCard = ({ caseStudy }: { caseStudy: CaseStudy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = caseStudy.icon;

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-card rounded-2xl border border-border overflow-hidden shadow-[var(--card-shadow)] hover:border-gold/30 transition-colors"
    >
      {/* Header */}
      <div
        className="p-6 cursor-pointer hover:bg-muted/30 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-gold" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-card-foreground">
                  {caseStudy.title}
                </h3>
                <span className="px-2 py-0.5 text-xs font-medium bg-gold/20 text-gold rounded-full">
                  {caseStudy.year}
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                {caseStudy.shortDescription}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:flex border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/50">
              Подробнее
            </Button>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-border">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="prose prose-sm max-w-none">
                    <p className="text-foreground whitespace-pre-line leading-relaxed">
                      {caseStudy.fullContent}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="bg-muted/50 rounded-xl p-4 border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Результаты:</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conclusions */}
                  <div className="bg-gold/5 rounded-xl p-4 border border-gold/20">
                    <h4 className="font-semibold text-gold mb-2">Выводы:</h4>
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.conclusions}
                    </p>
                  </div>
                </div>

                {/* Sidebar with Image and CTAs */}
                <div className="space-y-4">
                  <div className="aspect-video bg-muted rounded-xl overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={scrollToForm}
                      className="w-full bg-gold-gradient hover:shadow-gold-lg text-primary-foreground"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Задать вопрос
                    </Button>
                    <Button
                      onClick={scrollToForm}
                      className="w-full"
                      variant="outline"
                    >
                      <Briefcase className="w-4 h-4 mr-2" />
                      Обсудить вашу задачу
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="cases" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Работаем с проектами в образовании с 2019 года
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Вот некоторые проекты, которые мы продвигали
          </p>
        </motion.div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {caseStudies.map((caseStudy) => (
            <CaseCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
