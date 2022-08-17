import React, { FC, Suspense } from 'react';
import { Public } from './Public';
import { Private } from './Private';
import { useToggles } from '../../bus/client/toggles';

export const Routes: FC = () => {
    const { isLoggedIn } = useToggles();

    return (
        <Suspense fallback = { <div>Spinner</div> }>
            {isLoggedIn
                ? <Private/>
                : <Public/>}
        </Suspense>
    );
};
