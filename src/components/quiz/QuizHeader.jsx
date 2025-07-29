import React from 'react';
import { useQuizProgress } from '../../hooks/useQuizProgress';

export default function QuizHeader() {
  const { currentModule, currentScene, getProgress } = useQuizProgress();
  const { moduleProgress, scorePercentage } = getProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-evolve-charleston-green/95 backdrop-blur-sm
                    border-b border-evolve-arsenic px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-bricolage font-semibold text-evolve-white">
            Module {currentModule} • Scene {currentScene}
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-evolve-gray font-montserrat">Progress:</span>
            <div className="w-32 h-2 bg-evolve-arsenic rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-evolve-lavender-indigo to-evolve-heliotrope
                         transition-all duration-500"
                style={{ width: `${moduleProgress}%` }}
              />
            </div>
            <span className="text-sm text-evolve-lavender-indigo font-montserrat font-semibold">
              {Math.round(moduleProgress)}%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm text-evolve-gray font-montserrat">Score</div>
            <div className="text-lg font-bricolage font-semibold text-evolve-white">
              {Math.round(scorePercentage)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}