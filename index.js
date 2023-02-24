var customerName = 'bob';
var bestCustomer

var upperCaseCustomerName = () => {
 customerName = customerName.toUpperCase()
}

var setBestCustomer = () => {
bestCustomer = 'not bob'
}

var overwriteBestCustomer = () => {
    bestCustomer = 'maybe bob';
  }

  const leastFavoriteCustomer = 'dave'

  var changeLeastFavoriteCustomer = () => {
    leastFavoriteCustomer = 'Sam'
  }