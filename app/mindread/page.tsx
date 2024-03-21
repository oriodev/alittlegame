'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">
      <h1 className="text-2xl mt-10 text-center">the random guess game!</h1>
      <p className="text-center text-slate-300 italic">
        step into my lair and i, draven bloodthorn, shall read your mind.
        <br />
        if you can make a guess that i do not predict, i shall give you gold.
        <br />
        but be warned. draven bloodthorn is never beaten.
      </p>
      <Image
        className="m-10"
        src="/npcs/PNG/2.png"
        alt=""
        height={300}
        width={300}
      />
    </div>
  );
}
