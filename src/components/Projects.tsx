import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      github: 'https://github.com/sainayakbanavath/ECOMMERCE-FLYBUY.git',
      live: 'https://sainayakbanavath.github.io/ECOMMERCE-FLYBUY/#',
      featured: true
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Interactive dashboard with machine learning insights, real-time data visualization, and predictive analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Chart.js', 'TensorFlow'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      id: 3,
      title: 'Social Media Mobile App',
      description: 'Cross-platform mobile app with real-time messaging, photo sharing, and social features.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop',
      tech: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Automation Tool',
      description: 'CI/CD pipeline automation tool with monitoring, deployment, and infrastructure management features.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
      tech: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Grafana'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description: 'Modern real estate platform with property listings, virtual tours, and mortgage calculator.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      tech: ['Next.js', 'TypeScript', 'MongoDB', 'Mapbox', 'Vercel'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting system built on blockchain technology with smart contracts.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      tech: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise across 
            various technologies and domains
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="glass-strong p-4 rounded-2xl hover-glow">
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                        <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                        <Button size="sm" variant="outline" className="bg-background/80 backdrop-blur-sm">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <Badge variant="outline" className="border-primary text-primary mb-4">
                    Featured Project
                  </Badge>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="border-secondary/50 text-secondary hover:bg-secondary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
                    onClick={() => window.open(project.live, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div key={project.id} className="group glass-strong p-6 rounded-xl hover-glow">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-3 left-3 right-3 flex justify-center space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-background/80 backdrop-blur-sm text-xs"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="bg-background/80 backdrop-blur-sm text-xs"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 3 && (
                      <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                        +{project.tech.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-strong p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Interested in collaborating?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects and opportunities
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
