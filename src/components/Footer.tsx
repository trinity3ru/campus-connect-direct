import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-gold" />
            </div>
            <span className="text-primary-foreground font-semibold text-lg">
              Яндекс.Директ для ВУЗов
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-primary-foreground/80 text-sm">
            <a href="#how-we-work" className="hover:text-primary-foreground transition-colors">
              Как мы работаем
            </a>
            <a href="#cases" className="hover:text-primary-foreground transition-colors">
              Кейсы
            </a>
            <a href="#contact-form" className="hover:text-primary-foreground transition-colors">
              Контакты
            </a>
          </nav>

          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
