# nodejs testing jest-mock-extended

> jest.mock 함수와 비슷하지만 타입 안전성을 보장하고 mockDeep 같은 기능을 지원

## install

```bash
npm i -D jest-mock-extended
```

## usage

```js
import { mock } from 'jest-mock-extended';

interface PartyProvider {
   getPartyType: () => string;
   getSongs: (type: string) => string[]
   start: (type: string) => void;
}

describe('Party Tests', () => {
   test('Mock out an interface', () => {
       const mock = mock<PartyProvider>();
       mock.start('disco party');

       expect(mock.start).toHaveBeenCalledWith('disco party');
   });


   test('mock out a return type', () => {
       const mock = mock<PartyProvider>();
       mock.getPartyType.mockReturnValue('west coast party');

       expect(mock.getPartyType()).toBe('west coast party');
   });

    test('throwing an error if we forget to specify the return value')
        const mock = mock<PartyProvider>(
            {},
            {
                fallbackMockImplementation: () => {
                    throw new Error('not mocked');
                },
            }
        );

        expect(() => mock.getPartyType()).toThrowError('not mocked');
    });
```
