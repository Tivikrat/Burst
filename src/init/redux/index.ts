import { configureStore } from '@reduxjs/toolkit';
import toggles from '../../bus/client/toggles/slice';
// import __entityName__ from '../../bus/__entityName__/slice';

import {
    middleware,
    // sagaMiddleware, /* Uncomment If you use saga middleware */
} from './middleware';

// import { rootSaga } from './rootSaga'; /* Uncomment If you use saga middleware */

export const store = configureStore({
    reducer: {
        toggles,
    // __entityName__,
    },
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;

// sagaMiddleware.run(rootSaga); /* Uncomment If you use saga middleware */
