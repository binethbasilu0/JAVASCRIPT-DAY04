// //console.log("hello");

// //let,var,const

// /*{   
//     var name="John";//it works inside and outside of the block
//     let age="30";//it works only inside the block

//     console.log(name);works
//     console.log(age);//this one works perfectly.cuz the above reason

// }


// console.log(name);works
// console.log(age);//it doesn't work
// */

// /*
// //------------------const----------------
// let age=30;
// console.log(age);

// age=25;
// console.log(age);

// const number=1;
// console.log(number);

// number=2;
// console.log(number);

// */

// /*
// //--------------------arrays-const-------------------

// //let customerList=["Saman","Nimal","Kamal"];
// //console.log(customerList);//it works well .cuz the array values already given while the array is creating

// //customerList="Kumara";
// //console.log(customerList);//array reassign as a value  an it displays Kumara

// const customerList=["Saman","Nimal","Kamal"];
// console.log(customerList);//displays it as ['Saman', 'Nimal', 'Kamal']

// customerList.push("Kumara");//the method called "push" used to extend the array and add new value to extended index
// console.log(customerList);//displays it as ['Saman', 'Nimal', 'Kamal', 'Kumara']


// */

// //----------------array-method--------------------------
// //push method- add an new value into the array

// //const number=[];
// //
// //number.push(1);
// //number.push(2);
// //number.push(3);
// //number.push(4);
// //console.log(number);
// //number.reverse();//the reverse method can use to revers the list of nembers
// //console.log(number);


// //filter

// const productList=[
//     {name:"bun",inStock:true,price:100},
//     {name:"milk",inStock:true,price:200},
//     {name:"egg",inStock:false,price:300},
//     {name:"bread",inStock:true,price:400},
//     {name:"butter",inStock:false,price:500}
// ];

// console.log(productList);


// //--------------Step 1--------------

// ////inStockProducts object array copied productList object array order
// //let inStockProducts= productList.filter(//filter- use for grab object line by line
// //    function(product){//create function and make an object called product
// //        return productFilter(product);
// //    }
// //);
// //
// //function productFilter(product){//build the method called productFilter
// //    return product.inStock==true;//if the conditon is true . it retuns to the product parameter
// //}
// //console.log(inStockProducts);

// //------------Step 2-----------------------

// //let inStockProducts= productList.filter(
// //    function(product){
// //        return product.inStock==true;
// //    }
// //);
// //
// //console.log(inStockProducts);

// //--------Step 3----------------------------

// let inStockProducts=
//         productList.filter  (product =>product.inStock==true);

// //

// console.log(inStockProducts);


// //------------functions--------------------


// //---method 01----

// function addNumbers(num1,num2){
//     return num1+num2;
// }

// console.log(addNumbers(5,10));

// //----method 02------

// let getSum =function(num1,num2){
//     return num1+num2;
// }

// console.log(getSum(5,10));


// //------------method 03-arrow function---------

// let getTotal =(num1,num2)=>{
//     return num1+num2;
// }
// console.log(getTotal(5,10));

// //-----------method 04-annonymous arrow function------------

// (num1, num2) => {
//     return num1 + num2;
// }


// //-----------Arrow function with single parameter------------
//  let txtValue=txtValue=>{
//     return txtValue;
//  }
//  console.log(txtValue("Hello World"));

//  //-----------Arrow function with single parameter -short hand------------

//  let sample= txtValue1 => txtValue1;
//  console.log(sample("Hello World 2"));


// //----------sorting array of objects-------------
// const leterList=["D","A","E","F","C","B","E","N","L","I","O"];
// console.log(leterList);

// const sortArray=leterList.sort();
// console.log(sortArray);


// //------------map method-----------------

// const salaryList=[50000,60000,70000,80000,90000];
// console.log(salaryList);

// let doubleSalary=salaryList.map(salary =>salary*2);
// console.log(doubleSalary);

// console.log(salaryList.map(salary =>salary*2));


// //----------------find method-----------------

// const studentList=[
//     {name:"Saman", age:20, gender:"male"},
//     {name:"Nimal", age:25, gender:"male"},
//     {name:"Kamal", age:30, gender:"male"},
//     {name:"Kamal", age:32, gender:"male"},
//     {name:"Sunil", age:35, gender:"male"},
//     {name:"Kumara", age:40, gender:"male"}
// ];

// let findStudent= studentList.find(student => student.name=="Kamal");
// console.log(findStudent);
// let foundStudent=
//         studentList.filter  (student => student.name=="Kamal");
// console.log(foundStudent);





