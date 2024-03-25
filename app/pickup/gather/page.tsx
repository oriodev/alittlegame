'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Gather() {
  const [coins, setCoins] = useState(0);
  const [items, setItems] = useState([0]);
  const [pickedUp, setPickedUp] = useState(Array(items.length).fill(false));

  const generateItems = () => {
    setItems(
      Array.from({ length: 25 }, (_, index) =>
        Math.floor(Math.random() * 49 + 1)
      )
    );
    setPickedUp(Array(items.length).fill(false));
  };

  const pickupItem = (index: number) => {
    setCoins(coins + 1);

    const newPickedUp = [...pickedUp];
    newPickedUp[index] = !newPickedUp[index];
    setPickedUp(newPickedUp);
  };

  return (
    <div className="">
      <Button onClick={generateItems}>pick up some shit</Button>
      <div className="flex justify-center items-center">
        <main className="grid grid-cols-5 gap-5">
          {items.length === 25 &&
            items.map((el, index) => (
              <React.Fragment key={index}>
                {pickedUp[index] !== true ? (
                  <Image
                    src={`/ingredients/${el}.png`}
                    alt=""
                    width="100"
                    height="100"
                    onClick={() => pickupItem(index)}
                  />
                ) : (
                  <div style={{ width: '100px', height: '100px' }}></div>
                )}
              </React.Fragment>
            ))}
        </main>
      </div>
    </div>
  );
}
