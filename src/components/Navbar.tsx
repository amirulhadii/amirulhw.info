import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Ask", href: "#hero" },
  { label: "Work", href: "#portfolio" },
  { label: "Impact", href: "#records" },
  { label: "Reviews", href: "#testimonials" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  const updateActiveSection = useCallback(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const scrollPosition = window.scrollY + 150;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const element = document.getElementById(sectionIds[i]);
      if (element && element.offsetTop <= scrollPosition) {
        setActiveSection(sectionIds[i]);
        return;
      }
    }
    setActiveSection(sectionIds[0]);
  }, []);

  useEffect(() => {
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [updateActiveSection]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-card/95 backdrop-blur-md rounded-full px-1.5 py-1.5 shadow-elevated border border-border">
        {/* Desktop Navigation */}
        <ul className="hidden sm:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 inline-block
                    ${isActive 
                      ? "bg-foreground text-background" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-full text-foreground hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16 bg-card border-border">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`px-4 py-3 rounded-lg text-base font-medium transition-all duration-300
                        ${isActive 
                          ? "bg-foreground text-background" 
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
