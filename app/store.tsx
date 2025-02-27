import { create } from 'zustand';

interface User {
  id: number;
  username: string;
  // Ajoutez d'autres propriétés d'utilisateur ici
}

interface Profile {
  id: number;
  name: string;
  // Ajoutez d'autres propriétés de profil ici
}

interface AppState {
  acceptedProfiles: Profile[];
  connectedUsers: User[];
  acceptProfile: (profile: Profile) => void;
  connectUser: (user: User) => void;
}

const useAppStore = create<AppState>((set) => ({
  acceptedProfiles: [],
  connectedUsers: [],
  acceptProfile: (profile) =>
    set((state) => ({ acceptedProfiles: [...state.acceptedProfiles, profile] })),
  connectUser: (user) => set((state) => ({ connectedUsers: [...state.connectedUsers, user] })),
}));

export default useAppStore;