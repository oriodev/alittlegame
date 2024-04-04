'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface DisplayIngredientsProps {
  ingredients: number[];
}

export const DisplayIngredients: React.FC<DisplayIngredientsProps> = ({
  ingredients,
}) => {
  // pre-init
  const numOfIngredients = 3;

  // init
  const [crossedOff, setCrossedOff] = useState(
    Array(numOfIngredients).fill(false)
  );

  // on cross off
  const crossOff = (index: number) => {
    const newCrossedOff = [...crossedOff];
    newCrossedOff[index] = !crossedOff[index];
    setCrossedOff(newCrossedOff);
  };

  return (
    <main className="flex gap-5 m-5 justify-center">
      {ingredients.map((el, index) => (
        <React.Fragment key={index}>
          {!crossedOff[index] ? (
            <Image
              key={index}
              src={`/ingredients/${el}.png`}
              alt=""
              width="125"
              height="125"
              className="border-2 border-dashed border-white p-5"
              onClick={() => {
                crossOff(index);
              }}
            />
          ) : (
            <Image
              key={index}
              src={`/ingredients/${el}.png`}
              alt=""
              width="125"
              height="125"
              className="border-2 border-dashed p-5 opacity-50"
              onClick={() => {
                crossOff(index);
              }}
            />
          )}
        </React.Fragment>
      ))}
    </main>
  );
};
