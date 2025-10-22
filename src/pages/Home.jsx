import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Download, Send, ExternalLink, Code, Server, Database, Cloud, Shield, Terminal } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { toast } from '../hooks/use-toast';
import { personalInfo, about, experience, skills, projects, education } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [activeSection, setActiveSection] = useState('hero');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: error.response?.data?.detail || "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold font-mono">nazim.dev</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                    activeSection === item.toLowerCase() ? 'text-emerald-500' : 'text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              {/* <div className="inline-block">
                <Badge variant="outline" className="border-emerald-500 text-emerald-500 px-4 py-1">
                  <Code className="h-3 w-3 mr-2 inline" />
                  Available for opportunities
                </Badge>
              </div> */}
              <h1 className="text-5xl md:text-7xl font-bold font-mono">
                <span className="text-gray-400">$ whoami</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 font-medium">
                {personalInfo.title}
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                size="lg"
              >
                <Mail className="h-5 w-5 mr-2" />
                Get in Touch
              </Button>
              <Button
                onClick={() => window.open(personalInfo.github, '_blank')}
                variant="outline"
                className="border-slate-700 hover:border-emerald-500 hover:text-emerald-500"
                size="lg"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-400 pt-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                <Mail className="h-4 w-4" />
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold font-mono">
                <span className="text-emerald-500">{'<'}</span>
                About Me
                <span className="text-emerald-500">{' />'}</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                {about.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {about.stats.map((stat, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-emerald-500 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-emerald-500 font-mono">{stat.value}</div>
                    <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-mono flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-emerald-500" />
                    Education
                  </h3>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-200">
                      {education.degree} - {education.major}
                    </p>
                    <p className="text-emerald-500 font-medium">{education.specialization}</p>
                    <p className="text-gray-400">{education.institution}</p>
                    <p className="text-sm text-gray-500">{education.school} • {education.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold font-mono">
                <span className="text-emerald-500">{'<'}</span>
                Experience
                <span className="text-emerald-500">{' />'}</span>
              </h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp) => (
                <Card key={exp.id} className="bg-slate-800/50 border-slate-700 hover:border-emerald-500 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-mono text-emerald-500">{exp.title}</CardTitle>
                        <CardDescription className="text-gray-300 text-lg">{exp.company}</CardDescription>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-cyan-500 text-cyan-500 self-start">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3 text-gray-400">
                          <span className="text-emerald-500 mt-1.5 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold font-mono">
                <span className="text-emerald-500">{'<'}</span>
                Technical Skills
                <span className="text-emerald-500">{' />'}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="font-mono text-emerald-500 flex items-center gap-2">
                      {category === 'Programming Languages' && <Code className="h-5 w-5" />}
                      {category === 'Backend & APIs' && <Server className="h-5 w-5" />}
                      {category === 'DevOps & Cloud' && <Cloud className="h-5 w-5" />}
                      {category === 'Databases' && <Database className="h-5 w-5" />}
                      {category === 'Systems & Tools' && <Terminal className="h-5 w-5" />}
                      {category === 'Security & Networking' && <Shield className="h-5 w-5" />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skillList.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                            <span className="text-xs text-gray-500 font-mono">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-1000"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold font-mono">
                <span className="text-emerald-500">{'<'}</span>
                Featured Projects
                <span className="text-emerald-500">{' />'}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:border-emerald-500 transition-all flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-xl font-mono text-emerald-500">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-cyan-500 text-cyan-400 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.slice(0, 3).map((achievement, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-gray-400">
                              <span className="text-emerald-500 flex-shrink-0">▹</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-emerald-500 font-mono">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold font-mono">
                <span className="text-emerald-500">{'<'}</span>
                Get In Touch
                <span className="text-emerald-500">{' />'}</span>
              </h2>
              <p className="text-gray-400 mt-4">Have a project in mind or want to discuss opportunities? Let's connect!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="font-mono text-emerald-500">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-gray-300 hover:text-emerald-500 transition-colors group">
                      <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Email</div>
                        <div className="font-medium">{personalInfo.email}</div>
                      </div>
                    </a>

                    <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-emerald-500 transition-colors group">
                      <div className="p-3 bg-slate-700 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Phone</div>
                        <div className="font-medium">{personalInfo.phone}</div>
                      </div>
                    </a>

                    <div className="flex items-center gap-3 text-gray-300">
                      <div className="p-3 bg-slate-700 rounded-lg">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Location</div>
                        <div className="font-medium">{personalInfo.location}</div>
                      </div>
                    </div>
                  </div>

                  <Separator className="bg-slate-700" />

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-400">Connect on Social</h4>
                    <div className="flex gap-3">
                      <Button
                        onClick={() => window.open(personalInfo.github, '_blank')}
                        variant="outline"
                        size="icon"
                        className="border-slate-700 hover:border-emerald-500 hover:text-emerald-500"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        onClick={() => window.open(personalInfo.linkedin, '_blank')}
                        variant="outline"
                        size="icon"
                        className="border-slate-700 hover:border-emerald-500 hover:text-emerald-500"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="font-mono text-emerald-500">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-slate-700 border-slate-600 focus:border-emerald-500 text-gray-100"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-slate-700 border-slate-600 focus:border-emerald-500 text-gray-100"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        required
                        rows={5}
                        className="bg-slate-700 border-slate-600 focus:border-emerald-500 text-gray-100 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      disabled={isSubmitting}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm font-mono">
              © 2025 {personalInfo.name}. Built with React & FastAPI.
            </p>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;