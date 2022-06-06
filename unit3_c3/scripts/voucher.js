
var purchase_data=JSON.parse(localStorage.getItem('purchase_data'))||[]
obj=JSON.parse(localStorage.getItem('user'))||{}
// const h2 = document.querySelector('h2');
// h2.innerText=obj.wallet
const container = document.querySelector('#voucher_list');
var arr=[]
async function get_menu(){
  try{
    let url='https://masai-vouchers-api.herokuapp.com/api/vouchers'
    let res=await fetch(url)
    let list=await res.json()

    console.log(list[0].vouchers)

    display(list[0].vouchers)

  }
  catch(error){console.log(error)}
}
get_menu()
var count= +(localStorage.getItem('count'))||0;
function display(arr){
  arr.forEach(function(ele,i){
    const card = document.createElement('div');
    card.setAttribute('class','voucher')

    const img = document.createElement('img');
    img.src=ele.image

    const h4 = document.createElement('h4');
    h4.innerText=ele.name

    const price = document.createElement('p');
    price.innerText=ele.price


    const button = document.createElement('button');
    button.innerText='BUY'
    button.setAttribute('class','buy_voucher')

    button.addEventListener('click',function(event){
    //   purchase_data.push(ele)
    //   localStorage.setItem('purchase',JSON.stringify(purchase_data))
      count=+count+(+ele.price)
    console.log(count)
    // localStorage.setItem('count',obj.wallet-count)
    localStorage.setItem('count',count)
    if(obj.wallet>count)
    {alert('Hurray! purchase successful');
       purchase_data.push(ele) ;      localStorage.setItem('purchase',JSON.stringify(purchase_data))}
    else{alert('Sorry! insufficient balance');count=+count-(+ele.price); localStorage.setItem('count',count)}
    //   window.location.reload()
        //   purchase_data.push(ele)

    })

    card.append(img,h4,price,button)
    container.append(card)


  })
}


const h2 = document.querySelector('h2');
h2.innerText=obj.wallet
// if(localStorage.getItem('count')){ h2.innerText=localStorage.getItem('count');}
// else {h2.innerText=obj.wallet}
console.log(count)
