"use strict";
// Enums -> group related constants
Object.defineProperty(exports, "__esModule", { value: true });
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["InProgress"] = 1] = "InProgress";
    OrderStatus[OrderStatus["Completed"] = 2] = "Completed";
})(OrderStatus || (OrderStatus = {}));
function processOrder(orderStatus) {
    if (orderStatus === OrderStatus.Pending) {
        console.log('order is pending');
    }
    else if (orderStatus === OrderStatus.InProgress) {
        console.log('order is in progress');
    }
    else {
        console.log('order is completed');
    }
}
processOrder(OrderStatus.Pending);
processOrder(OrderStatus.Completed);
exports.default = null;
