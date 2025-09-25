export interface Choice {
  id: string;
  text: string;
  loyaltyImpact: number; // -5 to +5, affects sidekick's alignment
  nextScene: string;
  description: string; // Flavor text for the choice
}

export interface Scene {
  id: string;
  title: string;
  narrative: string; // Main story text from Grimgor's POV
  choices: Choice[];
  image?: string; // Placeholder image URL
}

export const gameData = {
  acts: {
    act1: {
      id: 'act1',
      title: 'Act 1: The Ordinary Lair (Setup)',
      description: 'Grimgor\'s mundane life in the villain\'s shadow sets the stage. The hero\'s call to adventure disrupts everything.',
      scenes: [
        {
          id: 'scene1-1',
          title: 'A Day in the Dungeon',
          narrative: `You are Grimgor, the overlooked goblin sidekick to Dark Lord Valthor. Your "ordinary world" is polishing rusty swords in the damp underbelly of the Obsidian Citadel. The air smells of sulfur and regret. Valthor rants about his grand plan to conquer the kingdom, but you're just hoping for scraps from his feast. Suddenly, scouts report a knight—Elara the Valiant—has crossed the border. Valthor cackles: "The hero approaches! Prepare the traps!" Your stomach twists; heroes mean chaos, and chaos means no nap time.`,
          choices: [
            { id: 'c1-1a', text: 'Eagerly sharpen the hero-traps (loyal)', loyaltyImpact: 3, nextScene: 'scene1-2', description: 'You grit your teeth and oil the spike pits, dreaming of Valthor\'s praise—maybe a whole chicken this time.' },
            { id: 'c1-1b', text: 'Sabotage a trap subtly (doubtful)', loyaltyImpact: -2, nextScene: 'scene1-2', description: 'You "accidentally" loosen a gear on the swinging axe. Heroes are overrated anyway.' },
            { id: 'c1-1c', text: 'Hide and eavesdrop on Valthor\'s plans', loyaltyImpact: -1, nextScene: 'scene1-3', description: 'Crouching in the shadows, you hear whispers of a ancient artifact—the hero\'s true target.' }
          ],
          image: 'https://picsum.photos/800/400?random=1'
        },
        {
          id: 'scene1-2',
          title: 'The Call to Minion Duty',
          narrative: `Valthor summons you to his throne room, his eyes glowing like cursed embers. "Grimgor, my faithful wretch, the hero\'s journey begins! You will scout the borders." This is your call to adventure—or rather, to probable doom. From your POV, Elara isn\'t a destined savior; she\'s a nosy intruder with shiny armor that\'ll rust in your moat.`,
          choices: [
            { id: 'c1-2a', text: 'Scout loyally, report every detail', loyaltyImpact: 4, nextScene: 'act2-start', description: 'You sketch maps of the hero\'s path, feeling a twisted pride in serving the darkness.' },
            { id: 'c1-2b', text: 'Warn a local villager anonymously', loyaltyImpact: -3, nextScene: 'act2-start', description: 'Slipping a note under a door, you wonder if heroes bring better jobs than goblin grunt work.' },
            { id: 'c1-2c', text: 'Steal a map for yourself', loyaltyImpact: 1, nextScene: 'scene1-3', description: 'Knowledge is power—or at least a better hiding spot when things go south.' }
          ],
          image: 'https://picsum.photos/800/400?random=2'
        },
        {
          id: 'scene1-3',
          title: 'Whispers of Doubt',
          narrative: `Alone in the armory, you ponder Valthor\'s artifact obsession. The hero\'s legend echoes in tavern tales you\'ve overheard—prophecies of light overcoming shadow. Your refusal of the call? It\'s just goblin common sense.`,
          choices: [
            { id: 'c1-3a', text: 'Commit to the villain\'s cause', loyaltyImpact: 2, nextScene: 'act2-start', description: 'You stash the map and rally the trolls—darkness forever!' },
            { id: 'c1-3b', text: 'Daydream of defecting', loyaltyImpact: -4, nextScene: 'act2-start', description: 'What if you joined the hero? Goblins can be good guys too... right?' }
          ],
          image: 'https://picsum.photos/800/400?random=3'
        }
      ]
    },
    act2: {
      id: 'act2',
      title: 'Act 2: Trials in the Shadows (Confrontation)',
      description: 'Grimgor faces escalating challenges as the hero advances. Allies test loyalty, trials reveal the villain\'s flaws, and the midpoint twist questions everything.',
      scenes: [
        {
          id: 'scene2-1',
          title: 'The Forest Ambush',
          narrative: `Deep in the Whispering Woods, you set traps for Elara. But from your view, this "trial" is a comedy of errors—vines snag your feet, and the hero dodges arrows like she\'s dancing. Valthor\'s orcs bicker, exposing his tyrannical rule. Your choices here could tip the scales.`,
          choices: [
            { id: 'c2-1a', text: 'Lead the ambush fiercely', loyaltyImpact: 5, nextScene: 'scene2-2', description: 'You cackle as arrows fly, but Elara\'s shield gleams mockingly.' },
            { id: 'c2-1b', text: 'Trip an orc to "help" the hero escape', loyaltyImpact: -3, nextScene: 'scene2-2', description: '\'Oops,\' you mutter, watching her slip away unscathed.' },
            { id: 'c2-1c', text: 'Collect "spoils" from fallen foes', loyaltyImpact: 0, nextScene: 'scene2-3', description: 'A shiny dagger? Yours now—villain perks.' },
            { id: 'c2-1d', text: 'Question Valthor\'s strategy aloud', loyaltyImpact: -2, nextScene: 'scene2-3', description: 'The orcs grumble; even minions have limits.' }
          ],
          image: 'https://picsum.photos/800/400?random=4'
        },
        {
          id: 'scene2-2',
          title: 'Midpoint Betrayal',
          narrative: `At the ruined temple (midpoint), Elara confronts a minion ally—your old friend Skrag, tempted by her tales of freedom. The hero\'s "allies" gather, but you see them as naive fools. Valthor demands you execute Skrag; refusal means your head.`,
          choices: [
            { id: 'c2-2a', text: 'Execute loyally, gain dark magic', loyaltyImpact: 4, nextScene: 'scene2-3', description: 'The blade falls; power surges, but guilt festers.' },
            { id: 'c2-2b', text: 'Let Skrag flee with the hero', loyaltyImpact: -5, nextScene: 'scene2-3', description: 'You look away as he bolts—loyalty cracking like old stone.' },
            { id: 'c2-2c', text: 'Pretend to execute, fake it', loyaltyImpact: -1, nextScene: 'act3-start', description: 'Blood from a pouch; clever goblin trickery.' }
          ],
          image: 'https://picsum.photos/800/400?random=5'
        },
        {
          id: 'scene2-3',
          title: 'The Approaching Storm',
          narrative: `Trials mount: cave-ins, cursed relics, and Valthor\'s growing paranoia. Elara nears the citadel, her journey\'s ordeals mirroring your own— but you\'re the "obstacle," not the savior. The dark night of the soul hits when you find Valthor\'s secret: he\'s no true villain, just a broken tyrant.`,
          choices: [
            { id: 'c2-3a', text: 'Confront Valthor privately', loyaltyImpact: -4, nextScene: 'act3-start', description: 'His roar shakes you; doubt blooms like nightshade.' },
            { id: 'c2-3b', text: 'Double down on defenses', loyaltyImpact: 3, nextScene: 'act3-start', description: 'Barricades rise; the endgame beckons.' },
            { id: 'c2-3c', text: 'Send a warning to Elara', loyaltyImpact: -5, nextScene: 'act3-start', description: 'A raven carries your note—treason whispers.' },
            { id: 'c2-3d', text: 'Steal the artifact for yourself', loyaltyImpact: 2, nextScene: 'act3-start', description: 'Shiny and powerful; why serve when you can rule?' },
            { id: 'c2-3e', text: 'Rally other sidekicks', loyaltyImpact: 1, nextScene: 'act3-start', description: 'Minions unite? A goblin revolution brews.' }
          ],
          image: 'https://picsum.photos/800/400?random=6'
        },
        {
          id: 'scene2-4',
          title: 'Echoes of the Hero',
          narrative: `Flashbacks interweave: Elara\'s trials (dragon fights, mentor losses) seen through your spyglass. Her resilience unnerves you— is this the approach to the inmost cave?`,
          choices: [
            { id: 'c2-4a', text: 'Report to Valthor', loyaltyImpact: 3, nextScene: 'act3-start', description: 'He laughs maniacally; the climax looms.' },
            { id: 'c2-4b', text: 'Admire her from afar', loyaltyImpact: -2, nextScene: 'act3-start', description: 'Heroes have style; villains just have bad breath.' }
          ],
          image: 'https://picsum.photos/800/400?random=7'
        },
        {
          id: 'scene2-5',
          title: 'The Ordeal Begins',
          narrative: `Valthor unleashes his inner circle for the hero\'s ordeal. You\'re tasked with guarding the artifact— the heart of the journey\'s crisis.`,
          choices: [
            { id: 'c2-5a', text: 'Guard with zeal', loyaltyImpact: 4, nextScene: 'act3-start', description: 'Traps armed; no hero gets past Grimgor!' },
            { id: 'c2-5b', text: 'Hide it poorly', loyaltyImpact: -3, nextScene: 'act3-start', description: 'Elara might "find" it—oops.' }
          ],
          image: 'https://picsum.photos/800/400?random=8'
        }
      ]
    },
    act3: {
      id: 'act3',
      title: 'Act 3: Echoes of Defeat (Resolution)',
      description: 'The climax unfolds, with Grimgor\'s choices determining the hero\'s "victory" or twist. Return with the "elixir" feels bittersweet from the sidekick\'s view.',
      scenes: [
        {
          id: 'scene3-1',
          title: 'The Citadel Climax',
          narrative: `Elara storms the throne room— the resurrection moment. Valthor hurls dark magic, but your past choices echo: weakened traps, doubting minions. From your hiding spot, the battle is a farce; the hero\'s boon (the artifact) glimmers, but at what cost to you?`,
          choices: [
            { id: 'c3-1a', text: 'Aid Valthor in the fight', loyaltyImpact: 5, nextScene: 'scene3-2', description: 'You chuck potions; darkness might prevail!' },
            { id: 'c3-1b', text: 'Distract Elara for Valthor', loyaltyImpact: 2, nextScene: 'scene3-2', description: 'A smoke bomb—classic sidekick move.' },
            { id: 'c3-1c', text: 'Trip Valthor "accidentally"', loyaltyImpact: -4, nextScene: 'scene3-2', description: 'He stumbles; the hero strikes true.' },
            { id: 'c3-1d', text: 'Flee with the artifact', loyaltyImpact: 0, nextScene: 'scene3-3', description: 'Your new life begins—sidekick no more.' },
            { id: 'c3-1e', text: 'Join Elara mid-battle', loyaltyImpact: -5, nextScene: 'scene3-3', description: ' "Wait, I\'m with her!"—goblin redemption arc.' },
            { id: 'c3-1f', text: 'Sabotage both sides', loyaltyImpact: -1, nextScene: 'scene3-3', description: 'Chaos reigns; everyone loses but you laugh.' }
          ],
          image: 'https://picsum.photos/800/400?random=9'
        },
        {
          id: 'scene3-2',
          title: 'The Fall of Shadows',
          narrative: `Valthor falls (or rises, based on loyalty). Elara claims her reward, returning transformed. But you? Your "journey" ends in the rubble—bystander to destiny, or accidental architect?`,
          choices: [
            { id: 'c3-2a', text: 'Pledge to the new order (hero\'s world)', loyaltyImpact: -3, nextScene: 'ending', description: 'Elara nods; a fresh start in the light.' },
            { id: 'c3-2b', text: 'Curse the hero and vanish', loyaltyImpact: 3, nextScene: 'ending', description: 'Into the wilds—villainy calls elsewhere.' }
          ],
          image: 'https://picsum.photos/800/400?random=10'
        },
        {
          id: 'scene3-3',
          title: 'Grimgor\'s Elixir',
          narrative: `The dust settles. The hero rides off, boon in hand, but your perspective lingers: Was this victory or just another cycle? Endings vary—defection leads to a quirky side role in Elara\'s tales; loyalty to a pyrrhic villain win; neutrality to forgotten obscurity.`,
          choices: [], // Leads to dynamic ending based on total loyalty
          image: 'https://picsum.photos/800/400?random=11'
        }
      ]
    }
  },
  endings: {
    highLoyalty: {
      title: 'Dark Legacy',
      narrative: 'Valthor survives, barely. You rise as his right-hand goblin, ruling the remnants. The hero\'s journey? A minor setback. But deep down, you wonder if shadows ever truly win.'
    },
    lowLoyalty: {
      title: 'Unexpected Ally',
      narrative: 'Elara spares you, impressed by your "turn." You become the comic relief in her legends—a sidekick flipped to the light side. Heroism tastes... surprisingly like stew.'
    },
    neutral: {
      title: 'The Forgotten Path',
      narrative: 'Both sides collapse in chaos. You wander as a free goblin, artifact in pocket. No grand journey, just survival. Sometimes, bystanders write the real stories.'
    }
  }
};