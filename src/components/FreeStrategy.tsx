import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const FreeStrategy = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gold-gradient relative overflow-hidden">
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
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center flex-shrink-0">
              <Gift className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Бесплатная разработка стратегии
              </h2>
              <p className="text-primary-foreground/80 text-lg">
                Хотите понять, подходит ли вам продвижение через Яндекс.Директ? Оставьте заявку — мы перезвоним.
              </p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="text-lg px-8 py-6 font-semibold bg-background text-foreground hover:bg-background/90 shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
          >
            Связаться с нами
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeStrategy;
