//******** watch code aur chai vedio important





//important


















//
const coding = [`cpp`,`java`,`c#`,`javascript`];

//important foreach does't returns values
//foreach doesn't returns values 

//when you open scope then you must use return keyword
 
const ans =  coding.forEach((items)=>{
    console.log(items);
    return items
});

console.log(ans);


//filter => extensively usedd 

const numArray = [1,2,3,4,5,6,8,9,99,88];

const newArray = numArray.filter((items)=>items>5); //here you are not using scope so no need to write return keyword
console.log(newArray);

const anotherArray  = numArray.filter((items)=>{
    return items>5;

})

console.log(anotherArray);

//lets practise on filters

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  //good practice use in real time applications

  const historyBooks = books.filter((book)=> book.genre===`History` && book.edition===1996);
  console.log(historyBooks);

  const scienceBooks = books.filter((book)=>{
const ans = book.genre===`Science`;
    return ans;
  })

  console.log(scienceBooks);


  // ************************ MAPS ***************************

  const numbers = [1,2,3,4,5,6,7];
  const solutions = numbers.map((item)=> item*10);
  console.log(solutions);

  // chaining

  //chaing is something where we can use multiple maps ,filter and reduce at the same time

  const chaining = numbers.map((item)=> item*10).filter((item)=>item>55);
  console.log(chaining);


  //reuce => used in ecomerce sites

  const totalitems= [20,40,50,80,88];

//and as the iteration goes on the accumlator stores the total that why reduce is being used in Ecomerce apps
  const totalAmount = totalitems.reduce((accumulator,currentValue)=>{
        return accumulator+currentValue;
  },0)//0=> it is the accumulator first value 

  console.log(totalAmount);

  //let's do it

  const customerCart =[
    {
        id:1,
        product:'iphone',
        price:50000
    },
    {
        id:2,
        product:'mac',
        price:80000
    },
    {
    id:3,
    product:'ipad',
    price:100000
    }

  ]

  const amountToPay = customerCart.reduce((accumaltor,currentValue)=>{
   return accumaltor+currentValue.price;
  } ,0);

  console.log(amountToPay);