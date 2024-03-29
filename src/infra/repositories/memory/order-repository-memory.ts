import { OrderRepository } from "@/domain/contracts/repositories";
import { Order } from "@/domain/entities";

export class OrderRepositoryMemory implements OrderRepository {
  public orders: Order[];

  constructor() {
    this.orders = [];
  }

  save(order: Order): Promise<void> {
    this.orders.push(order);
    return Promise.resolve();
  }

  get(code: string): Promise<Order> {
    const order = this.orders.find(order => order.getCode() === code);
    if (!order) throw new Error("Order not found");
    return Promise.resolve(order);
  }

  count(): Promise<number> {
    return Promise.resolve(this.orders.length);
  }


  clear(): Promise<void> {
    this.orders = [];
    return Promise.resolve();
  }
}
