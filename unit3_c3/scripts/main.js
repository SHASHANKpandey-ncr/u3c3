
obj=JSON.parse(localStorage.getItem('user'))||{}
function submit(){
  obj={}
  obj.name=document.querySelector('#name').value;
  obj.email=document.querySelector('#email').value;
  obj.address=document.querySelector('#address').value;
  obj.wallet=document.querySelector('#amount').value;

  localStorage.setItem('user',JSON.stringify(obj))
  window.location.reload()
}