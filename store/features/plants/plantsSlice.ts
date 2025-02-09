import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Asset } from 'expo-asset';

import { Plant } from '../../../types/store';
const initialState: Plant[] = [
  {
    id: '1',
    name: 'Bonsai',
    dateAdded: '2024-02-05',
    image: Asset.fromModule(require('@assets/images/plants/Bonsai.jpg')).uri,
    description:
      'Bonsai is a miniature tree grown in a pot, meticulously pruned and shaped. It requires regular care, proper lighting, and moderate watering to thrive.',
  },
  {
    id: '2',
    name: 'Cactus',
    dateAdded: '2024-02-03',
    image: Asset.fromModule(require('@assets/images/plants/cactus.jpg')).uri,
    description:
      'Cactus is a drought-tolerant plant known for its thick, fleshy stems that store water. It thrives in direct sunlight and requires minimal watering.',
  },
  {
    id: '3',
    name: 'Fiddle fig',
    dateAdded: '2024-02-03',
    image: Asset.fromModule(require('@assets/images/plants/fiddleFig.jpg')).uri,
    description:
      'Fiddle leaf fig (Ficus lyrata) is a popular indoor plant known for its large, glossy, violin-shaped leaves. It prefers bright, indirect light and needs regular watering when the soil is dry.',
  },
  {
    id: '4',
    name: 'Pilea',
    dateAdded: '2024-02-03',
    image: Asset.fromModule(require('@assets/images/plants/pilea.jpg')).uri,
    description:
      "Pilea, also known as the 'Chinese money plant,' is a popular houseplant with round, flat leaves. It prefers bright, indirect light and requires watering when the soil is dry.",
  },
  {
    id: '5',
    name: 'Plastic tree',
    dateAdded: '2024-02-03',
    image: Asset.fromModule(require('@assets/images/plants/plasticTree.jpg'))
      .uri,
    description:
      'A plastic tree is an artificial plant made from synthetic materials. It does not require any maintenance, making it an easy option for home decoration.',
  },
  {
    id: '6',
    name: 'Succulent',
    dateAdded: '2024-02-03',
    image: Asset.fromModule(require('@assets/images/plants/succulent.jpg')).uri,
    description:
      'Succulents are a diverse group of plants with thick, fleshy parts that store water. They are ideal for low-maintenance indoor gardens, requiring minimal watering and thriving in bright, indirect light.',
  },
];

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    addPlant: (
      state,
      action: PayloadAction<{
        image: string;
        name: string;
        description: string;
      }>,
    ) => {
      const newPlant: Plant = {
        id: state[state.length - 1].id + 1,
        dateAdded: new Date().toISOString().substring(0, 10),
        ...action.payload,
      };
      state.push(newPlant);
    },
    removePlant: (state, action: PayloadAction<{ id: string }>) => {
      return state.filter((plant) => plant.id !== action.payload.id);
    },
    editPlant: (state, action: PayloadAction<{ id: string; plant: Plant }>) => {
      const { id, plant } = action.payload;
      const plantIndex = state.findIndex((plant) => plant.id === id);
      state[plantIndex] = plant;
    },
  },
});

export const { addPlant, removePlant, editPlant } = plantsSlice.actions;
export default plantsSlice.reducer;
