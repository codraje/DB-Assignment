const mongoose = require('mongoose');

// Product schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true
    },
    desc: {
      type: String,
      required: true
    },
    SKU: {
      type: String,
      required: true
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductCategory'
    },
    inventory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProductInventory'
    },
    price: {
      type: Number,
      required: true
    },
    discount_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discount'
    },
    deleted_at: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

// ProductCategory schema
const ProductCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      maxlength: 50
    },
    desc: {
      type: String,
      required: true
    },
    deleted_at: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

// Product_inventory
const ProductInventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true
    },
    deleted_at: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

// Discount schema
const DiscountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    discount_percent: {
      type: Number,
      required: true,
      default: 0
    },
    active: {
      type: Boolean,
      required: true
    },
    deleted_at: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = {
  ProductCategory: mongoose.model('ProductCategory', ProductCategorySchema),
  Product: mongoose.model('Product', ProductSchema),
  Discount: mongoose.model('Discount', DiscountSchema),
  ProductInventory: mongoose.model('Inventory', ProductInventorySchema)
};
