import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void]>([
  {
    id: 123,
    name: "Rof",
    animal: "dog",
    description: "this is a brown dog",
    breed: "hampshire",
    images: [],
    city: "Barcelona",
    state: "Barcelona",
  },
  () => {},
]);

export default AdoptedPetContext;
