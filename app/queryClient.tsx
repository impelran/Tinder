import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Désactive le refetch automatique lors du focus de la fenêtre
      retry: false, // Désactive les tentatives automatiques en cas d'erreur
    },
  },
});

export default queryClient;