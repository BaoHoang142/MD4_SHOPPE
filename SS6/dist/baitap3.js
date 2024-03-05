"use strict";
class Order {
    constructor(orderId, customerName, totalAmount) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalAmount = totalAmount;
    }
}
class OrderManager {
    constructor() {
        this.orders = [];
    }
    addOrder(order) {
        this.orders.push(order);
    }
    showOrders() {
        for (let i = 0; i < this.orders.length; i++) {
            console.log(this.orders[i]);
        }
    }
    updateOrder(order) {
        let index = this.orders.findIndex((item) => item.orderId === order.orderId);
        if (index !== -1) {
            this.orders[index] = order;
        }
    }
    searchOrder(id) {
        let index = this.orders.findIndex((item) => item.orderId === id);
        if (index !== -1) {
            return this.orders[index];
        }
        else {
            return -1;
        }
    }
}
let newOrder = new Order(1, "hoang", 2000);
let newOrderManager = new OrderManager();
newOrderManager.addOrder(newOrder);
newOrderManager.showOrders();
