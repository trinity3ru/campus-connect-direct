import spiLogo from "@/assets/logos/spi-logo.webp";
import endosurLogo from "@/assets/logos/endosur-logo.svg";
import politechLogo from "@/assets/logos/politech-logo.png";
import vavtLogo from "@/assets/logos/vavt-logo.jpeg";
import bricsLogo from "@/assets/logos/brics-logo.png";

const logos = [
  { src: spiLogo, alt: "SPI - School of Practical Investing" },
  { src: endosurLogo, alt: "Эндохирургический учебный и инновационный центр" },
  { src: politechLogo, alt: "Санкт-Петербургский политехнический университет" },
  { src: vavtLogo, alt: "ВАВТ" },
  { src: bricsLogo, alt: "Университет БРИКС" },
];

const LogoCarousel = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 md:py-16 bg-card/50 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground">
          Нам доверяют
        </h2>
        <p className="text-muted-foreground text-center mt-2">
          Образовательные учреждения, с которыми мы работаем
        </p>
      </div>
      
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-10 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto max-w-[150px] md:max-w-[200px] object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
