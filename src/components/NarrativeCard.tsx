import { Scene, Choice } from '@/data/gameStory';
import { useGameState } from '@/hooks/useGameState';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

interface NarrativeCardProps {
  scene: Scene;
  actTitle: string;
}

const NarrativeCard = ({ scene, actTitle }: NarrativeCardProps) => {
  const { makeChoice } = useGameState();

  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: `/${scene.id.split('-')[0]}`, label: actTitle },
    { label: scene.title }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="mb-6">
        <ol className="flex space-x-2 text-sm text-gray-500">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-1">/</span>}
              {item.href ? (
                <Link to={item.href} className="hover:text-gray-700">{item.label}</Link>
              ) : (
                <span className="font-medium text-gray-900">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <Card className="w-full bg-white/80 backdrop-blur-sm shadow-xl border-0">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gray-800">{scene.title}</CardTitle>
          {scene.image && (
            <img src={scene.image} alt={scene.title} className="w-full h-48 object-cover rounded-md mb-4" />
          )}
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 prose max-w-none">
            {scene.narrative}
          </p>
          <div className="space-y-3">
            {scene.choices.map((choice: Choice) => (
              <Button
                key={choice.id}
                onClick={() => makeChoice(choice.id)}
                variant={choice.loyaltyImpact > 0 ? 'destructive' : choice.loyaltyImpact < 0 ? 'secondary' : 'default'}
                className="w-full justify-start text-left p-4 h-auto"
              >
                <span className="font-medium">{choice.text}</span>
                <span className="text-xs text-gray-500 ml-2">({choice.loyaltyImpact >= 0 ? '+' : ''}{choice.loyaltyImpact})</span>
                <p className="text-sm text-gray-500 mt-1">{choice.description}</p>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NarrativeCard;