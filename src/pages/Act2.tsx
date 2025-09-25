import { useGameState } from '@/hooks/useGameState';
import NarrativeCard from '@/components/NarrativeCard';
import GameHeader from '@/components/GameHeader';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const Act2 = () => {
  const { currentScene, getCurrentScene, currentAct } = useGameState();
  const scene = getCurrentScene();
  if (!scene) return <div>Loading...</div>;

  return (
    <>
      <GameHeader />
      <div className="min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
        <NarrativeCard scene={scene} actTitle="Act 2: Trials in the Shadows" />
      </div>
      <MadeWithApplaa />
    </>
  );
};

export default Act2;