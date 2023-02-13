document.getElementById('deposit-btn').addEventListener('click', function(){
    const inputDeposit = document.getElementById('input-deposit');
    const newDepositString = inputDeposit.value;
    const newDeposit = parseFloat(newDepositString);

    // current total deposit
    const totalDeposit = document.getElementById('total-deposit');   
    const previousDepositMoneyString = totalDeposit.innerText ;
    const previousDepositMoney = parseFloat(previousDepositMoneyString);

    // previousDepositMoney = newDeposit
    const currentDepositTotal = previousDepositMoney + newDeposit;
    totalDeposit.innerText = currentDepositTotal;
    // add total deposit money in balance
    const previousBalance = document.getElementById('balance');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceMoney = parseFloat(previousBalanceString);
    const currentBalance = previousBalanceMoney + newDeposit; 
    previousBalance.innerText = currentBalance ;
    // it make clear input place after  

    inputDeposit.value = '';
});

// withdraw money and total balance after withdraw


document.getElementById('withdraw-btn').addEventListener('click', function(){
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawString = inputWithdraw.value;   
    const newWithdraw = parseFloat(inputWithdrawString);
    
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawString = totalWithdraw.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);
    
    const currentWithdrawTotal = previousWithdraw + newWithdraw ;
    totalWithdraw.innerText = currentWithdrawTotal;

    const withdrawBalance = document.getElementById('balance');
    const withdrawBalanceString = withdrawBalance.innerText;
    const currentWithdrawBalance = parseFloat(withdrawBalanceString);

    const currentBalance = currentWithdrawBalance - newWithdraw ;
    withdrawBalance.innerText = currentBalance ;

    inputWithdraw.value ='';
});