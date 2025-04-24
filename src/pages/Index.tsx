
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '@/components/Navbar';
import AnimatedSection from '@/components/AnimatedSection';
import SectionTitle from '@/components/SectionTitle';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import TimelineItem from '@/components/TimelineItem';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown } from 'lucide-react';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time to show the welcome animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Skills data
  const skillsData = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD', 'Webpack']
    }
  ];

  // Projects data
  const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product listings, user authentication, and payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      projectUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media accounts with real-time data visualization.',
      technologies: ['Next.js', 'TypeScript', 'Firebase', 'Recharts'],
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      projectUrl: '#'
    },
    {
      title: 'Fitness Tracker App',
      description: 'Mobile application to track workouts, nutrition, and fitness progress over time.',
      technologies: ['React Native', 'Redux', 'GraphQL'],
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      projectUrl: '#'
    }
  ];

  // Education data
  const educationData = [
    {
      institution: 'Stanford University',
      degree: 'M.S. in Computer Science',
      period: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning'
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'B.S. in Computer Engineering',
      period: '2014 - 2018',
      description: 'Minor in Mathematics'
    }
  ];

  // Timeline data
  const timelineData = [
    {
      date: '2023',
      title: 'Senior Software Engineer',
      description: 'Led a team of 5 developers to build a scalable e-commerce platform',
    },
    {
      date: '2022',
      title: 'Best Web App Award',
      description: 'Received recognition for innovative dashboard solution',
    },
    {
      date: '2021',
      title: 'Software Engineer II',
      description: 'Promoted after successful delivery of multiple key projects',
    },
    {
      date: '2020',
      title: 'Open Source Contribution',
      description: 'Became a core contributor to a popular JavaScript framework',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-background z-50"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gradient mb-4"
            >
              John Doe
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Full Stack Developer
            </motion.div>
          </motion.div>
        ) : (
          <>
            <Navbar />

            {/* Hero Section */}
            <section 
              id="home" 
              className="min-h-screen flex items-center justify-center px-4 pt-20"
            >
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="heading-xl mb-4">
                    Hi, I'm <span className="text-gradient">John Doe</span>
                  </h1>
                  <h2 className="heading-md mb-8 text-muted-foreground">
                    Full Stack Developer
                  </h2>
                  <p className="max-w-2xl mx-auto mb-12 text-lg">
                    I craft responsive websites and web applications that provide
                    intuitive, pixel-perfect user experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      asChild
                      size="lg"
                      className="group"
                    >
                      <a href="#contact">
                        Get In Touch
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="group"
                    >
                      <a href="/src/assets/resume.pdf" download="john_doe_resume.pdf" className="flex items-center gap-2">
                        Download Resume
                        <Download size={16} className="transition-transform group-hover:-translate-y-1" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                  <a
                    href="#about"
                    className="flex flex-col items-center animate-bounce"
                  >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <ArrowDown size={20} />
                  </a>
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <AnimatedSection id="about" className="container">
              <SectionTitle 
                title="About Me" 
                subtitle="Here's a brief introduction about myself and my journey as a developer."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="glass-card p-8 rounded-xl"
                >
                  <p className="text-lg mb-4">
                    I am a passionate Full Stack Developer with a focus on creating elegant, 
                    efficient, and user-friendly applications. With 5+ years of experience in 
                    the field, I have developed a strong understanding of both frontend and 
                    backend technologies.
                  </p>
                  <p className="text-lg mb-4">
                    My journey in software development began during college, where I discovered 
                    my love for coding. Since then, I've worked on a variety of projects ranging 
                    from small business websites to complex enterprise applications.
                  </p>
                  <p className="text-lg">
                    I believe in writing clean, maintainable code and constantly strive to 
                    learn new technologies and methodologies to enhance my skill set.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative"
                >
                  <div className="glass p-2 rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                      alt="John Doe" 
                      className="rounded-lg w-full h-auto" 
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg w-48">
                    <p className="font-bold">5+ Years Experience</p>
                    <p className="text-sm text-muted-foreground">Full Stack Development</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection id="skills" className="container bg-primary/5">
              <SectionTitle 
                title="My Skills" 
                subtitle="Here are the technologies and tools I'm proficient with."
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillsData.map((skillCategory, index) => (
                  <SkillCard 
                    key={index}
                    title={skillCategory.title}
                    skills={skillCategory.skills}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection id="projects" className="container">
              <SectionTitle 
                title="My Projects" 
                subtitle="Take a look at some of the projects I've worked on."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection id="education" className="container bg-primary/5">
              <SectionTitle 
                title="Education" 
                subtitle="My academic background and qualifications."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {educationData.map((education, index) => (
                  <EducationCard
                    key={index}
                    institution={education.institution}
                    degree={education.degree}
                    period={education.period}
                    description={education.description}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Achievements Section */}
            <AnimatedSection id="achievements" className="container">
              <SectionTitle 
                title="Achievements" 
                subtitle="My journey and key milestones in chronological order."
              />
              <div className="max-w-4xl mx-auto">
                {timelineData.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

            {/* Contact Section */}
            <AnimatedSection id="contact" className="container">
              <SectionTitle 
                title="Contact Me" 
                subtitle="Feel free to reach out for collaborations or just a friendly hello."
              />
              <ContactForm />
            </AnimatedSection>

            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndexPage;
