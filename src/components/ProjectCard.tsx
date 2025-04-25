
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  index: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  technologies, 
  imageUrl, 
  projectUrl,
  index 
}: ProjectProps) => {
  const [imageSrc, setImageSrc] = useState(imageUrl);

  useEffect(() => {
    // This helps with dynamically resolving the image path in different environments
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      setImageSrc(imageUrl);
    };
    
    img.onerror = () => {
      // Try alternative path formats if the original fails
      const alternativePath = imageUrl.replace(/^\/src\//, './');
      const img2 = new Image();
      img2.src = alternativePath;
      
      img2.onload = () => {
        setImageSrc(alternativePath);
      };
      
      img2.onerror = () => {
        console.error(`Failed to load image: ${imageUrl}`);
        setImageSrc('/placeholder.svg'); // Fallback to placeholder
      };
    };
  }, [imageUrl]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <a 
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
