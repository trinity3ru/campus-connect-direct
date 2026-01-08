import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface RequestQuoteDialogProps {
  children: React.ReactNode;
}

const RequestQuoteDialog = ({ children }: RequestQuoteDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast.error("Пожалуйста, согласитесь с условиями");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form state when closing
      setTimeout(() => {
        setIsSubmitted(false);
        setAgreed(false);
      }, 200);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Спасибо за заявку!
            </h3>
            <p className="text-muted-foreground">
              Мы подготовим коммерческое предложение и свяжемся с вами.
            </p>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Запросить коммерческое предложение
              </DialogTitle>
              <p className="text-muted-foreground text-sm mt-2">
                Чтобы понять, чем мы можем быть полезны, и что мы можем сделать
                для вас, пожалуйста, заполните форму.
              </p>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="quote-email">E-mail *</Label>
                <Input
                  id="quote-email"
                  name="email"
                  type="email"
                  placeholder="example@university.ru"
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote-website">Адрес сайта</Label>
                <Input
                  id="quote-website"
                  name="website"
                  type="url"
                  placeholder="https://university.ru"
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quote-task">Описание задачи</Label>
                <Textarea
                  id="quote-task"
                  name="task"
                  placeholder="Опишите вашу задачу..."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="quote-agreement"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <Label
                  htmlFor="quote-agreement"
                  className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                >
                  Отправляя данную форму, я принимаю условия{" "}
                  <a
                    href="/privacy"
                    className="text-primary underline hover:no-underline"
                    target="_blank"
                  >
                    пользовательского соглашения
                  </a>{" "}
                  и даю согласие на{" "}
                  <a
                    href="/privacy"
                    className="text-primary underline hover:no-underline"
                    target="_blank"
                  >
                    обработку персональных данных
                  </a>{" "}
                  в соответствии с требованиями 152-ФЗ.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправка..." : "Отправить"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RequestQuoteDialog;
