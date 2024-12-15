const createProductRequestSchema = {
  consumes: ["multipart/form-data"], // Declares the content type
  body: {
    type: "object",
    required: [
      "productName",
      "productCurrentPrice",
      "productOf",
      "productPreviousPrice",
      "category",
      // "productImageUrl", // Ensure the image field is required
    ],
    properties: {
      productName: {
        type: "string",
        description: "Name of the product",
      },
      productCurrentPrice: {
        type: "string",
        description: "Current price of the product",
      },
      productPreviousPrice: {
        type: "string",
        description: "Previous price of the product",
      },
      productOf: {
        type: "string",
        description: "Brand or owner of the product",
      },
      category: {
        type: "string",
        description: "Category to which the product belongs",
      },
      // productImageUrl: {
      //   type: "string",
      //   format: "binary", // Indicates the field is for binary data (e.g., an image)
      //   description: "The image file for the product",
      // },
    },
  },
};

export { createProductRequestSchema };
