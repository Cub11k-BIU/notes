---
{"publish":true,"created":"19/11/25, 10:15","modified":"2025-11-21T21:10:13.996+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---

## Some window functions
### LAG #definition 
`LAG(return_value [, offset[, default_value]])` returns the value `offset` steps before the current value in order, or the default
`Alice, Bob, Carol, David, Eve, Eve, Frank`
- `LAG('David')` - `'Carol'`
- `LAG('David', 2)` - `'Bob'`
- `LAG('Bob', 2, 'Nobody')` - `'Nobody'`
### LEAD #definition 
Mirror function of `LAG`
### RANK #definition 
Returns the position of the current row in the order, starting from 1, same values get the same rank, ranks can be skipped, i.e.
`Alice=1, Bob=2, Carol=3, Devid=4, Eve=5, Eve=5, Frank=7`
### DENSE_RANK #definition 
Same as `RANK` but does not skip ranks
### ROW_NUMBER #definition 
Self explanatory
### NTILE #definition 
`NTILE(n)` divides the result set into $n$ approximately equal-sized buckets, useful for defining quartiles, quintiles, deciles, etc.

---
## Views
### View #definition 
View is a virtual relation created from an existing relation
Using (virtual) views in `FROM` clause is convenient, but not efficient, it is translated into a subquery!

|                    |       Virtual view        |                         Materialized view                          |
| :----------------: | :-----------------------: | :----------------------------------------------------------------: |
|                    | Plug-in view into a query |                   Save view result as a relation                   |
| Runtime efficiency |           Slow            |                 Fast, but also depends on indices                  |
| Memory efficiency  |     No data is saved      | Duplicates data, some views are larger than the original relations |
|     Stale data     |   No, always up-to-date   |                 Possible, requires offline updates                 |
| Where is it used?  |      Most databases       |                          Data warehouses                           |

## Common table expressions (CTEs)
### WITH clause (CTEs) #definition 
CTE is defined by `WITH` clause, and is similar to view, but there are some differences
Syntax - `WITH [RECURSIVE] name AS (result set)`

|            | CTE                                         | Vritual view                | Materialized view                    |
| ---------- | ------------------------------------------- | --------------------------- | ------------------------------------ |
| Use case   | Defining and plugging-in query within query | Plugging-in view into query | Save view result as a relation       |
| Scope      | Query                                       | Schema                      | A different database, data warehouse |
| Similar to | Local function or closure                   | "Regular" function          | Separate instance with copied fields |
Given a relation
- ParentChild(parent, child)
Return, for each person, all of their ancestors.
It is clear, that with an unknown number of ancestry depth, we must use recursion
Is it possible in SQL? With CTEs - yes!
```mysql
WITH RECURSIVE Ancestry(person, ancestor) AS (
	-- base case
	SELECT child AS person, parent AS ancestor
	FROM   ParentChild
	
	UNION ALL
	
	-- recursive call, including stopping condition (empty JOIN)
	SELECT Ancestry.person, ParentChild.parent
	FROM   Ancestry
		   JOIN ParentChild ON Ancestry.anscestor = Parentchild.child
)
SELECT *
FROM   Ancestry
```
Another example,
Calculate $5!$
```mysql
WITH RECURSIVE Factorial AS (
	SELECT 1 AS n, 1 AS value
	
	UNION ALL
	
	SELECT n+1 AS n, value*(n+1) AS value
	FROM   Factorial
	WHERE  n < 5
)
SELECT n, value AS 'n!'
FROM   Factorial
```
Another example,
- Employee(*id*, name, manager_id)
Compute the employee hierarchy level (boss is on the first level)
```mysql
WITH RECURSIVE EmployeeHierarchy AS (
		SELECT id, name, manager_id, 1 AS level
		FROM   Employee
		WHERE  manager_id IS NULL
		
		UNION ALL
		
		SELECT e.id, e.name, e.manager_id, e.level+1 AS level
		FROM   Employee AS e
			   JOIN EmployeeHierarchy AS eh
				   ON e.manager_id = eh.id
)
SELECT id, name, level
FROM   EmployeeHierarchy
```
Another example,
- Employee(*id*, name, manager_id)
How many employees are under management of each employee?
```mysql
WITH RECURSIVE EmployeeHierarchy AS (
	SELECT id, name, manager_id, 0 AS countEmployees
	FROM   Employee
	WHERE  id NOT IN (SELECT DISTINCT manager_id
					  FROM            Employee)
	
	UNION ALL
	
		SELECT   e.id, e.name, e.manager_id,
				 COUNT(*)+SUM(countEmployees) AS countEmployees
		FROM     Employee AS e
			     JOIN EmployeeHierarchy AS eh
				     ON eh.manager_id = e.id
		GROUP BY e.id, e.name, e.manager_id
)
SELECT id, name, countEmployees
FROM   EmployeeHierarchy
```
