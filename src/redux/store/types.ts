import { UserState } from '../UserSlice';
import { ThemeState } from '../ThemeSlice';

export interface RootState {
  user: UserState;
  theme: ThemeState;
}
