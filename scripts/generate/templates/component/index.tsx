import React, { FC } from 'react';
import * as S from './styles';
// TODO: import {} from '../../../bus/'

type PropTypes = {
    /* type props here */
}

export const __componentName__(pascalCase): FC<PropTypes> = () => {
    return (
        <S.Container>
            Component: __componentName__(pascalCase)
        </S.Container>
    );
};
