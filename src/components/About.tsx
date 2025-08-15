import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar & Visual Elements */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-neon opacity-20 blur-xl scale-110 animate-pulse"></div>
              
              {/* Avatar Container */}
              <div className="relative glass-strong p-6 rounded-3xl">
                <Avatar className="w-64 h-64 mx-auto border-4 border-primary/30">
                  <AvatarImage 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="John Doe"
                    className="object-cover"
                  />
                  <AvatarFallback className="text-6xl bg-gradient-neon text-background">JD</AvatarFallback>
                </Avatar>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg border-gradient">
                  <span className="text-sm gradient-text font-semibold">5+ Years</span>
                </div>
                <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-lg border-gradient">
                  <span className="text-sm gradient-text font-semibold">50+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary mb-4">
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate <span className="gradient-text">Developer</span> & 
                <span className="gradient-text"> Problem Solver</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a Full Stack Developer with over 5 years of experience building 
                scalable web applications and digital solutions. My journey started with 
                curiosity about how websites work, and it has evolved into a passion for 
                creating elegant, efficient, and user-centric software.
              </p>
              
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies, and 
                agile development practices. When I'm not coding, you'll find me exploring 
                the latest tech trends, contributing to open-source projects, or mentoring 
                aspiring developers.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Experience', value: '5+ Years' },
                { label: 'Projects', value: '50+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Certifications', value: '8' },
              ].map((stat, index) => (
                <div key={index} className="glass p-4 rounded-lg text-center hover-glow">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Core Values</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Clean Code', 'User Experience', 'Continuous Learning', 
                  'Team Collaboration', 'Innovation', 'Problem Solving'
                ].map((value, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="border-primary/50 text-primary hover:bg-primary/10 px-4 py-2"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">Fun Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🚀 Built my first website at age 16</li>
                <li>☕ Coffee enthusiast - 4 cups per day minimum</li>
                <li>🎮 Gaming keeps my problem-solving skills sharp</li>
                <li>🌱 Always learning something new every week</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};