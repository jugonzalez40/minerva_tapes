import create from 'zustand'
import { User } from '../../types/oauth';

type SpotifyStore = {
    user: User,
    setUser: (user: User) => void
};

// set the refresh_token and so on...
const useSpotifyStore = create<SpotifyStore>((set) => ({
    user: {},
    setUser: (user: User) => set((state) => ({ ...state, user }))
}))

export default useSpotifyStore;