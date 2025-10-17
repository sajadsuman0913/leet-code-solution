/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(nums){

        this.name = Array.isArray(nums) ? nums : [];
    }
    valueOf (){
        return this.name.reduce((sum , num) => sum + num, 0);
    }
    toString() {
        return`[${this.name.join (",")}]`
    }
}


/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */