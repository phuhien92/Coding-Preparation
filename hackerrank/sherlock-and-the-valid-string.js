/ Complete the isValid function below.
/*
aabbcd => invalid => only remove 1
abccbaa
{ a: 2, b: 2, c:1, d:1 }
[2,2,1,1] => [1,4,4] => 
[2,2,2,2] => valid
[2,2,4] => invalid
[2,2,1,1] => invalid
*/
function isValid(s) {    
    if (s.length <= 2) return "YES";
    
    let map = {};
    s.split('').forEach(item => map[item] = map[item] ? map[item]+1:1);
    // => {"a":1,"b":2,"c": 2}
    
    let output = "NO";
    let values = Object.values(map);
    values.sort(); // [1,2,2] or [2,2,2] or [1,1,1,2] or [1,1,1,2,5,5,5]

    let [first, second,] = values;
    let [secondLast, last] = values.slice(-2);
    
    // all having same frequencies
    // having 1 num different from others
    // remove one char from the most frequencial char
    if (first === last) return "YES";
    if (first === 1 && second === last) return "YES";
    if (first === secondLast && last - secondLast === 1) return "YES";
    return output;
}
