import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<
  [Pet | null, (adoptedPet: Pet) => void]
>([
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  () => {},
]);

export default AdoptedPetContext;
