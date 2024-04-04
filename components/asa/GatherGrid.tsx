'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useToast } from '../ui/use-toast';
import { useRouter } from 'next/navigation';

interface GatherGridProps {
  ingredients: number[];
}

export const GatherGrid: React.FC<GatherGridProps> = ({ ingredients }) => {
  // pre init stuff
  const { toast } = useToast();
  const router = useRouter();

  // init state
  const [coins, setCoins] = useState(0);
  const [items, setItems] = useState([0]);
  const [pickedUp, setPickedUp] = useState(Array(items.length).fill(false));

  // handles pickup/clicking an item.
  const pickupItem = (el: number, index: number) => {
    setCoins(coins + 1);

    if (!ingredients.includes(el)) {
      toast({
        title: 'wrong item',
        description:
          'you throw it away immediately. yes u do. do not argue with me.',
      });
    }

    if (ingredients.includes(el)) {
      // announce correctness
      toast({
        title: 'asa needs that',
        description:
          'you put it in your backpack and dream of the coins and/or kisses you are going to get. make sure to tick it off your list!',
      });
    }

    const newPickedUp = [...pickedUp];
    newPickedUp[index] = !newPickedUp[index];
    setPickedUp(newPickedUp);
  };

  // handles generate button
  const generateItems = () => {
    setItems(
      Array.from({ length: 21 }, (_, index) =>
        Math.floor(Math.random() * 49 + 1)
      )
    );
    setPickedUp(Array(items.length).fill(false));
  };

  // handles complete search button
  const completeSearch = () => {
    router.push('/pickup/');
  };

  return (
    <div>
      <div className="flex flex-col gap-5 mt-5 justify-center items-center">
        <div className="flex gap-5">
          <Button onClick={generateItems}>explore deeper</Button>
          <Button onClick={completeSearch}>i am done</Button>
        </div>

        <main className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5 mt-5 ml-5 mr-5">
          {items.length === 21 &&
            items.map((el, index) => (
              <React.Fragment key={index}>
                {pickedUp[index] !== true ? (
                  <Image
                    src={`/ingredients/${el}.png`}
                    alt=""
                    width="100"
                    height="100"
                    onClick={() => pickupItem(el, index)}
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
};
