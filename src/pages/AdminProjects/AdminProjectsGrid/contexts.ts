import { createContext } from 'react';
import type { GridContextProps } from '../../../common/dndGridFeature/props';

export const AdminProjectsGridContext = createContext<GridContextProps>({
  reorderingState: [],
  draggingElIdState: [],
  draggingOverElIdState: [],
} as unknown as GridContextProps);
