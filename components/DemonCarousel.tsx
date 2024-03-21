import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { DemonCarouselFrame } from './DemonCarouselFrame';

export const DemonCarousel = () => {
  return (
    <div className="">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <DemonCarouselFrame num={index + 1} width={250} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
