import { Button } from '@/components/ui/button';
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from 'lucide-react';

export const Resume = () => {
  const handleDownload = () => {
    // In a real application, this would link to an actual PDF file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1281mOpnPKlWQ6CIDY0pGGc9xVyQA78IZ/view?usp=sharing'; // Replace with actual PDF path
    link.download = 'https://drive.google.com/file/d/1281mOpnPKlWQ6CIDY0pGGc9xVyQA78IZ/view?usp=sharing';
    link.click();
  };

  const handlePreview = () => {
    // In a real application, this would open a PDF viewer
    window.open('https://drive.google.com/file/d/1281mOpnPKlWQ6CIDY0pGGc9xVyQA78IZ/view?usp=sharing', '_blank');
  };

  const resumeHighlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Professional Experience',
      items: [
        'MERN Stack Intern at CODTECH (2025-Present)'
        
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Education & Certifications',
      items: [
        'B.Tech. Computer Science - Rajiv Gandhi University of Knowledge and Technologies, Ongole (2020-2026)',
        'W3 Certified Javascript Developer',
        'Python Professional Certificate',
        'NXTWAVE Responsive Web Design Certification'
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Key Achievements',
      items: [
        'Led development of platform serving 100K+ users',
        'Reduced application load time by 60%',
        'Mentored 3+ junior developers',
        'Open source contributor with 100+ GitHub stars'
      ]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary mb-4">
            Professional Resume
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Career Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my professional experience, education, 
            and accomplishments in software development
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Resume Preview */}
          <div className="lg:col-span-1">
            <div className="glass-strong p-8 rounded-2xl text-center sticky top-8">
              <div className="mb-6">
                <div className="w-20 h-24 bg-gradient-neon rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Resume.pdf</h3>
                <p className="text-sm text-muted-foreground">Last updated: January 2024</p>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={handleDownload}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                
                <Button 
                  onClick={handlePreview}
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Online
                </Button>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold gradient-text">1+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">10+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">15+</div>
                    <div className="text-xs text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="lg:col-span-2 space-y-8">
            {resumeHighlights.map((section, index) => (
              <div key={index} className="glass p-8 rounded-xl hover-glow">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{section.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3 group">
                      <div className="w-2 h-2 bg-primary rounded-full mt-3 group-hover:scale-150 transition-transform"></div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Skills Summary */}
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technical Skills</h4>
                  <div className="space-y-2">
                    {[
                      'React, Vue.js, Angular',
                      'Node.js, Python, TypeScript',
                      'PostgreSQL, MongoDB, Redis',
                      'AWS, Docker, Kubernetes',
                      'Git, CI/CD, Agile/Scrum'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Soft Skills</h4>
                  <div className="space-y-2">
                    {[
                      'Team Leadership & Mentoring',
                      'Project Management',
                      'Technical Documentation',
                      'Client Communication',
                      'Problem Solving & Analysis'
                    ].map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto border-gradient">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to discuss opportunities?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always interested in hearing about new projects and career opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                onClick={() => window.open('https://www.linkedin.com/in/sarath-brahma-sai-nayak-banavath/', '_blank')}
              >
                View LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};