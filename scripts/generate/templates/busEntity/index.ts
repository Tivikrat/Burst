// import { useEffect } from 'react';
import { useAppSelector } from '../../tools/hooks';
// TODO: Choose one technology
// import { use__entityName__(pascalCase)Saga } from './saga';
// import { use__entityName__(pascalCase)Thunk } from './thunk';
// TODO: Add __entityName__ slice reducer to ./src/init/redux/index.ts

export const use__entityName__(pascalCase) = () => {
    // TODO: Choose one technology
    // Saga api hook
    // const { fetch__entityName__(pascalCase) } = use__entityName__(pascalCase)Saga();
    // Thunk api hook
    // const { fetch__entityName__(pascalCase) } = use__entityName__(pascalCase)Thunk();

    // useEffect(() => {
    //     fetch__entityName__(pascalCase)();
    // }, []);

    return useAppSelector((state) => state.__entityName__);
};
