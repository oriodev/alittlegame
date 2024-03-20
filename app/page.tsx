import { DemonCarousel } from '@/components/DemonCarousel';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { BiHeartCircle } from 'react-icons/bi';

export default function Home() {
  return (
    <div>
      <div className="flex justify-between p-5 bg-slate-800 text-gray-200">
        <h1 className="text-xl">a little game</h1>
        <ModeToggle />
        <div>
          <Button variant="ghost">
            <BiHeartCircle className="mr-2 h-6 w-6" /> log in
          </Button>
        </div>
      </div>
      <div className="flex w-full h-full justify-center pt-10">
        <DemonCarousel />
      </div>
    </div>
  );
}
