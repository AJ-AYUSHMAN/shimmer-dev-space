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
import JobTitle from '@/components/JobTitle';
import CertificationCard from '@/components/CertificationCard';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const skillsData = [
    {
      title: 'Frontend Development',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux']
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Unity', 'Figma']
    }
  ];

  const projectsData = [
    {
      title: 'Multi-Shooter-Game',
      description: 'A game inspired buy BGMI TDM with multiplayer.',
      technologies: ['Unity', 'Photon', 'Mixamo'],
      imageUrl: 'https://github.com/AJ-AYUSHMAN/shimmer-dev-space/blob/main/src/assets/multishooter%20game.jpg',
      projectUrl: '#'
    },
    {
      title: 'Infinite Runner',
      description: 'Endless Runner game build on Unity 3D.',
      technologies: ['Unity', 'Mixamo'],
      imageUrl: 'https://github.com/AJ-AYUSHMAN/shimmer-dev-space/blob/main/src/assets/infinite.png',
      projectUrl: '#'
    },
    {
      title: 'Target Shooter',
      description: 'This game was build on unity 2D.',
      technologies: ['Unity', 'Mixamo'],
      imageUrl: 'https://github.com/AJ-AYUSHMAN/shimmer-dev-space/blob/main/src/assets/Target.png',
      projectUrl: '#'
    }
  ];

  const educationData = [
    {
      institution: 'Lovely Professional University',
      degree: 'B.Tech in Computer Science',
      period: '2022 - 2026',
      description: 'Specialized in Game Development and UI'
    },
    {
      institution: 'Levana Public School',
      degree: '10th and 12th',
      period: '2018 - 2022',
      description: 'Schooling'
    }
  ];

  const timelineData = [
    {
      date: '2024',
      title: 'Google Arcade Advanced Milstone',
      description: 'Participated in Google Arcade programme and achieved the Advanced milstone.',
    },
    {
      date: '2024',
      title: 'Google DevFest',
      description: 'Secured 4th place among 5 in quiz.',
    },
    {
      date: '2024',
      title: 'Gssoc Contribution',
      description: 'Contributed in Gssoc ext. 2024 and got 619th rank.',
    }
  ];

  const certificationsData = [
    {
      title: "Introduction to MERN",
      issuer: "Programming Pathsala",
      date: "Febuary 2025",
      credentialUrl: "#"
    },
    {
      title: "Game Development in Unity with C#",
      issuer: "CipherSchools",
      date: "July 2024",
      credentialUrl: "#"
    },
    {
      title: "Advanced Game Development",
      issuer: "Unity Learn",
      date: "November 2024",
      credentialUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
              Ayushman Raj
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Game Developer
            </motion.div>
          </motion.div>
        ) : (
          <>
            <Navbar />

            <section 
              id="home" 
              className="min-h-screen flex items-center justify-center px-4 pt-20"
            >
              <div className="text-center flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto w-full">
                <div className="flex-1 text-left md:pr-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="heading-xl mb-4">
                      Hi, I'm <span className="text-gradient">Ayushman Raj</span>
                    </h1>
                    <JobTitle />
                    <p className="max-w-2xl mb-12 text-lg">
                      I make games for fun.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
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
                        <a href="/src/assets/resume.pdf" download="ayushman_raj_resume.pdf" className="flex items-center gap-2">
                          Download Resume
                          <Download size={16} className="transition-transform group-hover:-translate-y-1" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex-1 md:flex-none md:w-96 mt-8 md:mt-0"
                >
                  <div className="relative w-72 h-72 mx-auto">
                    <img
                      src="https://github.com/AJ-AYUSHMAN/shimmer-dev-space/blob/main/src/assets/ayushmanpic3.jpg"
                      alt="Ayushman Raj"
                      className="rounded-full w-full h-full object-cover shadow-xl"
                    />
                    <div className="absolute inset-0 rounded-full glass opacity-20"></div>
                  </div>
                </motion.div>
              </div>
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
            </section>

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
                    I am a passionate Game Developer with a focus on creating elegant, 
                    efficientGames. With 1+ years of experience in 
                    the field, I have developed a strong understanding of both frontend and 
                    backend technologies.
                  </p>
                  <p className="text-lg mb-4">
                    My journey in game development began during college, where I discovered 
                    my love for making games. Since then, I've worked on a variety of projects ranging 
                    from small games to complex games.
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
                      src="https://github.com/AJ-AYUSHMAN/shimmer-dev-space/blob/main/src/assets/ayushmanpic3.jpg" 
                      alt="Ayushman Raj" 
                      className="rounded-lg w-full h-auto" 
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg w-48">
                    <p className="font-bold">1+ Years Experience</p>
                    <p className="text-sm text-muted-foreground">Game Development</p>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

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

            <AnimatedSection id="certifications" className="container">
              <SectionTitle 
                title="Certifications" 
                subtitle="Professional certifications and courses I've completed."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificationsData.map((cert, index) => (
                  <CertificationCard
                    key={index}
                    title={cert.title}
                    issuer={cert.issuer}
                    date={cert.date}
                    credentialUrl={cert.credentialUrl}
                    index={index}
                  />
                ))}
              </div>
            </AnimatedSection>

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
