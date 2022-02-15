// Create a function that when given 2 sorted arrays, it returns
// a new sorted array that contains both elements of input arrays
// --- Examples
// merge([1,3], [2,4]) === [1,2,3,4]
// merge([1,5], [4,6,7]) === [1,4,5,6,7]
// merge([4,6,7], [1,5]) === [1,4,5,6,7]

function merge(sortedArr1, sortedArr2) {
  let arr=[];
  arr = [...arr.concat(sortedArr1)]
  arr = [...arr.concat(sortedArr2)];
  
  for(var i = arr.length; i>0 ;i--){
        for(let j =0;j< i;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1] = temp
            }
        }
    }
  return arr
}

// console.log(merge([1,4,3],[2,5,6]))

















mocha.setup("bdd");
const { assert } = chai;

describe("merge()", () => {
  it("merge([1, 3], [2, 4]) returns [1, 2, 3, 4]", () => {
    assert.deepEqual(merge([1, 3], [2, 4]), [1, 2, 3, 4]);
  });
  it("merge([1, 5], [4, 6, 7]) returns [1, 4, 5, 6, 7]", () => {
    assert.deepEqual(merge([1, 5], [4, 6, 7]), [1, 4, 5, 6, 7]);
  });
  it("merge([4, 6, 7], [1, 5]) returns [1, 4, 5, 6, 7]", () => {
    assert.deepEqual(merge([4, 6, 7], [1, 5]), [1, 4, 5, 6, 7]);
  });
  it("merge([], []) returns []", () => {
    assert.deepEqual(merge([], []), []);
  });
  it("merge returns new array and does NOT modify input arrays", () => {
    const a1 = [1, 3];
    const a2 = [2, 4];
    merge(a1, a2);
    assert.deepEqual(a1, [1, 3]);
    assert.deepEqual(a2, [2, 4]);
  });
});

mocha.run();
