import { useState, useCallback } from 'react';
import { Scene, Choice, gameData } from '@/data/gameStory';

export interface GameState {
  loyalty: number;
  currentAct: string;
  currentScene: string;
  history: string[];
  getCurrentScene: () => Scene | null;
  makeChoice: (choiceId: string) => void;
  resetGame: () => void;
  getEnding: () => { title: string; narrative: string };
}

export const useGameState = (): GameState => {
  const [loyalty, setLoyalty] = useState(0);
  const [currentAct, setCurrentAct] = useState('act1');
  const [currentScene, setCurrentScene] = useState('scene1-1');
  const [history, setHistory] = useState<string[]>([]);

  const getCurrentScene = useCallback((): Scene | null => {
    const act = gameData.acts[currentAct as keyof typeof gameData.acts];
    if (!act) return null;
    return act.scenes.find(s => s.id === currentScene) || null;
  }, [currentAct, currentScene]);

  const makeChoice = useCallback((choiceId: string) => {
    const choice = gameData.acts[currentAct as keyof typeof gameData.acts]?.scenes
      .flatMap(s => s.choices)
      .find(c => c.id === choiceId);
    if (!choice) return;

    setLoyalty(prev => Math.max(-50, Math.min(50, prev + choice.loyaltyImpact)));
    setHistory(prev => [...prev, choiceId]);

    // Simple branching logic: nextScene could be in same act or next
    if (choice.nextScene.startsWith('act')) {
      setCurrentAct(choice.nextScene.replace('-start', ''));
      setCurrentScene(`${choice.nextScene.replace('-start', '')}-1`);
    } else {
      setCurrentScene(choice.nextScene);
    }

    // Show toast feedback
    if (choice.loyaltyImpact > 0) {
      // Assuming sonner toast is available
      // toast.success('Loyalty strengthened!');
    } else if (choice.loyaltyImpact < 0) {
      // toast.error('Doubt creeps in...');
    }
  }, [currentAct]);

  const resetGame = useCallback(() => {
    setLoyalty(0);
    setCurrentAct('act1');
    setCurrentScene('scene1-1');
    setHistory([]);
  }, []);

  const getEnding = useCallback(() => {
    if (loyalty > 20) return gameData.endings.highLoyalty;
    if (loyalty < -20) return gameData.endings.lowLoyalty;
    return gameData.endings.neutral;
  }, [loyalty]);

  return {
    loyalty,
    currentAct,
    currentScene,
    history,
    getCurrentScene,
    makeChoice,
    resetGame,
    getEnding
  };
};