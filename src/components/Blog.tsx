import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Bookmark } from 'lucide-react';

export const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, best practices for component architecture, and performance optimization techniques.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Mastering CSS Grid and Flexbox for Modern Layouts',
      excerpt: 'A comprehensive guide to creating responsive layouts using CSS Grid and Flexbox, with practical examples and common use cases.',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'CSS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 3,
      title: 'Node.js Performance Optimization Techniques',
      excerpt: 'Discover advanced techniques for optimizing Node.js applications, including memory management, caching strategies, and database optimization.',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Node.js',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Getting Started with Docker for Web Developers',
      excerpt: 'A beginner-friendly introduction to Docker, containerization concepts, and how to use Docker in your development workflow.',
      date: '2023-12-20',
      readTime: '6 min read',
      category: 'DevOps',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Advanced JavaScript Patterns and Best Practices',
      excerpt: 'Explore advanced JavaScript concepts including closures, prototypes, async patterns, and modern ES6+ features with practical examples.',
      date: '2023-12-15',
      readTime: '15 min read',
      category: 'JavaScript',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=300&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Building RESTful APIs with Express.js and MongoDB',
      excerpt: 'Step-by-step guide to creating robust REST APIs using Express.js and MongoDB, including authentication, validation, and error handling.',
      date: '2023-12-08',
      readTime: '14 min read',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop',
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      'React': 'border-primary text-primary',
      'CSS': 'border-secondary text-secondary',
      'Node.js': 'border-success text-success',
      'DevOps': 'border-primary text-primary',
      'JavaScript': 'border-secondary text-secondary',
      'Backend': 'border-success text-success'
    };
    return colors[category as keyof typeof colors] || 'border-primary text-primary';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-muted/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full text-sm text-primary mb-4">
            Blog & Articles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and experiences in web development, programming tips, 
            and industry best practices
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Featured Articles</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group glass-strong rounded-2xl overflow-hidden hover-glow">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className={`bg-background/80 backdrop-blur-sm ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
                    >
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary-glow"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-foreground">Recent Articles</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <article key={post.id} className="group glass p-6 rounded-xl hover-glow">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="outline" className={`bg-background/80 backdrop-blur-sm text-xs ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary-glow"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="glass-strong p-8 rounded-2xl text-center max-w-2xl mx-auto border-gradient">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get notified when I publish new articles and tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};