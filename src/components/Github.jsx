import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

function Github() {
  const data = useLoaderData();
  const username = data?.login;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const profileCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { boxShadow: '0px 0px 15px rgba(0, 119, 182, 0.6)', transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="min-h-screen px-6 py-16 flex flex-col items-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold mb-10 text-center flex items-center text-cyan-400"
        variants={itemVariants}
      >
        <FaGithub className="mr-3" /> GitHub Developer Dashboard
      </motion.h1>

      {/* Profile section */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-14 w-full max-w-6xl items-center">
        <motion.figure
          className="rounded-xl overflow-hidden   hover:scale-105 transition-transform duration-300 ease-in-out "
          variants={imageVariants}
          whileHover="hover"
        >
          <img
            className="rounded-lg object-cover "
            src="/images/me.png"
            alt="Developer"
          />
        </motion.figure>

        <motion.div
          className="p-8 rounded-xl shadow-lg mt-10 lg:mt-0 space-y-4 bg-[#1e293b]/90 backdrop-blur-md text-gray-100"
          variants={profileCardVariants}
          whileHover="hover"
        >
          {data ? (
            <>
              <h2 className="text-2xl font-semibold mb-3 flex items-center text-cyan-400">
                <FaGithub className="mr-2" /> Profile Overview
              </h2>
              <ProfileItem label="Name" value={data.name} icon="user" color="text-slate-300" />
              <ProfileItem label="Username" value={data.login} icon="at" color="text-slate-300" />
              <ProfileItem label="Email" value={data.email || 'Not public'} icon="envelope" color="text-slate-300" />
              <ProfileItem label="Public Repos" value={data.public_repos} icon="folder-open" color="text-slate-300" />
              <ProfileItem label="Hireable" value={data.hireable ? 'Yes' : 'No'} icon="briefcase" color="text-slate-300" />
              <ProfileItem
                label="Last Updated"
                value={new Date(data.updated_at).toLocaleDateString()}
                icon="calendar-alt"
                color="text-slate-300"
              />
            </>
          ) : (
            <p className="text-lg animate-pulse text-slate-400">Loading profile...</p>
          )}
        </motion.div>
      </div>

      {/* Contributions + Stats */}
      {username && (
        <motion.div
          className="mt-16 w-full max-w-5xl space-y-8"
          variants={itemVariants}
        >
          <motion.div
            className="rounded-xl shadow-lg p-6 backdrop-blur-md bg-[#1e293b]/90 text-gray-100"
            variants={profileCardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-semibold text-center mb-4 text-cyan-400">
              GitHub Stats
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <img
                className="rounded-md shadow-md bg-gray-900"
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true`}
                alt="GitHub Stats"
              />
              <img
                className="rounded-md shadow-md bg-gray-900"
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true`}
                alt="GitHub Streak"
              />
              <img
                className="w-full rounded-md bg-white p-2"
                src={`https://ghchart.rshah.org/38bdf8/${username}`}
                alt={`${username}'s GitHub Contribution Graph`}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
}

const ProfileItem = ({ label, value, icon, color }) => (
  <p className="text-lg flex items-center text-slate-200">
    <span className={`w-5 h-5 mr-2 ${color}`}>🔹</span>
    <span className="font-semibold text-cyan-400">{label}:</span> {value}
  </p>
);

export default Github;
