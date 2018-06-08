# 数组对象去重介绍

```
let arr = [
    {name: 'tom', age: 15},
    {name: 'jack', age: 18},
    {name: 'tom', age: 20}
]

console.log('before arr---->', arr);
var hash = {};
arr = arr.reduce(function(item, next) { 
    hash[next.name] ? '' : hash[next.name] = true && item.push(next); 
    return item 
}, [])

console.log('after arr ----->', arr)
```