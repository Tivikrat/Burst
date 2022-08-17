import React, { FC } from 'react';
import { ErrorBoundary } from '../../components';
import * as S from './styles';
// TODO: import {} from '../../../bus/'

type PropTypes = {
    /* type props here */
}

const __pageName__(pascalCase): FC<PropTypes> = () => {
    return (
        <S.Container>
            Page: __pageName__(pascalCase)
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <__pageName__(pascalCase) />
    </ErrorBoundary>
);
