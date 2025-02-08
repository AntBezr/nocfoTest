import {
  addPlant,
  editPlant,
  removePlant,
} from "app/store/features/plants/plantsSlice";
import { Plant } from "app/types/store";

import { useAppDispatch } from "./useAppDispatch";

export const usePlantsActions = () => {
  const dispatch = useAppDispatch();

  return {
    addPlant: (plant: { image: string; name: string; description: string }) =>
      dispatch(addPlant(plant)),
    editPlant: (id: string, plant: Plant) => dispatch(editPlant({ id, plant })),
    removePlant: (id: string) => dispatch(removePlant({ id })),
  };
};
