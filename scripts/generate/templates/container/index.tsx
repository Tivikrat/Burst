import React, { FC } from 'react';
import * as S from './styles';
// TODO: import {} from '../../../bus/'

type PropTypes = {
    /* type props here */
}

export const __containerName__(pascalCase): FC<PropTypes> = () => {
    return (
        <S.Container>
            Container: __containerName__(pascalCase)
        </S.Container>
    );
};
