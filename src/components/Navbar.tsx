import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export function Navbar() {
  const { personal } = resumeData;
  const firstName = personal.name.split(" ")[0];

  const navItems = [
    { label: firstName, href: "#" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "LinkedIn", href: "https://linkedin.com", external: true },
    { label: "Get in touch", href: `mailto:${personal.email}` },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-card/95 backdrop-blur-md rounded-full px-2 py-2 shadow-elevated border border-border">
        <ul className="flex items-center gap-1">
          {navItems.map((item, index) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors inline-block
                  ${index === 0 
                    ? "text-foreground font-semibold" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
