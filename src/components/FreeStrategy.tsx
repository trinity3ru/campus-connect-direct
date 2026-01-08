import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

const FreeStrategy = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Gift className="w-8 h-8 text-gold" />
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
            variant="secondary"
            onClick={scrollToForm}
            className="text-lg px-8 py-6 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
          >
            Связаться с нами
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeStrategy;
