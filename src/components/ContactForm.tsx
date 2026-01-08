import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, CheckCircle, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

type ContactMethod = "phone" | "telegram";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [contactMethod, setContactMethod] = useState<ContactMethod>("phone");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Пожалуйста, согласитесь с условиями обработки данных");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Ваш вопрос отправлен! Мы свяжемся с вами в ближайшее время.");
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Спасибо за обращение!
            </h2>
            <p className="text-muted-foreground text-lg">
              Мы получили ваш вопрос и свяжемся с вами в ближайшее время.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Задать вопрос
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Оставьте заявку и мы свяжемся с вами для обсуждения вашего проекта
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] border border-border/50"
          >
            <div className="space-y-2 mb-6">
              <Label htmlFor="name">Ваше имя *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Иван Иванов"
                required
                className="bg-background"
              />
            </div>

            {/* Contact Method Toggle */}
            <div className="mb-6">
              <Label className="mb-3 block">Способ связи *</Label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setContactMethod("phone")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
                    contactMethod === "phone"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  Телефон
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod("telegram")}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
                    contactMethod === "telegram"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </button>
              </div>
            </div>

            {/* Contact Input */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="contact">
                {contactMethod === "phone" ? "Телефон *" : "Telegram *"}
              </Label>
              <Input
                id="contact"
                name="contact"
                type={contactMethod === "phone" ? "tel" : "text"}
                placeholder={
                  contactMethod === "phone"
                    ? "+7 (___) ___-__-__"
                    : "@username"
                }
                required
                className="bg-background"
              />
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@university.ru"
                className="bg-background"
              />
            </div>

            <div className="space-y-2 mb-6">
              <Label htmlFor="message">Ваш вопрос</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Опишите вашу задачу или вопрос..."
                rows={4}
                className="bg-background resize-none"
              />
            </div>

            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="agreement"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
              />
              <Label
                htmlFor="agreement"
                className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
              >
                Я согласен на обработку персональных данных и принимаю условия{" "}
                <a
                  href="/privacy"
                  className="text-primary underline hover:no-underline"
                  target="_blank"
                >
                  политики конфиденциальности
                </a>
              </Label>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Отправка..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Отправить вопрос
                </>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
