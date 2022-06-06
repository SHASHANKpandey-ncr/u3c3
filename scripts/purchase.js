var purchase_data=JSON.parse(localStorage.getItem('purchase')) ||[]
console.log(purchase_data)
obj=JSON.parse(localStorage.getItem('user'))||{}
const h2 = document.querySelector('h2');
h2.innerText=obj.wallet

const container = document.querySelector('#purchased_vouchers');
display(purchase_data)
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
      purchase_data.push(ele)
      localStorage.setItem('purchase',JSON.stringify(purchase_data))
      count=count+ele.price
    console.log(count)
    localStorage.setItem('count',count)
    //   window.location.reload()
    })

    card.append(img,h4,price)
    container.append(card)


  })
}
