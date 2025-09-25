import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import GameHeader from '@/components/GameHeader';

const GameHome = () => {
  return (
    <>
      <GameHeader />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex flex-col">
        <section className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Shadows of the Throne
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the Hero's Journey from the villain's sidekick. As Grimgor, navigate loyalty, sabotage, and chaos in this twisted tale. Your choices rewrite destiny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-gray-800 to-gray-600 text-white">
                <Link to="/act1">Begin Act 1</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">The Three Acts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Act 1: The Lair</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Grimgor's ordinary world shatters with the hero's arrival. Choose your path.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Act 2: Trials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Face ordeals, allies, and doubts as the hero advances.</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Act 3: The Fall</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Climax and resolution—your loyalty decides the end.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <MadeWithApplaa />
      </div>
    </>
  );
};

export default GameHome;