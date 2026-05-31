import { createOrderItemTable } from "../models/orderItemsTable.js";
import { createOrdersTable } from "../models/ordersTable.js";
import { createPaymentsTable } from "../models/paymentsTable.js";
import { createProductReviewsTable } from "../models/productReviewsTable.js";
import { createProductsTable } from "../models/productTable.js";
import { createShippingInfoTable } from "../models/shippinginfoTable.js";
import { createUserTable } from "../models/userTable.js";

export const CreateTables = async () => {
    try {
        await createUserTable();
        await createProductsTable();
        await createOrdersTable();
        await createShippingInfoTable();
        await createProductReviewsTable();
        await createOrderItemTable();
        await createPaymentsTable();

        console.log("All tables created successfully");
    } catch (error) {
        console.log("Error creating tables: ", error);
    }
};