// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

function linearSearchIndexOf(arr, val) {
  for (let index = 0; index < arr.length; index++) {
    if(arr[index]===val){
      return index
    }
      
    
  }
  return -1;
}

console.log(linearSearchIndexOf(["pizza", "orange", "yogurt"], 'yogurt'));
// function linearSearchFind(arr, cb) {}

















mocha.setup("bdd");
const { assert } = chai;

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];

describe("linearSearchIndexOf()", () => {
  it("returns index of found item", () => {
    assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
    assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
  });
});


describe.skip("linearSearchFind()", () => {
  it("returns item back if found", () => {
    const kevin = people[0];
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevin"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      linearSearchFind(people, person => person.name === "Kevinn"),
      undefined
    );
  });
});

mocha.run();
