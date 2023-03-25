let billTotal = document.getElementById('billTotalInput')
let tip = document.getElementById('tipInput')
let personTotal = document.getElementById('perPersonTotal')
let numberOfPeople = document.getElementById('numberOfPeople')


let TotalPeople = Number(numberOfPeople.innerText)


const calculateBill = () => {
  totalBill= Number(billTotal.value)
  tipPercentage = Number(tip.value)/100
  let finalTip = totalBill * tipPercentage
  
 let finalBill= totalBill + finalTip
 
  let totalPerPerson = finalBill/TotalPeople

   personTotal.innerText = `$${totalPerPerson.toFixed(2)}`
  
  }
  

  const increasePeople = () => {
    TotalPeople += 1
    numberOfPeople.innerText = TotalPeople
   
    calculateBill()
   

  }
  
 
  const decreasePeople = () => {
    if(numberOfPeople.innerText <= 1){
      return
    }  

    TotalPeople -= 1
    numberOfPeople.innerText = TotalPeople
    calculateBill()
 
  
  }