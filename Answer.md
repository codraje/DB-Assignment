# Answers to Questions

## Question 1: Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

In the provided schema, the "Product" entity has a field called `category_id`, which serves as a reference to the `_id` field of the "Product_Category" entity. This establishes a one-to-many relationship between "Product_Category" and "Product", meaning that one category can have multiple products, but each product belongs to only one category. The `ref` property in the `category_id` field specifies that it refers to the "Product_Category" model, enforcing the relationship between the two entities.

## Question 2: How could you ensure that each product in the "Product" table has a valid category assigned to it?

To ensure that each product in the "Product" table has a valid category assigned to it, you can use Mongoose's schema validation capabilities. Specifically, you can set a validation rule for the `category_id` field to ensure that it must reference an existing category in the "Product_Category" collection. By setting `required: true` for the `category_id` field, Mongoose will automatically validate that each product document must have a `category_id` field present, ensuring that each product is associated with a valid category. Additionally, since `category_id` is a reference to the "Product_Category" collection, Mongoose will also validate that the referenced category exists in the "Product_Category" collection when saving or updating a product document.
