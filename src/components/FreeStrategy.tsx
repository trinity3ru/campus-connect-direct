import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

const FreeStrategy = () => {
  return (
    <section className="py-20 bg-gold-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Готовы привлекать новых студентов?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
            Оставьте заявку, и мы свяжемся с вами в течение часа, чтобы обсудить стратегию продвижения вашего образовательного учреждения.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+79061296068"
              className="flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/90 shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Телефон</div>
                <div>8 (906) 129-60-68</div>
              </div>
            </a>

            <a
              href="mailto:volgainfo@gmail.com"
              className="flex items-center gap-3 bg-background text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-background/90 shadow-lg hover:shadow-xl transition-all"
            >
              <Mail className="w-5 h-5" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Email</div>
                <div>volgainfo@gmail.com</div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeStrategy;
