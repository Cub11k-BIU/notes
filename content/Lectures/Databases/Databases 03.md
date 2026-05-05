---
{"publish":true,"created":"12/11/25, 09:11","modified":"2026-03-24T15:00:16.982+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---

## Aggregation -- Grouping
### Group by clause #definition 
`GROUP BY` separates the resulting set into groups (subsets) by the given column(s) and thus allows for calculation of aggregates for each such group (subset) instead of the whole result set
> [!IMPORTANT] GROUP BY clause
> Columns used in GROUP BY can be present in the result set as is, but don't have to
> Any other columns must only be used in some aggregate

```mysql
SELECT   product, SUM(price*quantity) AS salesPerProduct
FROM     Purchase
WHERE    date >= '2020.01.01'
GROUP BY product
```
This query will return sum of sales since 2020 for each product
Some `GROUP BY` queries can be written without `GROUP BY` using sub-queries, although it is not really useful
### Having clause #definition 
`HAVING` clause is used in combination with `GROUP BY` and is roughly equivalent to `WHERE` for each group created by `GROUP BY` instead of a condition for the whole table
```mysql
SELECT   product, MAX(price) AS maxPrice
FROM     Purchase
WHERE    date >= '2020.01.01'
GROUP BY product
HAVING   MAX(price) < 100 AND MIN(price) > 10
```
Using `HAVING` without aggregation is usually pointless as it can be done with `WHERE` or a sub-query, or can have unexpected results, different from defining conditions on the whole table
> [!NOTE] Quote from Wikipedia
> `WHERE` is taken into account at an earlier stage of a query execution, filtering the rows read from the tables. If a query contains `GROUP BY`, rows from the tables are grouped and aggregated. After the aggregating operation, `HAVING` is applied, filtering out the rows that don't match the specified conditions. Therefore, `WHERE` applies to data read from tables, and `HAVING` should only apply to aggregated data, which isn't known in the initial stage of a query.
### Exercises
- Author(*login*, name)
- Wrote(*login*, *title*)
Find names of authors who wrote at least 10 documents
```mysql
SELECT   Author.name
FROM     Author, Wrote
WHERE    Author.login = Wrote.login
GROUP BY Author.login, Author.name
HAVING   COUNT(*) >= 10
```
Find the maximal number of articles that any author wrote
```mysql
SELECT   MAX(nums.numArticles) AS maxArticles
FROM     (SELECT   COUNT(*) AS numArticles
		  FROM     Wrote
		  GROUP BY Wrote.login) AS nums
```
or
```mysql
SELECT   COUNT(*) AS maxArticles
FROM     Wrote
GROUP BY Wrote.login
HAVING   COUNT(*) >= ALL
		 (SELECT   COUNT(*)
		  FROM     Wrote
		  GROUP BY Wrote.login)
```
---
## NULLs in SQL #definition 
`NULL` is a missing or unknown atomic value in the table
We can either allow `NULL`s or prohibit them in the table/column
#### Problems with NULLs
- Selection, is `NULL = 2`?
- Distinct, are two NULLs distinct or not?
- Joins, are two NULLs equal or not?
- Intersect, are two NULLs equal or not?
- `...`
To solve this problem, in SQL there are three(!) boolean values:
- `FALSE = 0`
- `UNKNOWN = 0.5` (conceptually)
- `TRUE = 1`
`UNKNOWN` is used specifically for comparisons with `NULL`
#### Logical operations with `UNKNOWN`
- `AND`
	- `TRUE AND UNKNOWN = UNKNOWN`
	- `FALSE AND UNKNOWN = FALSE`
	- `UNKNOWN AND UNKNOWN = UNKNOWN`
- `OR`
	- `TRUE OR UNKNOWN = TRUE`
	- `FALSE OR UNKNOWN = UNKNOWN`
	- `UNKNOWN OR UNKNOWN = UNKNOWN`
- `NOT`
	- `NOT UNKNOWN = UNKNOWN`
These can be interpreted (conceptually) as:
- `x AND y = min(x, y)`
- `x OR y = max(x, y)`
- `NOT x = 1 - x`
Rows with the value of `WHERE` condition being `UNKNOWN` will not be returned
### `IS NULL` and `IS NOT NULL` #definition 
Operators `IS NULL` and `IS NOT NULL` check exactly what is written
If a value is equal (not equal) to `NULL`, then it returns `TRUE`, otherwise `FALSE`

---
## Explicit joins
Benefits
- Explicitly define join criteria and distinguish them from selection criteria
- Avoid bugs like unintended cartesian products (i.e. forgotten join clause in `WHERE`)
```mysql
SELECT Product.name, Purchase.store
FROM   Product JOIN Purchase ON Product.name = Purchase.prodName
```
is equivalent to
```mysql
SELECT Product.name, Purchase.store
FROM   Product, Purchase
WHERE  Product.name = Purchase.prodName
```
### Outer joins #definition 
Outer joins include rows from the first table that did not match any rows from the second table
- `LEFT OUTER JOIN`, `LEFT JOIN` - for each rows on the left do a regular join if there is a match, or match with a row of NULLs from the right table
- `RIGHT OUTER JOIN`, `RIGHT JOIN` - same as `LEFT OUTER JOIN` but symmetric
- `FULL OUTER JOIN` - include non-matching rows from both left and right tables
	- Missing from `MySQL`, but can be emulated
### Inner joins #definition 
- `INNER JOIN`, `JOIN` - same as implicit join (with a joining condition!)
### Exercises
- Product(*pname*, price, category, manufacturer)
- Purchase(buyer, seller, store, product)
- Company(*cname*, stockPrice, country)
Find people who bought anything from Lucy or bought products from a company whose stock price is over $50
```mysql
SELECT DISTINCT pur.buyer
FROM            Purchase AS pur
				JOIN Product AS p ON pur.product = p.pname
                JOIN Company AS c ON p.manufacturer = c.cname
WHERE           pur.seller = 'Lucy' OR c.stockPrice > 50
```
Let's talk about the last query, there is a problem:
What if we have a NULL somewhere?
Conditions in `OR` are asymmetric, that is they examine different tables, and they should not depend on the contents of other tables when joining. Any failure in the joining chain would break the query
Let's try using `LEFT OUTER JOIN` to eliminate this problem!
```mysql
SELECT DISTINCT pur.buyer
FROM            Purchase AS pur
				LEFT JOIN Product AS p ON pur.product = p.pname
                LEFT JOIN Company AS c ON p.manufacturer = c.cname
WHERE           pur.seller = 'Lucy' OR c.stockPrice > 50
```
Or by using `UNION`:
```mysql
(SELECT pur.buyer
 FROM   Purchase AS pur
 WHERE  pur.seller = 'Lucy')
	UNION
(SELECT pur.buyer
 FROM   Purchase AS pur
        JOIN Product AS p ON pur.product = p.pname
        JOIN Company AS c ON p.manufacturer = c.cname
 WHERE  c.stockPrice > 50)
```
## Ways to deal with NULLs
### `CASE WHEN` #definition 
Switch case clause in SQL
```mysql
SELECT product,
    CASE
	    WHEN price < 1500 THEN 'Low price'
	    WHEN price BETWEEN 1500 AND 2000 THEN 'Medium price'
	    WHEN price > 2000 THEN 'High price'
	    ELSE 'Unknown'
	END AS PriceCategory
...
```
### `COALESCE` #definition 
Choose the first non-NULL value from the list
```mysql
SELECT   COALESCE(p.category, 'misc') AS category,
         SUM(price*quantity) AS totalSales
FROM     Purchase AS pur
	     LEFT JOIN Product AS p ON pur.product = p.pname
GROUP BY COALESCE(p.category, 'misc')
```
---
- Purchase(*pid*, buyer, seller, product, date, price)
For each purchase, calculate the sum of all previous purchases of the same buyer
```mysql
SELECT pur1.pid, COALESCE((SELECT SUM(pur2.price)
						   FROM   Purchase AS pur2
						   WHERE  pur2.buyer = pur1.buyer
								  AND pur2.date < pur1.date
						 ), 0) AS previousTotal
FROM   Purchase AS pur1
```
Can we do this some other way?
## Window functions #definition 
- For each row, open a "window" to other related rows
- Similar to aggregate functions, but return a value for each row instead of each group
```mysql
SELECT col1, col2,
	   window_function(...)
	   OVER([PARTITION BY] [ORDER BY]) AS new_column
FROM   TableName
```
- `window_function()` can be an aggregate function or some other:
	- `RANK`, `DENSE_RANK`, `ROW_NUM`, `NTILE`, `LAG`, `LEAD`
- `OVER` defines the window
	- `PARTITION BY` (Optional) defines the associated group for each row
	- `ORDER BY` (Optional) sets the order. When used, the window often ends with the current transaction
Previous query then becomes
```mysql
SELECT  pid,
		SUM(price) OVER (
			PARTITION BY buyer
			ORDER BY     date
			RANGE BETWEEN UNBOUNDED PRECEEDING AND 1 PRECEEDING
		) AS previousTotal
FROM    Purchase
```
Another example is
- Student(*name*, dept, avgGrade, ...)
Find all the number one and two students with the highest average in each department. Include ties
```mysql
SELECT ptable.name
FROM   (SELECT name, dept, avgGrade,
			   DENSE_RANK() OVER (
				   PARTITION BY dept
				   ORDER BY     avgGrade DESC
			   ) AS studentRank
	    FROM Student) as ptable
WHERE  ptable.studentRank <= 2
```
