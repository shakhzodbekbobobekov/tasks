// let utishBall : 111
// let tuplaganBall = 177
// let result = utishBall <= tuplaganBall ? `o'ra uqishga kirdizgiz va battar bo'ling` : `Uqishga kira olmadingiz Yaxshi omadli ekansiz janob`
// console.log(result);

// let azolik = 'xa'
// let result = azolik === 'yuq' ? '20% chegirma bor' : '5% chergama bor'
// console.log(result);

// let color1 = 'oq'
// let color2 = 'qora'
// let color = color1;
// color1 = color2
// color2 = color

// console.log(color1);
// console.log(color2);
// let meva = 'kjh';
// switch(meva) {
//     case 'anor':
//         console.log('xa bu shu meva');
//     break;
//     case 'uzum':
//         console.log('yuq');
//     break;
//     case 'bexi':
//         console.log('yuq');
//     break;
//     case String:
//         console.log('unaqa meva yuq');
//     break;
// }

// for( let i=5; i>=1; i-- ){
//     if( i % 2 !== 0)
//     console.log(i);
// }

// let a = 0;
// let natija = a % 2;
// console.log(natija);

// const myArry = [ [false, true], [1, 2], 99, 'yaxshi' ]
// // console.log(myArry[3].indexOf());
// if(typeof myArry == 'string' ){
//     console.log(`Natija: ${myArry.}`);
// }else{ 
//     console.log('xato');
// }

// let data = [ [1,2,3], 'qizil', [4,5,6], true, false ]
// let natija = typeof data == Object
// console.log(data[natija]);

// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// const arr = [];
// let i = 0;
// while( i < data.length) {
//   if (data[i].length > 1 && typeof data[i] == "object") {
//     arr.push(data[i]);
//   }
//   i++
// }

// console.log(arr); 

// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// const arr = [];
// let i = 0;
// while(i < data.length){
//   if (typeof data[i] == "string") {
//     arr.push(data[i]);
//     console.log(data[i]);
//   }
//   i++
// }

// console.log(arr);

// let str = 'Assalomu alaykum, hammaga mening ismim Shaxzodbek'
// console.log(str.charAt(5));

// let myArray = [1, 2, 3]
// console.log();

// function getFirstValue(arr) {
//     console.log('Natija: '+ arr[0]);
// }
// getFirstValue([1, 2, 3])

// getFirstValue([80, 5, 100])

// getFirstValue([-500, 0, 50])

// let arry = [
//     'a', 'b', 'x', [ 6,4,5, [7,7] ]
// ]

// console.log([arry[arry.length - 1][arry.length - 1]]);

// let ismKeladi = prompt("ism kiritin");
// let ismlar = ['Doston', 'Azim', 'Jalol']
// ismlar.push(ismKeladi);
// alert(`Barcha ismlar: ${ismlar}` );
// alert(`Qushilgan ism: ${ismKeladi}`)

// const ismlar = ['Robiya', 'Roziya', 'Salim']

// console.log(ismlar.includes('Robiya')); 

// let myArray = []
// let i = 1;
// while( i <= 100 ){
//     if( (i % 3 == 0) && (i % 5 == 0) ){
//         myArray.push(i)
//         console.log(`FizzBuzz ${i}`);
//     }else if( i % 3 == 0 ) {
//         myArray.push(i)
//         console.log(`Fizz ${i}`);       
//     }else if( i % 5 == 0 ){
//         myArray.push(i)
//         console.log(`Buzz ${i}`);
//     }
//     i++
// }

// let myArray = [ 1, 'Ahmadjon', null, 0, false ]
// let res = []
// for( let i = 0; i <= myArray.length; i++ ){
//     if(typeof myArray[i] == true ) {
//         console.log(res.push([i]));
//     }
// }

// for( let i = 5;  )


// let colorOne = "red";
// let colorTwo = "blue";

// resColor = colorOne
// colorOne = colorTwo
// colorTwo = resColor

