module.exports = mongoose => {
    const Products = mongoose.model(
      "Products",
      mongoose.Schema(
        {
          id: Number,
          brand: String,
          model: String,
          type: String,
          price: Number,
        },
        { timestamps: true }
      )
    );
    return Products;
  };