/**
 * class 语法
 */

// -------------------------------------------------------
/**
 * JS语言的传统方法是通过构造函数，
 * 定义并生成新对象，是一种基于原型的面向对象系统。
 * 这种写法跟传统的面向对象语言（比如C++和Java）差异很大，
 * 很容易让新学习这门语言的人感到困惑。所以，4
 * 在ES6中新增加了类的概念，可以使用 class 关键字声明一个类，
 * 之后以这个类来实例化对象。
 */


//  es5 中基于原型的面向对象对象系统
// const Louis = function(a, b) {
//     this.a = a;
//     this.b = b;
//     return this;
// };

// Louis.prototype = {
//     constructor: Louis,
//     print: function() {
//         console.log(this.a + ' ' + this.b);
//     }
// };

// const louis = new Louis('hello', 'world').print();

class Louis {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        return this;
    }
    print() {
        console.log(this.a + ' ' + this.b);
    }
};

const louis = new Louis('hello', 'world').print();

console.log(typeof Louis); // function


// 1 Louis中的constructor方法是构造方法，
// this关键字则代表实例对象。也就是说，
// ES5的构造函数Louis，对应ES6的Louis这个类的构造方法。

// 2 Louis这个类除了构造方法，
// 还定义了一个print方法。
// 注意，定义“类”的方法的时候，
// 前面不需要加上function这个关键字，
// 直接把函数定义放进去了就可以了。
// 另外，方法之间不需要逗号分隔，加了会报错。

// 3 构造函数的prototype属性，
// 在ES6的“类”上面继续存在。
// 而且类的所有方法都定义在类的prototype属性上面。
// console.log(Louis.prototype);

// 4 定义在类中的方法都是不可以枚举的。
// console.log(Object.keys(Louis.prototype));
// 上面打印出来的是空数组 但是明明我们在类中定义了
// 这个方法

// 5 constructor方法是类的默认方法，
// 通过new命令生成对象实例时，
// 自动调用该方法。一个类必须有constructor方法，
// 如果没有显式定义，一个空的constructor方法会被默认添加。
// 这一点特别像函数的return 写不写都会有返回值
// class P {};
// const p = new P();
// console.log(P);

// 6 生成类的实例对象的写法，
// 与ES5完全一样，也是使用new命令。
// 如果忘记加上new，像函数那样调用Class，将会报错。
// P();