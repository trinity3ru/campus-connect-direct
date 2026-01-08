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
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                isScrolled ? "bg-primary/10" : "bg-white/10"
              }`}
            >
              <GraduationCap
                className={`w-5 h-5 transition-colors ${
                  isScrolled ? "text-primary" : "text-gold"
                }`}
              />
            </div>
            <span
              className={`font-semibold text-lg transition-colors hidden sm:block ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Яндекс Директ для образования
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#how-we-work"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              Как мы работаем
            </a>
            <a
              href="#cases"
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                isScrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              Кейсы
            </a>
            <RequestQuoteDialog>
              <Button
                size="sm"
                variant={isScrolled ? "default" : "secondary"}
              >
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
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-border/50"
          >
            <nav className="flex flex-col gap-4">
              <a
                href="#how-we-work"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2"
              >
                Как мы работаем
              </a>
              <a
                href="#cases"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2"
              >
                Кейсы
              </a>
              <RequestQuoteDialog>
                <Button className="mt-2">
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
