import { Action } from '@reduxjs/toolkit';
import { put, call } from 'redux-saga/effects';
import { setToggle } from '../../bus/client/toggles';
import { customFetch } from './customFetch';
import { TogglesKeys } from '../../bus/client/toggles/slice';

export type FetchOptions = {
    fetch: () => ReturnType<typeof fetch>;
    successStatusCode?: number;
}

type OptionsType<SuccessData, ErrorData> = {
    fetchOptions: FetchOptions;
    callAction?: Action;
    toggleType?: TogglesKeys;
    tryStart?: Function;
    success?: (successData: SuccessData) => void;
    tryEnd?: (successData: SuccessData) => void;
    catchStart?: (errorData: ErrorData) => void;
    error?: (errorData: ErrorData) => void;
    catchEnd?: (errorData: ErrorData) => void;
    finallyStart?: Function;
    finallyEnd?: Function;
};

export function* makeRequest<SuccessData, ErrorData = {}>(options: OptionsType<SuccessData, ErrorData>) {
    const {
        fetchOptions,
        callAction,
        toggleType,
        tryStart, tryEnd,
        catchStart, catchEnd,
        finallyStart, finallyEnd,
        success, error,
    } = options;
    try {
        if (tryStart) {
            yield tryStart();
        }
        if (toggleType) {
            yield setToggle({
                type:  toggleType,
                value: true,
            });
        }
        const result: SuccessData = yield call(() => customFetch(fetchOptions));
        if (success) {
            yield success(result);
        }
        if (tryEnd) {
            yield tryEnd(result);
        }

        return result;
    } catch (errorData: ErrorData | any) {
        if (catchStart) {
            yield catchStart(errorData);
        }
        if (error) {
            yield error(errorData);
        }
        if (callAction) {
            yield put(callAction);
        }
        if (catchEnd) {
            yield catchEnd(errorData);
        }

        return errorData;
    } finally {
        if (finallyStart) {
            yield finallyStart();
        }
        if (toggleType) {
            yield setToggle({
                type:  toggleType,
                value: false,
            });
        }
        if (finallyEnd) {
            yield finallyEnd();
        }
    }
}
