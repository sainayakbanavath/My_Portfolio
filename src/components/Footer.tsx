import { Heart, Code, Coffee } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blog', id: 'blog' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', url: 'https://github.com/johndoe' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/johndoe' },
    { label: 'Twitter', url: 'https://twitter.com/johndoe' },
    { label: 'Discord', url: 'https://discord.com/users/johndoe' },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
              >
                John Doe
              </button>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and clean, efficient code.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>&</span>
              <Code className="w-4 h-4 text-primary" />
              <span>fueled by</span>
              <Coffee className="w-4 h-4 text-amber-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} John Doe. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={() => window.open('/privacy', '_blank')}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => window.open('/terms', '_blank')}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 p-3 glass rounded-full text-primary hover:text-primary-glow glow-cyan transition-all hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <div className="w-4 h-4 border-2 border-current border-b-transparent border-l-transparent rotate-45"></div>
      </button>
    </footer>
  );
};