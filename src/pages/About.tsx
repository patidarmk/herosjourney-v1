import GameHeader from '@/components/GameHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MadeWithApplaa } from '@/components/made-with-applaa';

const mockTeam = [
  { name: 'Alex Thorne', role: 'Lead Narrative Designer', bio: 'With 10 years in interactive fiction, Alex crafts stories that challenge perspectives. Passionate about RPGs and folklore.', avatar: 'https://picsum.photos/64/64?random=12' },
  { name: 'Jordan Reyes', role: 'Game Developer', bio: 'Full-stack dev specializing in React and choice-driven games. Built indie hits like Echoes of Fate.', avatar: 'https://picsum.photos/64/64?random=13' },
  { name: 'Samir Patel', role: 'Artist & UI Designer', bio: 'Pixel art enthusiast with a background in concept design for AAA titles. Loves dark fantasy aesthetics.', avatar: 'https://picsum.photos/64/64?random=14' },
  { name: 'Riley Kim', role: 'Sound Designer', bio: 'Composer for atmospheric audio. Credits include ambient scores for mobile adventures.', avatar: 'https://picsum.photos/64/64?random=15' },
  { name: 'Taylor Voss', role: 'QA Lead', bio: 'Ensures branching paths are bug-free. Former tester at a major studio, expert in replayability.', avatar: 'https://picsum.photos/64/64?random=16' },
  { name: 'Casey Lin', role: 'Project Manager', bio: 'Coordinates the chaos of game dev. MBA in interactive media, focused on player engagement.', avatar: 'https://picsum.photos/64/64?random=17' },
  { name: 'Morgan Hale', role: 'Writer & Lorekeeper', bio: 'PhD in mythology, weaves Hero\'s Journey twists. Contributed to bestselling fantasy novels.', avatar: 'https://picsum.photos/64/64?random=18' }
];

const About = () => {
  return (
    <>
      <GameHeader />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              About Shadows of the Throne
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A game that subverts expectations, told from the shadows. Our mission: Make players question who the real heroes are.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Story</h2>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  Born from a late-night discussion on narrative tropes, Shadows of the Throne reimagines the Hero's Journey through Grimgor's eyes. We wanted to humanize the "villain's" world—showing loyalty's cost and the absurdity of epic quests from the ground level. Developed over 6 months by a passionate indie team, this game draws from classics like The Witcher series and Discworld novels, blending humor, choice, and introspection.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mt-4">
                  Our goal? Create immersive, replayable experiences that spark conversation. With multiple endings based on your loyalty meter, every playthrough feels personal.
                </p>
              </CardContent>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockTeam.map((member) => (
                <Card key={member.name} className="bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                    <Avatar>
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Our Mission</h2>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed text-gray-700 text-center">
                  At the heart of our games is empathy through inversion. By playing as the sidekick, we challenge players to see the world anew—proving that every story has untold angles. Future projects will explore more unconventional POVs, like the environment or bystanders.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
        <MadeWithApplaa />
      </div>
    </>
  );
};

export default About;