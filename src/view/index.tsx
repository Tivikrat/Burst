import React, { FC, useEffect, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyles, defaultTheme } from '../assets';
import { setToggle } from '../bus/client/toggles';

export const AppContainer = styled.div`
    height: 100vh;
    width: 100vw;
`;

export const App: FC = () => {
    const setOnlineStatus = useCallback(() => setToggle({
        type:  'isOnline',
        value: navigator.onLine,
    }), []);

    useEffect(() => {
        setOnlineStatus();
        window.addEventListener('online', setOnlineStatus);
        window.addEventListener('offline', setOnlineStatus);
    }, []);

    return (
        <ThemeProvider theme = { defaultTheme }>
            <GlobalStyles/>
            <AppContainer>
                <Routes/>
            </AppContainer>
        </ThemeProvider>
    );
};
