
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'Core Java', icon: '☕' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'UI/UX Design', icon: '🎨' },
    { name: 'Figma', icon: '🔧' },
    { name: 'Responsive Design', icon: '📱' },
    { name: 'AI Tools', icon: '🤖' }
  ];

  const categories = [
    {
      title: 'Frontend Development',
      skills: ['HTML/CSS', 'JavaScript', 'Responsive Design'],
      color: 'border-blue-500 bg-blue-50'
    },
    {
      title: 'Backend Development',
      skills: ['Core Java', 'SQL'],
      color: 'border-green-500 bg-green-50'
    },
    {
      title: 'Design & Tools',
      skills: ['UI/UX Design', 'Figma', 'AI Tools'],
      color: 'border-purple-500 bg-purple-50'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">My Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I have experience with a wide range of technologies and tools that help me create exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className={`border-2 ${category.color} transition-transform hover:scale-105`}>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium mx-1">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-card border-portfolio-primary/20 inline-block">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Specialization</h3>
              <p className="text-gray-600">
                <strong>Responsive Web Design</strong> & <strong>Designing with AI Tools</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
