// Enums -> group related constants

enum OrderStatus {
  Pending = 10,
  InProgress,
  Completed,
}

enum FontSizes {
  Bold = 400,
  Bolder = 700,
}

/*
  {
    10: 'Pending',
    'Pending': 10,
    11: 'In Progress',
    'In Progress': 11,
    12: 'Completed',
    'Completed': 12
  }
*/

function processOrder(orderStatus: OrderStatus) {
  if (orderStatus === OrderStatus.Pending) {
    console.log('order is pending');
  } else if (orderStatus === OrderStatus.InProgress) {
    console.log('order is in progress');
  } else {
    console.log('order is completed');
  }
}

processOrder(OrderStatus.Pending);
processOrder(OrderStatus.Completed);

console.log(OrderStatus);
console.log(OrderStatus[10]);
console.log(OrderStatus['Pending']);

export default null;
