'use client';

import Image from 'next/image';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function Home() {
  const { toast } = useToast();

  const [guess, setGuess] = useState(10);

  const makeGuess = () => {
    const dravernGuesses = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 21)
    );

    const userGuess = guess;

    if (dravernGuesses.includes(userGuess)) {
      toast({
        title: 'dravern read ur mind!',
        description: 'tough luck, no gold for u :(',
      });
    } else {
      toast({
        title: 'dravern failed to read ur mind!',
        description:
          'u have much mental fortitude to withstand such immense talent. congrats.',
      });
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl mt-10 text-center">
        draven bloodthorn&apos;s lair.
      </h1>
      <p className="text-center text-slate-300 italic">
        step into my lair and i shall read your mind.
        <br />
        if you can make a guess that i do not predict, i shall give you gold.
        <br />
        but be warned. draven bloodthorn is never beaten.
      </p>
      <div className="flex flex-col md:flex-row md:items-center md:justify-around">
        <div className="md:w-auto">
          <Image
            className="m-10"
            src="/npcs/dravern/2.png"
            alt=""
            height={300}
            width={300}
          />
        </div>
        <div className="w-full md:w-1/3 mt-5 md:mt-0">
          <Slider
            onValueChange={(e) => setGuess(e[0])}
            defaultValue={[10]}
            max={20}
            step={1}
          />
          <h2>{guess}</h2>
          <Button onClick={makeGuess} className="mt-5">
            read my mind.
          </Button>
        </div>
      </div>
    </div>
  );
}
