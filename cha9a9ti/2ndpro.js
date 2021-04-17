function makeCha9Chou9 (fullname1,emailadresse1,idnumber1,
currentbalance1,phonenumber1,occupation1){
	return {
		fullname : fullname1,
		emailadresse: emailadresse1,
		idnumber : idnumber1,
		currentbalance : currentbalance1,
		phonenumber : phonenumber1,
		occupation : occupation1
	}
}
var cha9chou91 = makeCha9Chou9("david lehmna","david_lehman@hotmail.com",23654849,600,5987456,"accounter")
var cha9chou92 = makeCha9Chou9("christian bale","christian-bale@outlook.com",12315987,700,5986556,"driver")
var cha9chou93 = makeCha9Chou9("alice telly","alicetelly_10@hotmail.fr",99742545,800,5087456,"teacher")
var cha9chou94 = makeCha9Chou9("mark tour","mark-tour@hotmail.com",78945632,1000,2487456,"doctor")
var cha9chou95 = makeCha9Chou9(" tour","tour@hotmail.com",7894,1000,2487456,"doctor")

var cha9chou9s = [cha9chou91,cha9chou92,cha9chou93,cha9chou94,cha9chou95]

 var displayCha9chou9 = function (){
	var cards = document.getElementsByClassName('card')

 	 for(var i =0; i< cha9chou9s.length; i++){
  	 	for(var key in cha9chou9s[i]){
 	 			cards[i].append(key +" "+ " "+" : "+" " +" "+ cha9chou9s[i][key])
 	 	}
 	 }
 }
 displayCha9chou9()

var addnew =function(cha9chou9s,newcha9chou9){
	return cha9chou9s.push(newcha9chou9)
}

var balance =0



function cha9a9aAcc() {
  var account = {}
  account.checkBalance = checkBalance;
  account.deposit = deposit;
  account.balance = balance;
  account.withdraw = withdraw
  return account
}
var withdraw = function(amount){
  if( balance - amount >= 0 ){
    balance = balance - amount
  }
  return balance
}
var  deposit = function (amount){
  balance = balance + amount
  return balance
}
var checkBalance = function (){
  return "here is your money left " + balance

}

var addDeposit = function(amount){
	x = cha9a9aAcc();
	x.deposit(500);
	document.querySelector("#total span").innerText = balance;
}
var addWithdraw = function(amount){
	x=cha9a9aAcc();
	x.withdraw(150);
	document.querySelector("#total span").innerText = balance
}



// var navSlide =()=>{ 
// var burger = document.querySelector('.burger');
// var nav = document.querySelector('.nav-Buttons');
// var navButtons = document.querySelectorAll('.nav-Buttons li');
//  burger.addEventListener('click',()=>{
//  	  nav.classList.toggle('.nav-active');
//  });

//  navButtons.forEach((button,index)=>{
//  	button.style.animation = 'nav-ButtonsFade 0.5s ease forwards ${index / 7}'
 // });
// }
//navSlide()

// $('#home').click(function(){
// 	$('#home div').toggle()
// }
            var email = document.getElementById("Email");
			var missEmail = document.getElementById("missEmail");
			var cb = document.getElementById("CB");
            var missCB = document.getElementById("missCB");
        	

	   
		$("#myform").submit(function(e){
			e.preventDefault();
			var value =$("input") //html collection that we need to loop over to get the value of each element
			// console.log(value)
			
			var newcha9chou9 = makeCha9Chou9 (value[1].value,value[2].value,value[3].value,value[4].value,value[5].value,$("#occupation").val())


			addnew(cha9chou9s, newcha9chou9);

			column = document.createElement('div');
			column.setAttribute('class','column');

			card =  document.createElement('div');
			card.setAttribute('class','card');


			column.appendChild(card);

			document.querySelector(".cards").appendChild(column);
			var cards = document.getElementsByClassName('card')

			console.log(cha9chou9s[cards.length-1])
			for(var key in cha9chou9s[cards.length-1]){
				console.log(key)
 	 			cards[cards.length-1].append(key + " : " + cha9chou9s[cards.length-1][key])
 	 	}
		})
		
	

