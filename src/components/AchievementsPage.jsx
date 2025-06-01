
import React from 'react';

const AchievementsPage = () => {
  const AchievementCard = ({ title, description, imageUrl, tags }) => {
    return (
      <div className="
        bg-white rounded-2xl overflow-hidden shadow-lg
        flex flex-col w-72 h-96 m-4 relative
        transform transition-transform duration-300 hover:scale-105
        hover:shadow-xl
      ">
        {/* Card Image Container */}
        <div className="w-full h-3/5 overflow-hidden flex justify-center items-center">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover block" />
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col justify-between flex-grow text-gray-800">
          {title && <h3 className="text-xl font-semibold mb-2 leading-tight">{title}</h3>}
          {description && <p className="text-base text-gray-600 mb-4 text-justify">{description}</p>}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index} 
                  className="bg-gray-100 rounded-md px-3 py-1 text-sm font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
        </div>
      </div>
    );
  };

 
  const achievements = [
    {
      id: 1,
      title: 'Snowy Peaks',
      description: 'A breathtaking view of snow-capped mountains and a serene lake under a cloudy sky.',
      imageUrl: 'https://images.unsplash.com/photo-1549880338-7f9379685a21?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: [],
    },
    {
      id: 2,
      title: 'Ocean Whirlpool',
      description: 'The powerful and mesmerizing beauty of ocean currents forming a natural vortex.',
      imageUrl: 'https://images.unsplash.com/photo-1563248882-9571e43b6795?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: [],
    },
    {
      id: 3,
      title: 'Dancing Dunes',
      description: 'Capturing the breathtaking beauty of sand dunes through artistic lensmanship.',
      imageUrl: 'https://images.unsplash.com/photo-1499532598687-34651347ce6c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Photography', 'Art Direction'],
    },
    {
      id: 4,
      title: 'Rocky Coastline',
      description: 'Dramatic sea stacks and rugged cliffs battered by the relentless ocean waves.',
      imageUrl: 'https://images.unsplash.com/photo-1510253634065-ad0399d8d672?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: [],
    },
    {
      id: 5,
      title: 'Forest Mist',
      description: 'The mystical ambiance of a forest covered in a soft, ethereal mist.',
      imageUrl: 'https://images.unsplash.com/photo-1473212660462-df2ad700a9fa?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Nature', 'Atmosphere'],
    },
    {
      id: 6,
      title: 'Urban Night Lights',
      description: 'The vibrant glow of city lights against the dark canvas of the night sky.',
      imageUrl: 'https://images.unsplash.com/photo-1582236109919-61849174092b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Cityscape', 'Night Photography'],
    }
  ];

  return (
    // <div className="py-10 px-5 max-w-6xl mx-auto font-sans text-gray-900">
    //   <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Achievements</h1>
    //   <div className="flex flex-wrap justify-center gap-6">
    //     {achievements.map((achievement) => (
    //       <AchievementCard
    //         key={achievement.id} 
    //         title={achievement.title}
    //         description={achievement.description}
    //         imageUrl={achievement.imageUrl}
    //         tags={achievement.tags}
    //       />
    //     ))}
    //   </div>
    // </div>
    <></>
  );
};

export default AchievementsPage;