import { useAppSelector } from "./useAppSelector";


export const usePlantsSelectors = () => {
  const plants = useAppSelector((state) => state.plants);
  return { plants };
};

