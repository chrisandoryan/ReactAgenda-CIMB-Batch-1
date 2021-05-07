import { dateToHuman } from "../../helpers/dateHelper";

// npm run test

describe("Mathematical Sanity Check", () => {
    test("3 + 2 should be 5", () => {
        expect(3+2).toBe(5);
    });
});

describe("Date Helper Functions", () => {
    test("05-07-2021 should be Friday, 07 May 2021", () => {
        let date = "05-07-2021";
        expect(dateToHuman(date)).toBe("Friday, 7 May 2021");
    });
    test("05/07/2021 should be Friday, 07 May 2021", () => {
        expect(dateToHuman("05/07/2021")).toBe("Friday, 7 May 2021");
    });
})