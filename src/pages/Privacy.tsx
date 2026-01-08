import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Политика конфиденциальности
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Общие положения</h2>
                <p>
                  Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
                  персональных данных пользователей сайта.
                </p>
                <p>
                  Использование сайта означает безоговорочное согласие пользователя с настоящей 
                  Политикой и указанными в ней условиями обработки его персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Персональные данные</h2>
                <p>
                  Под персональными данными понимается любая информация, относящаяся к прямо или 
                  косвенно определённому физическому лицу (субъекту персональных данных).
                </p>
                <p>Мы можем собирать следующие данные:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Имя и фамилия</li>
                  <li>Контактный телефон</li>
                  <li>Адрес электронной почты</li>
                  <li>Наименование организации</li>
                  <li>Адрес сайта</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Цели обработки данных</h2>
                <p>Персональные данные обрабатываются в следующих целях:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Связь с пользователем для консультации</li>
                  <li>Подготовка коммерческих предложений</li>
                  <li>Улучшение качества обслуживания</li>
                  <li>Проведение маркетинговых исследований</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Защита данных</h2>
                <p>
                  Мы принимаем все необходимые организационные и технические меры для защиты 
                  персональных данных от неправомерного доступа, уничтожения, изменения, 
                  блокирования, копирования и распространения.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Права пользователя</h2>
                <p>Пользователь имеет право:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Получить информацию об обработке своих персональных данных</li>
                  <li>Требовать уточнения, блокирования или уничтожения данных</li>
                  <li>Отозвать согласие на обработку персональных данных</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Контактная информация</h2>
                <p>
                  По вопросам, связанным с обработкой персональных данных, вы можете связаться 
                  с нами через форму обратной связи на сайте.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Изменения политики</h2>
                <p>
                  Мы оставляем за собой право вносить изменения в настоящую Политику 
                  конфиденциальности. Актуальная версия всегда доступна на данной странице.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
