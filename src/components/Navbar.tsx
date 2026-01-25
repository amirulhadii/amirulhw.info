import { motion } from "framer-motion";
import { resumeData } from "@/data/resumeData";

export function Navbar() {
  const { personal } = resumeData;
  const firstName = personal.name.split(" ")[0];

  const navItems = [
    { label: firstName, href: "#" },
    { label: "Q&A", href: "#question-bar" },
    { label: "Products That Moved Metrics", href: "#portfolio" },
    { label: "Track Records", href: "#records" },
    { label: "Peer Reviews", href: "#testimonials" },
    { label: "Ready to talk", href: "#contact" },
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
