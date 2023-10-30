import { cookingTime } from './index';
import assert = require('assert');

describe("Egg Tests", () => {
    function doEggTest(eggs: number, time: number): void {
        expect(cookingTime(eggs)).toBe(time);
    }

    test("0 Eggs", () => {
        doEggTest(0, 0);
        doEggTest(3, 5);
        doEggTest(10, 10);
        doEggTest(16, 10);
        doEggTest(32, 20);
    })
})