// console.log(colorOne);
// console.log(colorTwo);

// let a = 7;
// let b = 19;

// a = a + b //7+19=26
// b = a - b // 26-19=7 
// a = a - b;

// console.log(a);
// console.log(b);


// let myArray = []
// let data = [ [1, 2, 3], 'qizil', [4,5,6], true, false]
// for( let i = 0; i<= data.length; i++ ){
//     if(Array.isArray(data[i]) ){
//         myArray.push(data[i])
//     }
// }
// let myArray = []
// let arrays = [ 1, 2, null, 0, "", false, 'undefined']
// for( let i = 0; i <= arrays.length; i++ ){
//     if(arrays[i] == true){
//         myArray.push(arrays[i])
//     }
// }

// console.log(myArray);


// let i = 0
// while( i <= 10 ){
//     if(i % 2 !== 0 ){
//         i++
//         continue
//     }
//     console.log(i);
//     i++
// }

// let suzKeladi = 'aSNKa'
// console.log(` ${
//     suzKeladi.slice(0,1).toLowerCase() + suzKeladi.slice(1, suzKeladi.length).toUpperCase()
// } `);

// let countr = 'samarqand';
// let result = countr.split('')
// let myArray = []
// for( let i=result.length-1; i>=0; i--){
//     myArray.push(result[i])
// }
// console.log(myArray.join(''));

// let suzKeladi = prompt('Suz kiriting:')
// let suzKeladi = 'salom kln'
// let myArray = suzKeladi.split(' ');
// let pushArray = []
// for( let i = 0; i < myArray.length; i++ ){
//     pushArray.push( (myArray[i].slice(0,1).toLowerCase()) + (myArray[i].slice(1, myArray[i].length).toUpperCase()) )
// }
// alert(pushArray);

//        

// let sonlar = [ 1, 2, 3, -7, -6, 7.2, 1.1, 0.9 ]
// let natija = []
// for( let i = 0; i < sonlar.length; i++ ) {
// if( (sonlar[i] > 0) && (Math.floor(sonlar[i]) === sonlar[i]) ){
//         natija.push(sonlar[i])
//     }
// }
// let sum = 0
// for( let k = 0; k < natija.length; k++ ){
//      sum += natija[k] 
// }
// console.log(`Yig'indi: ${sum}`);

// let matnKeladi = prompt('Matn kiriting:')
// let sum = 0
// let matnKeladi = 'salom salom';
// let arraySplit = matnKeladi.split('')
// for( let i = 0;  i < arraySplit.length; i++){
//     if(  arraySplit[i].includes('a')){
//         sum ++
//     }
// } 
// console.log(sum);
// let myArray = []
// let exapmle = [21.1, "Bexruz", "array", ["I am array"], null, true, 214]
// for( let i = 0; i < exapmle.length; i++ ){
//     myArray.push((typeof exapmle[i]));
// }

// console.log(myArray);

// let sum = 0
// let myText = 'Assalomu alaykum Hurmatli inson. Zik bul ilt'
// let mySplit = myText.split(" ")
// for( let i = 0; i < mySplit.length; i++ ){
//     if( typeof mySplit === 'object' ){
//         sum++
//     }
// }

// console.log(sum);

// let i = 0;
// while( i <= 10 ){
//     if( i === 7 ){
//         break;
//     }
//     i++;
// }
// console.log(i);

// let soz = 'samarqand'
// let natija = [];
// for( let i=soz.length-1; i >= 0; i-- ){
//     natija = natija + soz[i]
// }

// console.log(natija);

// let shaxzodbekArray = [ 'Shaxzodbek', 'Bobobekov', 21, 'Kattakurgan', false ]

// let shaxzodbekObj = {
//     name: 'Shaxzodbek',
//     lastName: 'Bobobekov',
//     age: 21,
//     region: 'Kattakurgan',
//     isMerrid: false,
//     hobby: ['play football', 'reading books', 'typing', 'bla bla...']
// }

