//kabbee menun of items with individual cost

var mole={
        	banana:2,
            orange:6,
            apple:3,
            bread:1};
// arrays for new customer orders and quantity of each orders
var order=new Array();
var quantity=new Array();
//function to jump to next order after registering into the cashier
function saveorder(){
var purchases='' ;
var orderQuantity=0;
  purchases=document.getElementById("ordertxt").value;
  orderQuantity=document.getElementById("quantitytxt").value;
  order.push(purchases);
  quantity.push(orderQuantity);
  document.getElementById("ordertxt").value='';
  document.getElementById("quantitytxt").value=0;
}
//function to prepare a bill to the customer
function display(){
console.log(order);
console.log(quantity);
}


//function to calculate final payment of each customer

function payment(){
			
	var z = 0 ;
	var pay = 0 ;
for( var i = 0 ; i < order.length; i++){
	var x= '';
		x= order[i];
	console.log(mole[x]);
pay=pay + mole[x]*quantity[z];
     z++;
console.log("final payment is " + pay);
}}
