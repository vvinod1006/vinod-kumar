
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Local Business Website',
      description: 'Designed and developed a fully responsive website for a local business using HTML, CSS, and AI tools. The website features modern design principles, mobile-first approach, and optimized performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format',
      technologies: ['HTML', 'CSS', 'JavaScript', 'AI Tools'],
      category: 'Web Development',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Interactive Quiz App',
      description: 'Developed an interactive quiz application using Core Java with custom features including score tracking, timer functionality, and multiple question types. Built with clean architecture and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop&auto=format',
      technologies: ['Core Java', 'Swing', 'SQL'],
      category: 'Application Development',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'UI/UX Design Portfolio',
      description: 'A collection of UI/UX design projects created using Figma, showcasing modern design principles, user-centered design approaches, and responsive layouts for various platforms.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&auto=format',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      category: 'UI/UX Design',
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development, application development, and UI/UX design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-portfolio text-white">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-gradient-portfolio text-white hover:opacity-90 transition-opacity flex-1"
                  >
                    View Live
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white flex-1"
                  >
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
