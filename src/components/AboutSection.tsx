import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face&auto=format" 
              alt="V Vinod Kumar - About"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">About Me</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm V Vinod Kumar, a passionate UI/UX Designer and Web Developer currently pursuing my B.Tech in Computer Science Engineering at Kuppam Engineering College. I specialize in creating responsive, user-friendly websites for local businesses using modern technologies and AI tools.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Educational Background</h3>
              
              <Card className="border-l-4 border-l-portfolio-primary">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">B.Tech in Computer Science Engineering</h4>
                      <p className="text-gray-600">Kuppam Engineering College</p>
                      <p className="text-sm text-gray-500">2022 - 2026</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">72%</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-portfolio-secondary">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">Intermediate (MPC)</h4>
                      <p className="text-gray-600">MFC Govt Junior College</p>
                      <p className="text-sm text-gray-500">2020 - 2022</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">69%</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-portfolio-accent">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">SSC</h4>
                      <p className="text-gray-600">ZPHS Chandam</p>
                      <p className="text-sm text-gray-500">2020</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">98%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">Interests & Passion</h3>
              <p className="text-gray-600">
                I'm deeply interested in UI/UX design, web development, and emerging AI tools. I enjoy solving complex design problems and creating intuitive digital experiences that make a real impact on users' lives.
              </p>
            </div>
            
            <Button className="bg-gradient-portfolio text-white hover:opacity-90 transition-opacity">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
