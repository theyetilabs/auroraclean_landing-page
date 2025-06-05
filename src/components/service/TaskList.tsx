"use client";

import { motion } from "framer-motion";

interface Task {
  category: string;
  description: string;
}

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-green-600 rounded-lg p-8 text-white">
      <div className="flex items-center justify-center mb-6">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="bg-white/20 p-4 rounded-full"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </motion.div>
      </div>

      <h3 className="text-2xl font-bold text-center mb-6">
        Our Home Cleaning Task List
      </h3>
      <p className="text-center mb-8">
        We do the housework you may not have time for. Here are some of the
        cleaning chores we can take care of for you:
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="space-y-4">
          {tasks.slice(0, Math.ceil(tasks.length / 2)).map((task) => (
            <motion.div key={task.category} variants={item} className="group">
              <div className="flex items-start justify-start gap-3 cursor-pointer">
                <div className="flex-shrink-0 items-start justify-start">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium group-hover:text-yellow-200 transition-colors duration-200">
                    {task.category}
                  </h4>
                  <p className="text-sm text-white/80 mt-1 h-0 group-hover:h-[200px] transition-height transition-ease-in-out duration-200 overflow-hidden">
                    {task.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {tasks.slice(Math.ceil(tasks.length / 2)).map((task) => (
            <motion.div key={task.category} variants={item} className="group">
              <div className="flex items-start justify-start gap-3 cursor-pointer">
                <div className="flex-shrink-0 ">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium group-hover:text-yellow-200 transition-colors duration-200">
                    {task.category}
                  </h4>
                  <p className="text-sm text-white/80 mt-1 h-0 group-hover:h-[200px] transition-height transition-ease-in-out duration-200 overflow-hidden">
                    {task.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
