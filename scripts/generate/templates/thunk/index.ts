import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { useDispatch } from '../../../tools/hooks';
import { fetch__entityName__(pascalCase) } from './fetch__entityName__(pascalCase)';
import * as types from '../types';

export const extraReducers = (builder: ActionReducerMapBuilder<types.__entityName__(pascalCase)State>) => {
    builder /* CASES */
        .addCase(fetch__entityName__(pascalCase).fulfilled, (/* state => */__, action) => {
            return action.payload;
        });
};

export const use__entityName__(pascalCase)Thunk = () => {
    const dispatch = useDispatch();

    return {
        fetch__entityName__(pascalCase): () => void dispatch(fetch__entityName__(pascalCase)()),
    };
};
