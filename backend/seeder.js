import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        // deleteMany veri tabanındaki tüm verileri siler geri döndürülemez
        await Order.deleteMany();   
        await Product.deleteMany();
        await User.deleteMany();

        const createUsers = await User.insertMany(users);
        const adminUser = createUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return {...product, user:adminUser}
        });

        await Product.insertMany(sampleProducts);

        console.log("Data imported", colors.green.inverse);
        process.exit();

    } catch (err) {
        console.log(`${err}`, colors.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();    
        console.log("Data destroyed", colors.red.inverse);
        process.exit();
        
    } catch (err) { 
        console.log(`${err}`, colors.red.inverse);
        process.exit(1);
    }   
}

if (process.argv[2] === '-d') {
    destroyData();
  } else {
    importData();
}
