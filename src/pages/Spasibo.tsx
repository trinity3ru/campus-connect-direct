import { motion } from "framer-motion";
import { CheckCircle, Home, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Spasibo = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Иконка успеха */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>

            {/* Заголовок */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
            >
              Спасибо за ваше обращение!
            </motion.h1>

            {/* Описание */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Мы получили вашу заявку и свяжемся с вами по оставленным контактам 
              в ближайшее время.
            </motion.p>

            {/* Дополнительная информация */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-2">
                    Что дальше?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Наш специалист изучит вашу заявку и свяжется с вами в течение 
                    рабочего дня для обсуждения деталей вашего проекта и подготовки 
                    индивидуального предложения.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Кнопки */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={() => window.location.href = "/"}
                className="gap-2"
              >
                <Home className="w-5 h-5" />
                Вернуться на главную
              </Button>
            </motion.div>

            {/* Контактная информация */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-sm text-muted-foreground mt-8"
            >
              Если у вас срочный вопрос, вы можете связаться с нами напрямую 
              через форму на главной странице.
            </motion.p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Spasibo;
