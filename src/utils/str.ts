// js Object implements
let o1: any = {};
o1.readme = function(){
    console.log('o1 执行 readme');
}


let o2 = Object.create(o1);
console.log('Object1:', o1);
console.log('Object2:', o2);
export {};