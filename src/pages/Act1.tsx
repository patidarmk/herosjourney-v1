import { useGameState } from '@/hooks/useGameState';
import NarrativeCard from '@/components/NarrativeCard';
import GameHeader from '@/components/GameHeader';
import { useEffect } from 'react';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const Act1 = () => {
  const { currentScene, getCurrentScene, currentAct } = useGameState();

  useEffect(() => {
    if (currentAct !== 'act1') {
      // Redirect logic if needed, but for simplicity, assume navigation sets it
    }
  }, [currentAct]);

  const scene = getCurrentScene();
  if (!scene) return <div>Loading...</div>;

  return (
    <>
      <GameHeader />
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100">
        <NarrativeCard scene={scene} actTitle="Act 1: The Ordinary Lair" />
      </div>
      <MadeWithApplaa />
    </>
  );
};

export default Act1;