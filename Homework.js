// 1.Just used only "a" and "s" i need print "ananas"
console.log("a" + ("as" - 2) + "as");
// 2.function calculate that can perform any arithmetic operations on two numbers (+,-,*,/);
function calculate (num1,num2,action){
    switch(action){
        case '+': return num1 + num2;break;
        case '-': return num1 - num2;break;
        case '*': return num1 * num2;break;
        case '/': return num1 / num2;break;
        default:
            return("wrong action");
    }
    }
    const cal_1 = calculate(2,3,'+');
    const cal_2 = calculate(3,2,'-');
    const cal_3 = calculate(3,3,'*');
    const cal_4 = calculate(9,3,'/');
    console.log(cal_1);
    console.log(cal_2);
    console.log(cal_3);
    console.log(cal_4);
    
   
// 3.write any example for running the following expression fun(5)(10,3);