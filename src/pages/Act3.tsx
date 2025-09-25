import { useGameState } from '@/hooks/useGameState';
import NarrativeCard from '@/components/NarrativeCard';
import GameHeader from '@/components/GameHeader';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';

const Act3 = () => {
  const { currentScene, getCurrentScene, currentAct, history } = useGameState();
  const navigate = useNavigate();
  const scene = getCurrentScene();

  useEffect(() => {
    if (currentScene === 'scene3-3' || history.length > 10) { // Arbitrary completion check
      navigate({ to: '/ending' });
    }
  }, [currentScene, history.length, navigate]);

  if (!scene) return <div>Loading...</div>;

  return (
    <>
      <GameHeader />
      <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white">
        <NarrativeCard scene={scene} actTitle="Act 3: Echoes of Defeat" />
      </div>
      <MadeWithApplaa />
    </>
  );
};

export default Act3;