import { 
  Code, Database, Cloud, Wrench, 
  Palette, Server, Shield, GitBranch,
  Smartphone, Globe, Zap, Brain
} from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Palette className="w-6 h-6" />,
      color: 'primary',
      skills: [
        { name: 'React', icon: <Code className="w-8 h-8" />, level: 95 },
        { name: 'TypeScript', icon: <Code className="w-8 h-8" />, level: 90 },
        { name: 'Next.js', icon: <Globe className="w-8 h-8" />, level: 88 },
        { name: 'Tailwind CSS', icon: <Palette className="w-8 h-8" />, level: 92 },
        { name: 'Vue.js', icon: <Code className="w-8 h-8" />, level: 85 },
        { name: 'React Native', icon: <Smartphone className="w-8 h-8" />, level: 80 },
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'secondary',
      skills: [
        { name: 'Node.js', icon: <Server className="w-8 h-8" />, level: 93 },
        { name: 'Python', icon: <Code className="w-8 h-8" />, level: 88 },
        { name: 'Express.js', icon: <Zap className="w-8 h-8" />, level: 90 },
        { name: 'FastAPI', icon: <Zap className="w-8 h-8" />, level: 85 },
        { name: 'GraphQL', icon: <Database className="w-8 h-8" />, level: 82 },
        { name: 'REST APIs', icon: <Globe className="w-8 h-8" />, level: 95 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Cloud className="w-6 h-6" />,
      color: 'success',
      skills: [
        { name: 'PostgreSQL', icon: <Database className="w-8 h-8" />, level: 90 },
        { name: 'MongoDB', icon: <Database className="w-8 h-8" />, level: 88 },
        { name: 'AWS', icon: <Cloud className="w-8 h-8" />, level: 85 },
        { name: 'Docker', icon: <Cloud className="w-8 h-8" />, level: 83 },
        { name: 'Redis', icon: <Database className="w-8 h-8" />, level: 80 },
        { name: 'Supabase', icon: <Database className="w-8 h-8" />, level: 92 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="w-6 h-6" />,
      color: 'primary',
      skills: [
        { name: 'Git', icon: <GitBranch className="w-8 h-8" />, level: 95 },
        { name: 'Linux', icon: <Shield className="w-8 h-8" />, level: 85 },
        { name: 'VS Code', icon: <Code className="w-8 h-8" />, level: 98 },
        { name: 'Figma', icon: <Palette className="w-8 h-8" />, level: 80 },
        { name: 'Jest', icon: <Shield className="w-8 h-8" />, level: 87 },
        { name: 'AI/ML', icon: <Brain className="w-8 h-8" />, level: 75 },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/30 group-hover:border-primary group-hover:shadow-glow';
      case 'secondary':
        return 'border-secondary/30 group-hover:border-secondary group-hover:shadow-glow-purple';
      case 'success':
        return 'border-success/30 group-hover:border-success';
      default:
        return 'border-primary/30 group-hover:border-primary';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary mb-4">
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I use to build 
            modern, scalable applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="glass-strong p-6 rounded-xl text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${category.color}/10 border border-${category.color}/30 mb-4`}>
                  <div className={`text-${category.color}`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className={`group glass p-4 rounded-lg hover-glow transition-all duration-300 border-2 ${getColorClasses(category.color)}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted/20 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r from-${category.color} to-${category.color}-glow h-2 rounded-full transition-all duration-1000 delay-300`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Section */}
        <div className="mt-20 text-center">
          <div className="glass-strong p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Certifications & Learning</h3>
            <p className="text-muted-foreground mb-6">
              Continuously expanding my knowledge through professional certifications and courses
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                'AWS Certified Developer',
                'React Professional Certificate',
                'Node.js Application Developer',
              ].map((cert, index) => (
                <div key={index} className="glass p-4 rounded-lg border-gradient">
                  <div className="text-sm gradient-text font-medium">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};