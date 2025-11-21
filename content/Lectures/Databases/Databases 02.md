---
{"publish":true,"created":"05/11/25, 10:11","modified":"2025-11-21T21:10:13.985+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---

## Joinable tables
Manual joins are perfectly fine, but how can we define the tables to be joinable without manually specifying on which columns to join? The answer is foreign keys.
### Foreign key #definition 
- A column that is a reference to the key of another table, i.e. `Product.manufacturer <- Company.cname`
- Gives information and enforces constraints
## Join explained by a Cartesian product
```mysql
SELECT *
FROM   Department, Faculty
```
Yields the cartesian product of two tables, i.e. $D \times F = (D_{1}, D_{2}, \dots, D_{n}) \times (F_{1}, F_{2}, \dots, F_{m})$

```mysql
SELECT *
FROM   Department, Faculty
WHERE  dfaculty=fname
```
Yields the cartesian product with some constraints, i.e. $\Set{ v \in D \times F | v.D_{i} = v.F_{j} }$

---
## Unintuitive joins
```mysql
SELECT R.A
FROM   R, S, T
WHERE  R.A=S.A OR R.A=T.A
```
Seemingly, we're looking for $R \cap (S \cup T)$
But what happens when one or tables are empty, i.e. T? Cartesian product is then also empty! So the query is not equivalent to $R \cap (S \cup T)$

---
## Disambiguating attributes
Sometimes two relations have the same name for one or more columns. In this case, we're supposed to use the relation name to disambiguate the attribute, i.e. `Person.address, Company.address` instead of just `address, address`
### Renaming, aka `AS` #definition 
Question - find all stores that sold at least one product that `BestBuy` store also sold?
Proposed query:
```mysql
SELECT DISTINCT store
FROM            Purchase
WHERE           store = 'BestBuy'
```
This query is obviously wrong, as it only returns `BestBuy` itself
We encounter a problem - we have to match two or more different rows on the same column in the same table
The solution is a self-join!
```mysql
SELECT DISTINCT store
FROM            Purchase, Purchase
WHERE           product = product
				AND store = 'BestBuy'
```
The problem is that all columns are now ambiguous
The solution to this problem is aliasing, or `AS`
```mysql
SELECT DISTINCT x.store
FROM            Purchase AS x, Purchase AS y
WHERE           x.product = y.product
				AND y.store = 'BestBuy'
```
And now the query actually works. The only question is - do we want to return `BestBuy` itself or not?
```mysql
SELECT DISTINCT x.store
FROM            Purchase AS x, Purchase AS y
WHERE           x.product = y.product
				AND y.store = 'BestBuy'
				AND x.store <> 'BestBuy'
```
It is also possible to rename attributes (columns) in the `SELECT` resulting table
Scope of the created "variable" is the entire query (for now)

---
## Exercises
- Product(*pname*, price, category, manufacturer)
- Purchase(buyer, seller, store, product)
- Company(*cname*, stockPrice, country)
- Person(*pername*, phoneNumber, city)
### Ex1
Find all people who bought telephony products
```mysql
SELECT pur.buyer
FROM   Purchase AS pur, Product AS pr
WHERE  pur.product = pr.pname
        AND pr.category = 'telephony'
```
### Ex2
Find names of people who bought American products
```mysql
SELECT DISTINCT pur.buyer
FROM   Purchase AS pur, Product AS pr, Company AS c
WHERE  pur.product = pr.pname AND pr.manufacturer = c.cname
       AND c.country = 'USA'
```
### Ex3
Find names of people who bought American products and they live in Seattle
```mysql
SELECT DISTINCT per.pername
FROM            Person AS per, Purchase AS pur, Product AS pr,
				Company AS c
WHERE           per.pername = pur.buyer AND pur.product = pr.pname
				AND pr.manufacturer = c.cname
				AND c.country = 'USA'
				AND per.city = 'Seattle'
```
### Ex4
Find people who have both bought and sold something
```mysql
SELECT DISTINCT buy.buyer
FROM            Purchase AS buy, Purchase AS sell
WHERE           buy.buyer = sell.seller
```
### Ex5
Find a purchase involving a person from Seattle and a person from Tokyo
```mysql
SELECT DISTINCT buy.buyer AS 'buyer', buy.seller AS 'seller',
			    buy.store AS 'store', buy.product AS 'product'
FROM            Purchase AS pur, Person AS buy, Person AS sell
WHERE           pur.buyer = buy.pername AND pur.seller = sell.pername
				AND (
					(buy.city = 'Seattle' AND sell.city = 'Tokyo')
					OR (buy.city = 'Tokyo' AND sell.city = 'Seattle')
				)
```
---
## Bag operations
### Union #definition 
Union of two result tables with equal columns(!)
`UNION` returns distinct entries by default, use `UNION ALL` to keep them
Example, select all people who live in Seattle or bought something from BestBuy
```mysql
(SELECT name
 FROM   Person
 WHERE  city='Seattle')
	UNION
(SELECT buyer as name
 FROM   Purchase
 WHERE  store='BestBuy')
```
### Except #definition 
Difference of two result tables with equal columns(!)
`EXCEPT` returns distinct entries
Example, select all people who live in Seattle and didn't buy anything from BestBuy
```mysql
(SELECT name
 FROM   Person
 WHERE  city='Seattle')
	EXCEPT
(SELECT buyer as name
 FROM   Purchase
 WHERE  store='BestBuy')
```
### Intersect #definition 
Intersection of two result tables with equal columns(!)
`INTERSECT` returns distinct entries
Example, select all people who live in Seattle and bought something from BestBuy
```mysql
(SELECT name
 FROM   Person
 WHERE  city='Seattle')
	INTERSECT
(SELECT buyer as name
 FROM   Purchase
 WHERE  store='BestBuy')
```
---
## Subqueries #definition 
### One-row one-column
Subquery can be treated as an atomic value if and only if it returns a one-row and one-column result
```mysql
SELECT Purchase.product
FROM   Purchase
WHERE  Purchase.buyer = (SELECT name
					     FROM   Person
					     WHERE  ID = '123456789')
```
### In #definition 
Checking if a value exists in the set
Subquery can return any number of results, but no error
```mysql
SELECT Purchase.product
FROM   Purchase
WHERE  Purchase.buyer IN
						(SELECT name
					     FROM   Person
					     WHERE  city='Seattle')
```
Subquery can also return multiple columns
```mysql
SELECT Purchase.product
FROM   Purchase
WHERE  (Purchase.buyer, Purchase.store) IN
										  (SELECT name, city
										   FROM   Person)
```
### All #definition 
Quantifying over a subquery, i.e. $\forall$
Subquery must return a one-column result
```mysql
SELECT Purchase.product
FROM   Purchase
WHERE  Purchase.price >= ALL
						    (SELECT price
						     FROM   Purchase)
```
### Any #definition 
Quantifying over a subquery, i.e. $\exists$
Subquery must return a one-column result
```mysql
SELECT Purchase.product
FROM   Purchase
WHERE  Purchase.price > ANY
						   (SELECT price
						    FROM   Purchase)
```
### Exists #definition 
Quantifying over a subquery, i.e. subquery is non-empty (or empty)
```mysql
SELECT Purchase.product
FROM   Purchase
WHERE  EXISTS
  		     (SELECT *
			  FROM   Person
			  WHERE  store=city);
			  
SELECT Purchase.product
FROM   Purchase
WHERE  NOT EXISTS
  		     (SELECT *
			  FROM   Person
			  WHERE  store=city);
```

> [!IMPORTANT] Usage
> Note that these clauses can be used almost everywhere, not just as part of a `WHERE` clause
> More specifically, in `WHERE`, `FROM`, `SELECT` and `HAVING`

---
## Aggregation #definition 
When added to a simple `SELECT-FROM-WHERE` query:
- Computed over the result set
- returns a single value (one row)
SQL supports the following:
- `SUM`, `MIN`, `MAX`, `AVG` - single column
- `COUNT` - any number of columns, counts only rows
	- `COUNT(DISTINCT ...)` counts only rows, distinct by columns in `...`
