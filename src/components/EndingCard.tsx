import { useGameState } from '@/hooks/useGameState';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

const EndingCard = () => {
  const { getEnding, resetGame } = useGameState();

  const ending = getEnding();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">{ending.title}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-lg text-gray-200 leading-relaxed text-center">{ending.narrative}</p>
          <div className="flex justify-center space-x-4 mt-6">
            <Button asChild variant="default">
              <Link to="/">Play Again</Link>
            </Button>
            <Button onClick={resetGame} variant="outline">Reset & Replay</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EndingCard;