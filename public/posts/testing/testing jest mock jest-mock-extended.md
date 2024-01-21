# nodejs testing jest-mock-extended

> mock의 기능을 확장

## install

```bash
npm i -D jest-mock-extended
```

## 사용

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
