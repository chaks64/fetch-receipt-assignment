/* -------Validate overal receipt------- */
function validateReceipt(receipt) {
  // Validate required properties
  const requiredProperties = [
    "retailer",
    "purchaseDate",
    "purchaseTime",
    "items",
    "total",
  ];
  for (const property of requiredProperties) {
    if (!receipt.hasOwnProperty(property)) {
      return false;
    }
  }
  // Validate retailer property
  if (
    typeof receipt.retailer !== "string" ||
    !receipt.retailer.match(/^(?:[A-Za-z0-9&]+(?:\s|$))+$/)
  ) {
    return false;
  }
  // Validate purchaseDate property
  if (
    typeof receipt.purchaseDate !== "string" ||
    !/^\d{4}-\d{2}-\d{2}$/.test(receipt.purchaseDate)
  ) {
    return false;
  }
  // Validate purchaseTime property
  if (
    typeof receipt.purchaseTime !== "string" ||
    !/^\d{2}:\d{2}$/.test(receipt.purchaseTime)
  ) {
    return false;
  }
  // Validate items property
  if (!Array.isArray(receipt.items) || receipt.items.length < 1) {
    return false;
  }
  // Validate each item in the items array
  for (const item of receipt.items) {
    if (!validateItem(item)) {
      return false;
    }
  }
  // Validate total property
  if (
    typeof receipt.total !== "string" ||
    !/^\d+\.\d{2}$/.test(receipt.total)
  ) {
    return false;
  }
  return true;
}

/* -------Validate individual item------- */
function validateItem(item) {
  // Validate required properties
  const requiredProperties = ["shortDescription", "price"];
  for (const property of requiredProperties) {
    if (!item.hasOwnProperty(property)) {
      return false;
    }
  }
  // Validate shortDescription property
  if (
    typeof item.shortDescription !== "string" ||
    !item.shortDescription.match(/^[\w\s\-]+$/)
  ) {
    return false;
  }
  // Validate price property
  if (typeof item.price !== "string" || !/^\d+\.\d{2}$/.test(item.price)) {
    return false;
  }
  return true;
}

module.exports = { validateReceipt };
