import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../init';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
