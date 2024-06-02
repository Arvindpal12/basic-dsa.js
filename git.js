//## traversing in array

// let arr=[1,3,2,4,6,7]
// for(let i=0; i<arr.length; i++){
//     document.write(`Array${i} is ${arr[i]}<br>`)
// }

//accesing a value
// let arr=[1,3,2,4,6,7]
// let x=3
// document.write(arr[3])

//## delite a value in array

// let data=[1,3,2,4,64,42,44]
// let positoin =4;
// for(let i=positoin ; i<=data.length-1; i++){
//     data[i]=data[i+1]
// }
// data.length=data.length-1
// console.log(data)

//##inserstoin in array

// let data=[2,3,1,434,67,8]
// let newel=4;
// let positoin=3
// for(let i=data.length-1; i>=0; i--){
//     if(i>=positoin){
//         data[i+1]=data[i]
//         if(i==positoin){
//             data[i]=newel
//         }
//     }
// }
// console.log(data)

//## search in arr 

// let arr=[1,32,43,65,7,9]
// let find=65;
// let index=undefined
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===find){
//         index=i
//         break;
//     }
// }
// console.log(index)


//##sorting in array

// let data=[1,4,2,57,44,785,33,0]
// for(let i=0; i<data.length; i++){

// for(let j=0; j<data.length; j++){
//     if(data[j]>data[j+1]){
//         let temp=data[j]
//         data[j]=data[j+1]
//         data[j+1]=temp

//     }  

//     }

// }
// console.log(data)

//##marging of two array

// let data=[1,2,3,4,5]
// let data2=[6,7,8,9,10]
// let data3=[]
// for(let i=0; i<data.length; i++){
//     data3[i]=data[i]
// }
// for(let i=0; i<data2.length; i++){
//     data3[data.length+i]=data2[i]
// }
// console.log(data3)

//## insertoin sort in  array

// let data = [21, 3, 56, 878, 5, 7, 8]
// function insersoinsort(arr) {
//     let i, current, j;
//     for (let i = 0; i < data.length; i++) {
//         current = data[i]
//         j = i - 1
//         while (j >= 0 && data[j] < current) {
//             data[j + 1] = data[j]
//             j = j - 1
//         }
//         data[j + 1] = current
//     }
// }

// insersoinsort(data)
// console.log(data)

//##selectoin sort 

// let data = [13, 33, 24, 66, 87]
// function selectoinsort(items) {
//     let midid;
//     for (let i = 0; i < data.length; i++) {
//         midid = i;
//         for (let j = i + 1; j < data.length; j++) {
//             if (data[j] < data[midid]) {
//                 midid = j

//             }
//         }
//         let temp = data[i]
//         data[i] = data[midid]
//         data[midid] = temp
//     }

// }
// selectoinsort(data)
// console.log(data)

//## liniar search in itrative mode

// let data=[1,3,23,55,67,88]
// let find=55
// let start=0
// let end=data.length-1
// let pos=undefined
// for(let i=0; i<data.length; i++){
//     if(data[i]==find){
//         pos=i;

//     }else if(data[i]<find){
//         start=i+1
//     }else{
//         end=i-1
//     }
// }
// console.log(pos)

//## binary search ,,always applied a sorting array
// searching element using binary search 

// let data=[1,22,333,444,543,665]
// let find=665;
// let start=0;
// let end=data.length-1;
// let pos=undefined
// while(start<=end){
//     let mid=Math.floor((start+end)/2)
//     if(data[mid]==find){
//         pos=mid;
//         break;
//     }else if(data[mid]<find){
//         start=mid+1
//     }else{
//         end=mid-1
//     }


// }
// console.log(pos)

//## find the factorial

// function factorial(items){
//     if(items===0){
//         return 1
//     }
//     return items*factorial(items-1)
// }
// let data=3;
// console.log(factorial(data)) 

//## Palandrome str.
// palndrome means there are write a word same mening of read opposite side a word

// function Palandrome(data){
//     let start=0;
//     let end=data.length-1;
//     let result=true
//     while(start<end){
//         if(data[start]!=data[end]){
//             result=false
//         }
//         start++;
//         end--
//     }
//     return result
// }


// let str="arvind"
// console.log(Palandrome(str))

//## marging a two arry with the help of loop 

// let data1=[1,2,3]
// let data2=[4,5,6]
// let data3=[]
// let d1=0;
// let d2=0;
// let d3=0;
// while(d1<data1.length||d2<data2.length){
//     if(data1[d1]<data2[d2]){
//         data3[d3]=data1[d1]
//         d1++
//     }else{
//         data3[d3]=data2[d2]
//         d2++
//     }
//     d3++
// }
// while(d1<data1.length){
//     d1++
//     d3++
// }
// console.log(data3)

//## recursoin  in array

// function apple(x){
//     console.log(x)
//     if(x<10){

//         apple(x+1)
//     } 


// }
// let data=0;
// apple(data)

// ## inderect recursoin in array
// vo functoin hota jisme ham do fuctoin bnate h or usme ak dussre functoin ko ak dusre me use kr 
// sakta h  ham use ker sakte h 

// let money = 100;
// let totalApple = 0;
// function byApple(x) {
//     if (x > 0) {
//         console.log("i have ", x, "RS", totalApple)
//         bymore(x);
//     } else {
//         console.log("i don't have more money ", totalApple)
//     }

// }
// function bymore(x) {
//     totalApple++;
//     byApple(x - 5)
// }
// byApple(money)







