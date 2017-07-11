
// 版本二
// define(['js/a','js/b','js/c'],function(o,o1,o2){
//     alert('这是main输出的代码');
//     console.log(o1);
//     console.log(o2);
//     console.log(o2.name);
//     return o2.age;
// })

// 版本三
requirejs.config({
    baseUrl: '/模块化/require的使用',
    paths:{
        'a':'js/a',
        'b':'js/b',
        'c':'js/c',
        'cc':'test1/aa/bb/cc',
        'ff':'test2/dd/ee/ff'
    }
})

require(['a','b','c','cc','ff'],function(a,b,c){
    alert('这是main输出的代码');
    console.log(b);
    console.log(c);
    console.log(c.name);
    return c.age;
})