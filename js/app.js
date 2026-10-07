//console.log("hello");

//let,var,const

/*{   
    var name="John";//it works inside and outside of the block
    let age="30";//it works only inside the block

    console.log(name);works
    console.log(age);//this one works perfectly.cuz the above reason

}


console.log(name);works
console.log(age);//it doesn't work
*/

/*
//------------------const----------------
let age=30;
console.log(age);

age=25;
console.log(age);

const number=1;
console.log(number);

number=2;
console.log(number);

*/

/*
//--------------------arrays-const-------------------

//let customerList=["Saman","Nimal","Kamal"];
//console.log(customerList);//it works well .cuz the array values already given while the array is creating

//customerList="Kumara";
//console.log(customerList);//array reassign as a value  an it displays Kumara

const customerList=["Saman","Nimal","Kamal"];
console.log(customerList);//displays it as ['Saman', 'Nimal', 'Kamal']

customerList.push("Kumara");//the method called "push" used to extend the array and add new value to extended index
console.log(customerList);//displays it as ['Saman', 'Nimal', 'Kamal', 'Kumara']


*/

//----------------array-method--------------------------
//push method- add an new value into the array

const number=[];

number.push(1);
number.push(2);
number.push(3);
number.push(4);
console.log(number);
number.reverse();//the reverse method can use to revers the list of nembers
console.log(number);
