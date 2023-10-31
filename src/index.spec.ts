import { cookingTime, likes } from './index';
import assert = require('assert');

describe("Egg Tests", () => {
    function doTest(eggs: number, time: number): void {
        expect(cookingTime(eggs)).toBe(time);
    }

    test("0 Eggs", () => {
        doTest(0, 0);
        doTest(3, 5);
        doTest(10, 10);
        doTest(16, 10);
        doTest(32, 20);
    })
})

describe("Likes Test", () => {
    function doTest(people: string[], output: string): void {
        expect(likes(people)).toBe(output);
    }

    test("No People", () => {
        doTest([], 'no one likes this');
    })

    test("1 Person", () => {
        doTest(["Peter"], 'Peter likes this');
    })

    test("2 People", () => {
        doTest(["Peter", "Alex"], 'Peter and Alex like this');
    })

    test("3 People", () => {
        doTest(["Peter", "Michael", "Alex"], 'Peter, Michael and Alex like this');
    })

    test("More", () => {
        doTest(["Peter", "Michael", "Alex", "Jacob"], 'Peter, Michael and 2 others like this');
    })

    test("Much More", () => {
        doTest(["Peter", "Michael", "Alex", "Jacob", "Michael", "Alex", "Jacob"], 'Peter, Michael and 5 others like this');
    })
})