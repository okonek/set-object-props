const chai = require("chai");
const expect = chai.expect;
const setObjectProps = require("./index");

describe("set object props", () => {
    it("should return the same object, but with all of properties having the same value passed as an argument", () => {
            const testObject = {
                a: 1,
                b: 2,
                c: 3
            };

            const result = setObjectProps(testObject, 0);

            Object.keys(testObject).map(x => {
                expect(result).to.have.property(x, 0);
            });
        }
    );

    it("if object has go object nested in it, should return the same object and nested objects, but with all of properties having the same value passed as an argument", () => {
            const testObject = {
                a: 1,
                b: 2,
                c: {
                    d: 3,
                    e: {
                        f: 4
                    }
                }
            };

            const result = setObjectProps(testObject, 0);

            const expectObject = (object, original) => {
                Object.keys(original).map(x => {
                    if((typeof original[x] === "object") && !(original[x] instanceof Array)) {
                        expectObject(object[x], original[x]);
                    }
                    else {
                        expect(object).to.have.property(x, 0);
                    }
                });
            };

            console.log(result);

            expectObject(result, testObject);

        }
    );
});