// console.log(shaxzodbekObj.hobby[2]);
let todayDate = '04.12.2021'


// let person = {
//     name : 'Shaxzodbek',
//     age: 23
// }

// for( let key in person ){
//     console.log(key);
// }

// let colors = {
//     rang1: 'oq',
//     rang2: 'qora',
//     rang3: 'yashil'
// }
// for ( let index in colors ){
//     console.log(`in: ${index}`);
// }
// for ( let index of colors ){
//     console.log(`of: ${index}`);
// }

// let colors = [ 'oq', 'qora', 'yashil' ]

// // for( let index in colors ){
// //     console.log(colors[index]);
// // }
// let summ = 0
// for( let index of colors ){
//     console.log(index, summ);
//     summ++
// }

// let a = 4
// let b = 5
// if( a > b ){
//     console.log(a);
// }else{
//     console.log(b);
// }

// function getMax( a, b ){
//   return (a > b) ? a : b   
// }

// console.log(getMax( 8, 6 ));

// function isLandspace( width, height ){
//     console.log((width > height));
// }

// isLandspace( 20, 5 )

// const MAXSPEED = 70
// const POINT = 5
// const MAXPOINT = 12


// function checkSpeed(speed){    
//     if( MAXSPEED + POINT > speed ){
//         console.log(`Sizda yaxshi tezlik, shunday davom etavering!`);
//     }else if( speed > MAXSPEED ){
//         let formulaSpeed = (Math.floor((speed - MAXSPEED) / POINT ))
//         if(formulaSpeed < MAXPOINT){
//             console.log(`sizda ortiqcha tezlik bor janob. Sizga ogohlantirish ${formulaSpeed}`);
//         }else if(formulaSpeed >= MAXPOINT){
//             console.log(`Sizning pravangiz olib quyiladi. Sizga ogohlantirish ${formulaSpeed} ta`);
//         }
//     }
// }

// checkSpeed(85)
// console.log(sum(10));
// function sum(limit){
//     let sanoq = 0

//     for(let i = 1; i <= limit; i++ ){
//         if( (i % 3 === 0) || (i % 5 === 0)){
//             sanoq += i
//         }
//     }
//     return sanoq
// }

// let summ = 0
// let ball = [ 81, 74, 86, 59, 77 ]
// for( let i = 0; i < ball.length; i++ ){
//     console.log(summ += i);
// } 

// console.log(summ);

// let circle = {
//     radius: 1,
//     locaton: {
//         x: 1,
//         y:1,
//     },
//     myBoolen : true,
//     draw: function(){
//         console.log('doira function');
//     },
// }

// circle.draw()

// function creatiCercile(radius, x){
//     return {
//             radius,
//             locaton: {
//                 x,
//             },
//             draw(){
//                 console.log('doira function');
//             },
//         }
// }

// let circle1 = creatiCercile(2, 3)
// console.log(circle1);

// function Cirle(radius, x){
//     this.radius = radius,
//     this.darw = function(){
//         console.log('doira');
//     }
// }

// let circle = new Cirle(1)
// circle.color = 'green'
// delete circle.color 
// console.log(circle);

// let greeting = new String('Hello')
// greeting.length
// console.log(greeting.length);
// let odamlar = [
//     {
//         ism : 'Ali',
//         age : 21,
//         region : 'Fergana',
//         job: 'dasturchi'
//     },
//     {
//         ism : 'Vali',
//         age : 22,
//         region : 'Fergana',
//         job: 'dasturchi'
//     },
//     {
//         ism : 'Gani',
//         age : 23,
//         region : 'Fergana',
//         job: 'dasturchi'
//     },
//     {
//         ism :'Alisa',
//         age : 18,
//         region : 'Fergana',
//     }
// ]

// odamlar.forEach( function (odam) {
//     if( odam.job == undefined ){
//        odam.job = 'ishsiz'
//     }
//     console.log(odam);
// })

