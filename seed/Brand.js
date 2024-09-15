const Brand = require("../models/Brand");

const brands = [
  { _id: "65a7e20102e12c44f59943da", name: "Apple" },
  { _id: "65a7e20102e12c44f59943db", name: "Samsung" },
  { _id: "65a7e20102e12c44f59943dc", name: "OPPO" },
  { _id: "65a7e20102e12c44f59943dd", name: "Huawei" },
  { _id: "65a7e20102e12c44f59943de", name: "Microsoft Surface" },
  { _id: "65a7e20102e12c44f59943df", name: "Infinix" },
  { _id: "65a7e20102e12c44f59943e0", name: "HP Pavilion" },
  
];

exports.seedBrand = async () => {
  try {
    await Brand.insertMany(brands);
    console.log('Brand seeded successfully');
  } catch (error) {
    console.log(error);
  }
};
