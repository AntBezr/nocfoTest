import { useAppDispatch } from "./useAppDispatch";
import {
  addPlant,
  editPlant,
  removePlant,
} from "app/store/features/plants/plantsSlice";
import { Plant } from "app/types/store";

export const usePlantsActions = () => {
  const dispatch = useAppDispatch();

  return {
    addPlant: (plant: Plant) => dispatch(addPlant(plant)),
    editPlant: (id: string, plant: Plant) => dispatch(editPlant({ id, plant })),
    removePlant: (id: string) => dispatch(removePlant({ id })),
  };
};