// let odamlar = [ 'Ali', 'Vali', 'G`ani', 'Nasiba' ]
// let odamlar = [ 
//     {
//         ism : 'xamidullo',
//         age : 21,
//         region : 'Namangan',
//         gander: 'male',
//         job : 'dasturchi'
//     },
//     {
//         ism : 'shaxzodbek',
//         age : 21,
//         region : 'samarqand',
//         gander: 'male',
//         job : 'dasturchi'
//     },
//     {
//         ism : 'alisa',
//         age : 35,
//         region : 'Namangan',
//         gander: 'famele'

//     }
//  ]
// odamlar.forEach( function (odam){
//    if( odam.region == 'samarqand' )
//    console.log(odam);
// } )

// let text = 'Salom qannaysan nima gaplar'
// console.log(
//     text.trimr()
// );

// let parametrlar = {
//     ism : 'Shaxzodbek',
//     familiya: 'Bobobekov',
//     malumot: {
//         age: 23,
//         regio: 'samarqand',
//     },
//     func: function(){
//         console.log('kdjfhls');
//     }
// }

// console.log(parametrlar);

// function practise(one, two, three, four) {
//     return one+two+three+four
    
// }
// console.log(practise( 1,2,3,4 ))

// function numbers (one, two, three, four, five) {
//     this.one = one
//     this.two = two,
//     this.three = three,
//     this.four =four,
//     this.five = five
// }
// let newNumbers = new numbers('1','2','3','4','5')
// console.log(newNumbers);
// let pototo = ['a','b','c']
// for( i = 1; i <= pototo.length; i++ ){
//     console.log( [i] + ' kartoshka' );
// }
// let summa = 0
// for( i = 1; i<= 1978600; i++ ){
//    summa += i
// }

// console.log(summa);

// const user = {
//     ism: 'Shaxzod',
//     age: 21
// }

// const ksdkjys = Object.keys(user)
// for( let i = 0; i < ksdkjys.length; i++ ){
//     console.log(ksdkjys[i]);
// }

// const user = {
//     ism: 'Shaxzod',
//     age: 21
// }

// for( let uzgaruvchi in user ){
//     console.log(uzgaruvchi, user.uzgaruvchi);
// }
 
// let kinolar = [ 'batman', 'spiderman', 'jojo' ]
// for( let uzgaruvchi of kinolar ){
//     console.log(uzgaruvchi, kinolar[uzgaruvchi]);
// }

// const users = [
//    {
//     ism: 'Shaxzod',
//     age: 21,
//    },
//    {
//     ism: 'Ali',
//     age: 22,
//    },
//    {
//     ism: 'Vali',
//     age: 23,
//    }
// ]    

// for( let user of users ){
//     for( let key in user ){
//         console.log(key, user[key]);
//     }
// }


// function showNumbers(limit) {
//     for( i = 0; i <= limit; i++  ){
//         if( i % 2 === 0 ){
//             console.log('EVEN');
//         }else{
//             console.log('ODD');
//         }
//     }
// }
// showNumbers(10);

const marks = [80, 80, 50];

// //Average = 70
// let person = {
//     ism : "Shaxzodbek",
//     age: 21,
// }

// for( let uzgaruvchi in person ){
//     console.log(uzgaruvchi + " : " + person[uzgaruvchi]);
// }

// let colors = ['oq','qora','yashil']
// for( let color in colors ){
//     console.log(color, colors[color]);
// }

// let colors = ['oq','qora','yashil']
// for( let color of colors ){
//     console.log(color, colors[color]);
// }

function greatValue(a, b){
    if( a > b ) {
        console.log(`Katta ${a}`);
        console.log(`Kichik ${b}`);
    }else if( b > a ) {
        console.log(`Katta ${b}`);
        console.log(`Kichik ${a}`);
    }else if( a === b ) {
        console.log(`Teng ${a = b}`);
    }
}
greatValue(10,10)
