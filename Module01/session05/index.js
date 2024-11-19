// [12,5,23,18,4,45,32]
function highestAverage(arr) {
    var result = {
        highest: arr[0],
        lowest: arr[0], // calon nilai terkecil dari item didalam array 
        average: 0
    };
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        // bandingkan nilai tekecil yg kita punya dengan item 
        // 4 < 2 
        if (result['lowest'] > arr[i]) {
            result['lowest'] = arr[i];
        }
        if (result['highest'] < arr[i]) {
            result['highest'] = arr[i];
        }
        total += arr[i];
    }
    result["average"] = Math.round(total / arr.length);
    return result; // { highest:0, lowest:4, average:0}
}
console.log(highestAverage([12, 5, 23, 18, 4, 45, 32]));
function myJoin(arr) {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (i == arr.length - 2) {
            result += arr[i] + ', and ';
        }
        else if (i == arr.length - 1) {
            result += arr[i];
        }
        else {
            result += arr[i] + ',';
        }
    }
    return result;
}
console.log(myJoin(["Aries", "Dimas", "Yudhistira"]));
function addArray(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var temp = arr1[i] + arr2[i];
        result.push(temp);
    }
    return result;
}
console.log(addArray([1, 2, 3], [1, 2, 3]));
function isFindAdd(arr, num) {
    var isFind = false;
    for (var i = 0; i < arr.length; i++) {
        // let isFind false 
        // check if num is in arr
        if (num == arr[i]) {
            isFind = true;
        }
    }
    if (isFind == false) {
        arr.push(num);
    }
    return arr;
    /*
    isFind == false
        arr.push(num)

    return arr

    */
}
console.log(isFindAdd([1, 2, 3, 4], 7));
console.log(isFindAdd([1, 2, 3, 4], 2));
function addOnlyNumber(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            total += arr[i];
        }
    }
    return total;
}
function addPrimitiveData(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "object") {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(addPrimitiveData([{}, null, undefined, [], [1, 2, 3], 1, 2, { name: 'dimas' }]));