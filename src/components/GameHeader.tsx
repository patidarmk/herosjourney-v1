import { useGameState } from '@/hooks/useGameState';
import { Link, useRouter } from '@tanstack/react-router';
import { Menu, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const GameHeader = () => {
  const { loyalty, resetGame } = useGameState();
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white" size={20} />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Grimgor's Journal
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Home</Link>
            <Link to="/act1" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Act 1: Lair</Link>
            <Link to="/act2" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Act 2: Trials</Link>
            <Link to="/act3" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Act 3: Fall</Link>
            <Button onClick={resetGame} variant="outline" size="sm">Reset Journey</Button>
          </nav>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Loyalty:</span>
            <div className={cn('w-16 h-2 bg-gray-200 rounded-full', loyalty > 0 ? 'bg-red-500' : loyalty < 0 ? 'bg-blue-500' : 'bg-gray-500')}>
              <div className="h-full rounded-full" style={{ width: `${Math.abs(loyalty) * 2}%` }} />
            </div>
            <span>{loyalty}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GameHeader;