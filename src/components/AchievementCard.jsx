import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const categoryColors = {
  hackathon: 'from-sky-500 to-sky-600',
  certification: 'from-zinc-500 to-zinc-600',
  project: 'from-sky-400 to-zinc-500',
  award: 'from-zinc-400 to-sky-500',
};

const categoryIcons = {
  hackathon: '🏆',
  certification: '🎓',
  project: '💡',
  award: '🌟',
};

export default function AchievementCard({ achievement, index }) {
  const isEven = index % 2 === 0;
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: isEven ? -50 : 50
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-zinc-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl hover:shadow-3xl transition-all duration-300`}>
        
        {/* Image Section */}
        <div className="relative lg:w-2/5 h-64 lg:h-auto overflow-hidden">
          <motion.img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} ${categoryColors[achievement.category]} opacity-60 mix-blend-multiply`} />
          <div className="absolute top-4 left-4">
            <div className="flex items-center space-x-2 bg-zinc-900/60 backdrop-blur-sm rounded-full px-3 py-1">
              <span className="text-xl">{categoryIcons[achievement.category]}</span>
              <span className="text-white text-sm font-medium capitalize">{achievement.category}</span>
            </div>
          </div>
          {achievement.link && (
            <motion.a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-zinc-800/60 backdrop-blur-sm rounded-full p-2 text-sky-300 hover:bg-zinc-700/60 hover:text-sky-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5 p-8 flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <motion.h2 
              className="text-2xl lg:text-3xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {achievement.title}
            </motion.h2>
            
            <motion.div 
              className="flex items-center space-x-2 text-sky-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              <Calendar size={16} />
              <span className="text-sm font-medium">{achievement.date}</span>
            </motion.div>
          </div>

          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
          />

          <motion.p 
            className="text-zinc-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.6 }}
          >
            {achievement.description}
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-2 pt-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.7 }}
          >
            {achievement.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="inline-flex items-center space-x-1 bg-zinc-700/50 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-zinc-200 border border-zinc-600/50 hover:bg-sky-500/20 hover:border-sky-400/50 hover:text-sky-200 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 + 0.8 + tagIndex * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Tag size={12} />
                <span>{tag}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
