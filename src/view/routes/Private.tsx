import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import * as Pages from '../pages';
import * as book from './book';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Pages.Root/> }
                path = { book.ROOT }
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = { book.ROOT }
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
