// schemas/productRequestSchema.js

const createProductRequestSchema = {
  body: {
    type: "object",
    required: [
      "productName",
      "productImageUrl",
      "productOf",
      "productPreviousPrice",
      "productCurrentPrice",
      "category",
    ],
    properties: {
      productName: { type: "string" },
      productImageUrl: { type: "string" },
      // productImageUrl: { type: 'string', minimum: 0 },
      productOf: { type: "number" },
      productPreviousPrice: { type: "number" },
      productCurrentPrice: { type: "number" },
      category: { type: "string" },
    },
  },
};

export { createProductRequestSchema };
