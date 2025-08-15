import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Eye } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a placeholder PDF download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume PDF path
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 border border-secondary/20 rounded-lg rotate-45 float opacity-30"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl float"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-6 mb-8">
          <div className="inline-block glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-4">
            Welcome to my digital space
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">BANAVATH SARATH BRAHMA SAI NAYAK</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
            Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, innovative solutions, and bringing ideas to life.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan group px-8"
          >
            <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Projects
          </Button>
          
          <Button
            onClick={downloadResume}
            variant="outline"
            size="lg"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground glow-purple group px-8"
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center space-y-2 opacity-70">
          <span className="text-sm text-muted-foreground">Scroll to explore</span>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-primary transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Background Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};