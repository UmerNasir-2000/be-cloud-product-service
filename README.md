
## Schema

 *Partition Key*: ProductId (String)

 *Sort Key*: CreatedAt (DateTime)

- Attributes:
  - Title (String)
  - Description (String)
  - Price (Number)
  - Quantity (Number)
  - Status (String) -> [Available, Out of Stock, Requested, Deprecated]
  - Category (String)
  - IsFeatured (Boolean)
  - Image (String)
  - CreatedAt (DateTime)
  - Manufacturer (String)
  - Tags (List of Strings)
  - Reviews (List of Map or JSON structures containing reviewer name, rating, and comments)

## DynamoDB Concepts

### BEGINNER

  1. PutItem 
  2. GetItem 
  3. Delete Item
  4. Query by Partition Key (Use the Query operation to retrieve all products in a specific category)
  5. Scan 
  6. Filtering with FilterExpression (When using Scan or Query, you can apply a FilterExpression to further filter the results. For example, you can query for products with a specific price range)
  7. ConditionExpression (Experiment with conditional updates using the ConditionExpression parameter when performing updates. For example, update the product's price only if the current quantity is above a certain threshold)
  8. Batch Writes (Perform batch writes to insert, update, or delete multiple items in a single operation)
  9. Pagination (Implement pagination for queries and scans to retrieve a large number of results efficiently, handling the LastEvaluatedKey in the response)
  10. Projection Expressions (Experiment with different projection expressions to control which attributes are returned in query results for optimization)
  11. Atomic Counters (Implement atomic counters to increment or decrement the Quantity attribute when processing orders or tracking inventory)

   
### INTERMEDIATE

  1. Auto-Scaling
  2. Transactions (Use DynamoDB transactions to ensure the atomicity and consistency of multiple write operations)
  3. Time-to-Live (TTL)
  4. Backup and Restore
  5. Aggregation
  6. LSI

### Advanced

Implement a scheduled Lambda function to scan the table for low-stock items and send notifications (e.g., email or SMS) to restock them

## Queries

1. Query products within a specific category (e.g., "Electronics") and within a specified price range (e.g., $100-$500)
2. Retrieve the most recent products in each category, useful for showcasing new arrivals
3. Calculate the average rating for a product by iterating through its Reviews and calculating the mean rating
4. Use a filter expression with the Scan operation to find products with a Quantity below a certain threshold (e.g., less than 10 items in stock)
5. Query for products that have specific tags (e.g., "sale," "featured," "limited edition") in their Tags attribute
6. Query for products added in the last 30 days
7. Retrieve products with the most reviews
