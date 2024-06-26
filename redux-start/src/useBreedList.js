import { useGetBreedQuery } from "./petAPIService";

export default function useBreedList(animal) {
  const { data: breeds, isLoading } = useGetBreedQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return [[], "loaded"];
  }

  return [breeds ?? [], isLoading ? "loading" : "loaded"];
}
