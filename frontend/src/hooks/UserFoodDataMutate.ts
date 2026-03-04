import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

export function useFoodDataMutate() {

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const response = await axios.post(
        `${API_URL}/food`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    },

    // ⭐ MÁGICA ACONTECE AQUI
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["food-data"],
      });
    },
  });

  return mutation;
}