import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plant } from "../../../types/store";
const initialState: Plant[] = [
  {
    id: "1",
    name: "Ficus",
    dateAdded: "2024-02-05",
    image:
      "https://horomidis.gr/wp-content/uploads/2021/10/FICUS-BENGHALENSIS-%CE%A6%CE%99%CE%9A%CE%9F%CE%A3-%CE%89-%CE%99%CE%9D%CE%94%CE%99%CE%9A%CE%97-%CE%A3%CE%A5%CE%9A%CE%99%CE%91-1.jpg",
    description:
      "Ficus is a popular houseplant known for its lush greenery and air-purifying properties. It requires moderate watering and good lighting.",
  },
  {
    id: "2",
    name: "Monstera",
    dateAdded: "2024-02-03",
    image:
      "https://www.ikea.com/fi/fi/images/products/fejka-tekokasvi-sisae-ulkokaeyttoeoen-monstera__0614197_pe686822_s5.jpg?f=xl",
    description:
      "Monstera is a trendy indoor plant with large, unique leaves. It thrives in bright, indirect light and needs occasional watering.",
  },
  {
    id: "3",
    name: "Monstera",
    dateAdded: "2024-02-03",
    image:
      "https://www.ikea.com/fi/fi/images/products/fejka-tekokasvi-sisae-ulkokaeyttoeoen-monstera__0614197_pe686822_s5.jpg?f=xl",
    description:
      "Monstera is a trendy indoor plant with large, unique leaves. It thrives in bright, indirect light and needs occasional watering.",
  },
  {
    id: "4",
    name: "Monstera",
    dateAdded: "2024-02-03",
    image:
      "https://www.ikea.com/fi/fi/images/products/fejka-tekokasvi-sisae-ulkokaeyttoeoen-monstera__0614197_pe686822_s5.jpg?f=xl",
    description:
      "Monstera is a trendy indoor plant with large, unique leaves. It thrives in bright, indirect light and needs occasional watering.",
  },
  {
    id: "5",
    name: "Monstera",
    dateAdded: "2024-02-03",
    image:
      "https://www.ikea.com/fi/fi/images/products/fejka-tekokasvi-sisae-ulkokaeyttoeoen-monstera__0614197_pe686822_s5.jpg?f=xl",
    description:
      "Monstera is a trendy indoor plant with large, unique leaves. It thrives in bright, indirect light and needs occasional watering.",
  },
];

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {
    addPlant: (state, action: PayloadAction<Plant>) => {
      state.push(action.payload);
    },
    removePlant: (state, action: PayloadAction<{ id: string }>) => {
      console.log("delete", action.payload.id);
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
