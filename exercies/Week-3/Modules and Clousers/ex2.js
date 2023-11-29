const SATRTS_OFF_PRIVATE_MONEY = 500
const Bank = function() {
  let privateMoney = SATRTS_OFF_PRIVATE_MONEY
  const depositCash = function(cash) {
    privateMoney += cash
  }
  const checkBalance = function() {
    console.log(privateMoney)
  }
  return {
    deposit: depositCash,
    showBalance: checkBalance
  }
}
const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance()