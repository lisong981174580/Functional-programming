#### 函数式编程

#####   一、概念

> 函数式编程关心数据的映射，命令式编程关心解决问题的步骤,这里的映射就是数学上「函数」的概念——一种东西和另一种东西之间的对应关系。

> 你可以了解下面向对象 http://www.cnblogs.com/sanshi/archive/2009/07/08/1519036.html

##### 二、函数的分类

1.纯函数

> 纯函数的定义是，对于相同的输入，永远会得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。   

```
var arr = [1,2,3,4,5];
// Array.slice是纯函数，因为它没有副作用，对于固定的输入，输出总是固定的
// 可以，这很函数式
xs.slice(0,3);
//=> [1,2,3]
xs.slice(0,3);
//=> [1,2,3]

// Array.splice是不纯的，它有副作用，对于固定的输入，输出不是固定的
// 这不函数式
xs.splice(0,3);
//=> [1,2,3]
xs.splice(0,3);
//=> [4,5]
xs.splice(0,3);
//=> []
```

在函数式编程中，我们想要的是 **slice **这样的纯函数，而不是 **splice**这种每次调用后都会把数据弄得一团乱的函数。

##### 三、优点

1.纯函数不仅可以有效降低系统的复杂度，还有很多很棒的特性，比如可缓存性

```
import _ from 'lodash';
var sin = _.memorize(x => Math.sin(x));

//第一次计算的时候会稍慢一点
var a = sin(1);

//第二次有了缓存，速度极快
var b = sin(1);

```

##### 四、函数的柯里化

> 函数柯里化（curry）的定义很简单：传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

比如对于加法函数 **var add = (x, y) =>　x + y** ，我们可以这样进行柯里化：

```
//比较容易读懂的ES5写法
var add = function(x){
    return function(y){
        return x + y
    }
}

//ES6写法，也是比较正统的函数式写法
var add = x => (y => x + y);

//试试看
var add2 = add(2);
var add200 = add(200);

add2(2); // =>4
add200(50); // =>250
```

对于加法这种极其简单的函数来说，柯里化并没有什么大用处。

> 事实上柯里化是一种“预加载”函数的方法，通过传递较少的参数，得到一个已经记住了这些参数的新函数，某种意义上讲，这是一种对参数的“缓存”，是一种非常高效的编写

```
import { curry } from 'lodash';

//首先柯里化两个纯函数
var match = curry((reg, str) => str.match(reg));
var filter = curry((f, arr) => arr.filter(f));

//判断字符串里有没有空格
var haveSpace = match(/\s+/g);

haveSpace("ffffffff");
//=>null

haveSpace("a b");
//=>[" "]

filter(haveSpace, ["abcdefg", "Hello World"]);
//=>["Hello world"]
```





