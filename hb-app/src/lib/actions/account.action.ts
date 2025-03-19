"use server";

import { Customer, ICustomer } from "@/models/user-models/Customer";
import {
  IServiceProvider,
  ServiceProvider,
} from "@/models/user-models/ServiceProvider";
import dbConnect from "../db";

export async function createCustomer(customer: Partial<ICustomer>) {
  try {
    await dbConnect();
    const newCustomer = await Customer.create(customer);
    return JSON.parse(JSON.stringify(newCustomer));
  } catch (error) {
    console.log(error);
  }
}

export async function createServiceProvider(
  serviceProvider: Partial<IServiceProvider>
) {
  try {
    await dbConnect();
    const newServiceProvider = await ServiceProvider.create(serviceProvider);
    return JSON.parse(JSON.stringify(newServiceProvider));
  } catch (error) {
    console.log(error);
  }
}
