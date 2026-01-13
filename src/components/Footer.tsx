import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-gold" />
            </div>
            <span className="text-foreground font-semibold text-lg">
              Яндекс Директ для образования
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
            <a href="#how-we-work" className="hover:text-gold transition-colors">
              Как мы работаем
            </a>
            <a href="#cases" className="hover:text-gold transition-colors">
              Кейсы
            </a>
            <a href="#contact-form" className="hover:text-gold transition-colors">
              Контакты
            </a>
            <a href="/privacy" className="hover:text-gold transition-colors">
              Политика конфиденциальности
            </a>
          </nav>

          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-1">
              © {new Date().getFullYear()} ИП Куренков Алексей Владимирович
            </p>
            <p className="text-muted-foreground text-xs">
              ИНН: 632113610888
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
