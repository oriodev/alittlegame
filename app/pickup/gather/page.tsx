import getAsaIngredients from '@/actions/getAsaIngredients';
import { DisplayIngredients } from '@/components/asa/DisplayIngredients';
import { GatherGrid } from '@/components/asa/GatherGrid';

export default async function Gather() {
  const { ingredients }: { ingredients: number[] } = await getAsaIngredients();

  return (
    <div className="flex flex-col">
      <DisplayIngredients ingredients={ingredients} />
      <GatherGrid ingredients={ingredients} />
    </div>
  );
}
