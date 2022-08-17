import React from 'react';
import { ErrorBoundary } from '../../components';
import { HelloBurst } from '../../elements';
import { Container } from './styles';

export default function Root() {
    return (
        <ErrorBoundary>
            <Container>
                <HelloBurst/>
            </Container>
        </ErrorBoundary>
    );
}
