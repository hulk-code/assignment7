document.getElementById('calculate-bitton').addEventListener('click',function(){

   const foodCost=document.getElementById('food-Cost');
   const foodCoststring=foodCost.value ;
    const foodCostint=parseInt(foodCoststring);

   console.log(foodCostint)
   
   const rentCost=document.getElementById('rent-Cost');
   const rentCoststring=rentCost.value ;
    const rentCostint=parseInt(rentCoststring);

   console.log(rentCostint)
   const clothCost=document.getElementById('colth-Cost');
   const clothCoststring=clothCost.value ;
    const clothCostint=parseInt(clothCoststring);

   console.log(clothCostint)

   const allCost=foodCostint+rentCostint+clothCostint;
   const totalExpence=document.getElementById('total-expance')
    totalExpence.innerText=allCost;

     const myIncome=document.getElementById('my-income')
     const myIncomestring=myIncome.value;
     const myAllincome=parseInt(myIncomestring)
     const totalBalancee=document.getElementById('total-balance');
   
     
        const balance=myAllincome-allCost;
        totalBalancee.innerText=balance;
        document.getElementById('saving-button').addEventListener('click',function(){
         const myIncome=document.getElementById('my-income')
         const myIncomestring=myIncome.value;
         const myAllincome=parseInt(myIncomestring);
         
                    const savingButton=document.getElementById('saving-amount');
                    const savingButtonstring=savingButton.value;
                    const finalSavingAmount=parseFloat(savingButtonstring);
                    const save= myAllincome * finalSavingAmount ;
                    console.log(save)
                    const savingAccount=document.getElementById('saving-account');
                    savingAccount.innerText=save;
                    const totalBalancee=document.getElementById('total-balance');
                    const balance=myAllincome-allCost;
                    totalBalancee.innerText=balance;
                    const lastremainblanc= balance-save;
                    
                    const lastBalance=document.getElementById('last-balance');
                    lastBalance.innerText=lastremainblanc;
   
     




                  })


        



   




   

})