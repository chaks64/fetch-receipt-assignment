const successReceipt = {
    retailer: "Target",
    purchaseDate: "2022-01-02",
    purchaseTime: "13:13",
    total: "1.25",
    items: [{ shortDescription: "Pepsi - 12-oz", price: "1.25" }],
  };
  
  const errorReceipt = {
    retailer: "Target",
    purchaseDate: "2022-01-02",
    purchaseTime: "13:13",
    total: "1.25",
    items: [{ shortDescription: "Pepsi - 12-oz", price: "1.2" }],
  };
  
  module.exports = { successReceipt, errorReceipt };