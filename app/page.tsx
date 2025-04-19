// import { Button } from "@/components/ui/button";

export default function HomePage() {
  const links = [
    { href: "/Brian_Resume.pdf", label: "Resume", download: true },
    { href: "#home", label: "Home" },
    { href: "#about-now", label: "About" },
    { href: "#articles", label: "Projects" },
    { href: "#posts", label: "Blog" },
    { href: "#newsletter", label: "Newsletter" },
    { href: "#inspiration", label: "Inspiration" },
    { href: "#toolbox", label: "Toolbox" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-zinc-900 dark:text-white">
      <header className="w-full px-6 py-5 flex justify-between items-center shadow-md sticky top-0 bg-white dark:bg-zinc-900 z-50">
        <h1 className="text-2xl font-bold tracking-wide italic">brian.is</h1>
        <nav className="space-x-3 text-sm font-medium flex items-center">
          {links.map(({ href, label, download }, idx) => {
            const props = {
              key: `${href}-${idx}`,
              href,
              className: "hover:text-indigo-600 transition-colors duration-150"
            };
            if (download) props.download = true;
            return <a {...props}>{label}</a>;
          })}
        </nav>
      </header>
      <main className="px-6 py-24 max-w-5xl mx-auto space-y-32 text-left">
        <section id="home" className="text-left space-y-4 scroll-mt-24">
          <h1 className="text-6xl font-extrabold leading-tight tracking-tight">Hey, I'm Brian.</h1>
          <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-300">
            Systems thinker. Aspiring builder of tools. Lover of design thinking. Language nerd. Weekend chef.
          </p>
        </section>

        <section id="articles" className="space-y-6 scroll-mt-24">
          <h2 className="text-4xl font-bold flex items-center justify-center gap-2">
            <span role="img" aria-label="Projects">🧰</span> Projects
          </h2>
          <div className="grid sm:grid-cols-1 place-items-center">
            <div className="p-6 border rounded-xl space-y-3 max-w-md w-full mx-auto text-left">
              <h3 className="text-xl font-semibold">NYT Recipe Emailer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A Python script that scrapes NYT Cooking and emails me a grocery list. Automation + food = 🧡
              </p>
              <a href="#" className="text-indigo-600 underline">Read more</a>
            </div>
          </div>
        </section>

        <footer className="text-sm text-center text-gray-600 dark:text-gray-400 pt-24 pb-12 border-t">
          © {new Date().getFullYear()} Brian. Built with clarity, code, and curiosity.
        </footer>
      </main>
    </div>
  );
}
