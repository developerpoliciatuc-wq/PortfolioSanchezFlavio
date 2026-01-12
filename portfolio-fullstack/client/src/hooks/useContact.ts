import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { ContactFormData } from '../lib/validations';

interface ContactResponse {
  success: boolean;
  message: string;
}

export const useContactMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<ContactResponse, Error, ContactFormData>({
    mutationFn: async (data: ContactFormData) => {
      const response = await api.post<ContactResponse>('/contact', data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });
};
