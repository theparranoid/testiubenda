import deepEqual from "@/helpers/deepEqual";

describe('deepEqual', () => {
    it('should show objects equality', () => {
        const testObj1 = {
            abc: 1,
            cba: {
                cba: 2
            }
        };
        const testObj2 = {
            abc: 1,
            cba: {
                cba: 2
            }
        }
        const result = deepEqual(testObj1, testObj2);
        expect(result).toBeTruthy();
    })
})