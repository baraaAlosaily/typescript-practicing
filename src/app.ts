// const anchor=document.querySelector('a')!;

// console.log(anchor.href);

//interfaces
// interface IsPerson{
//     name:string;
//     age:number;
//     speak(a: string):void;
//     spend(a:number):number;  
// }

// const me:IsPerson={
//     name:"baraa",
//     age:20,
//     speak(text:string):void{
//         console.log(text);
//     },
//     spend(amount:number):number{
//         return amount;
//     }
// }

//classes
import {Invoice} from "./classes/invoice.js"
import { ListTemplete } from "./classes/ListTemplete.js";
import {Payment} from "./classes/Payment.js"
import {HasFormatter} from "./interfaces/Hasformated.js";

let docOne:HasFormatter=new Invoice("baraa","good",200);
let docTwo:HasFormatter=new Invoice("Nala","very good",300);

let docs:HasFormatter[]=[];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);




const invOne=new Invoice("baraa","Work on my website",300);
const invTwo=new Invoice("Nahla","Work on Nahla website",500);

let Invioses:Invoice[]=[];
Invioses.push(invOne);
Invioses.push(invTwo);

Invioses.forEach(input=>{
    console.log(input.client,input.amount,input.format())
})
  


const form=document.querySelector('.new-item-form') as HTMLFormElement;
const type=document.querySelector('#type') as HTMLSelectElement;
const toform=document.querySelector('#tofrom') as HTMLInputElement;
const details=document.querySelector('#details') as HTMLInputElement;
const amount=document.querySelector('#amount') as HTMLInputElement;

const ul=document.querySelector('ul')!;
const list=new ListTemplete(ul);

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter;
    if(type.value==="invoice"){
        doc=new Invoice(toform.value,details.value,amount.valueAsNumber);
    }else{
        doc=new Payment(toform.value,details.value,amount.valueAsNumber);
    }

    list.render(doc,type.value,'end');
})











