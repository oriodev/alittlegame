'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pickup() {
  const router = useRouter();

  const [items, setItems] = useState(
    Array.from({ length: 3 }, (_, index) => Math.floor(Math.random() * 49 + 1))
  );

  // start game handler
  const startSearch = () => {
    router.push('/pickup/gather');
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center m-5 md:w-1/2 gap-5">
        <Image
          className="border-solid border-2 border-white"
          src="/npcs/people/6.png"
          alt=""
          width={300}
          height={300}
        />
        <h1 className="text-3xl">asa&apos;s den</h1>

        <p className="italic text-center">
          greetings, brave adventurer. do me a favour, would ya? i got an
          alchemy assignment due tomorrow, but i&apos;m missing a few
          ingredients. could you go grab &apos;em from the forest for me? i pay
          in coins or kisses, whichever you prefer.
        </p>

        <div className="grid grid-cols-3 gap-8">
          {items.map((el) => (
            <Image
              className=""
              key={el}
              src={`/ingredients/${el}.png`}
              alt=""
              height={100}
              width={100}
            />
          ))}
        </div>

        <Button>start adventure</Button>
      </div>
    </div>
  );
}
