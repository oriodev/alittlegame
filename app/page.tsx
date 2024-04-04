import getAsaIngredients from '@/actions/getAsaIngredients';
import { DemonCarousel } from '@/components/DemonCarousel';

export default async function Home() {
  return (
    <div>
      <div className="flex w-full h-full justify-center pt-10">
        <DemonCarousel />
      </div>
    </div>
  );
}
