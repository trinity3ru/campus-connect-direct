import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import RequestQuoteDialog from "./RequestQuoteDialog";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-gold" />
            </div>
            <span className="font-semibold text-lg text-foreground hidden sm:block">
              Яндекс Директ для образования
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-we-work"
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              Как мы работаем
            </a>
            <a
              href="#cases"
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              Кейсы
            </a>
            <RequestQuoteDialog>
              <Button className="bg-gold-gradient hover:shadow-gold text-primary-foreground">
                Запросить КП
              </Button>
            </RequestQuoteDialog>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="text-foreground" />
            ) : (
              <Menu className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-border"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#how-we-work"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2 hover:text-gold transition-colors"
              >
                Как мы работаем
              </a>
              <a
                href="#cases"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2 hover:text-gold transition-colors"
              >
                Кейсы
              </a>
              <RequestQuoteDialog>
                <Button className="mt-2 bg-gold-gradient hover:shadow-gold text-primary-foreground">
                  Запросить КП
                </Button>
              </RequestQuoteDialog>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
