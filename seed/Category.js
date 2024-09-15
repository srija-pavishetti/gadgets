const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "smartphones" },
  { _id: "65a7e24602e12c44f599442d", name: "laptops" },
  { _id: "65a7e24602e12c44f599442e", name: "fragrances" },
  { _id: "65a7e24602e12c44f599443d", name: "automotive" },

];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
