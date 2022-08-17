import { useAppSelector } from '../../../tools/hooks';
import { togglesSlice } from './slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { store } from '../../../init';

export const { setToggle, resetTogglesToInitial } = bindActionCreators(togglesSlice.actions, store.dispatch);
export const useToggles = () => useAppSelector((state) => state.toggles);
