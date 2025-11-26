---
{"publish":true,"created":"26/11/25, 10:04","modified":"2025-11-26T12:19:33.314+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---

## DML - Data Manipulation Language
`INSERT`, `UPDATE` and `DELETE` rows(!)
### INSERT
Insert new values (new rows) into the relation
General form of an `INSERT` query is
```mysql
INSERT INTO R(A1, ..., An) VALUES (V1, ..., Vn)
```
The `VALUES` clause can be replaced with a `SELECT` query
Missing attributes will be inserted as `NULL`
### DELETE
Delete existing rows from the relation
Gneral form of a `DELETE` query is
```mysql
DELETE FROM R
WHERE       ConditionOnR
```
> [!DANGER] DESTRUCTIVE ACTION
### UPDATE
Update existing rows in the relation
General form of an `UPDATE` query is
```mysql
UPDATE R
SET    newValues (by value or by query)
WHERE  ConditionOnR
```
### Updating views
Is it always possible to update a view? A relation doesn't exist, so the query will always be translated into a query on the original table
Which views can be updated and which can't be?
- When the query would result in updating multiple tables
	- Query might have to update multiple tables or might not (presence of a foreign key for example), this is UB
- When the `SELECT` in the view uses a column more than once
	- Two different values might be passed into the same column, which creates a UB
- When `DISTINCT` is used
	- If the new row is indeed a duplicate, should it be updated or not? This creates a UB
- When there is an aggregate, `GROUP BY`
	- It is not possible to update deterministic value(s) into the underlying table if the view provides `AVG` or other aggregates, this creates a UB
- When there is `UNION [ALL]`
	- It might not be possible to determine in which of two tables in the union the update should happen, this creates a UB
---
## DDL - Data Definition Language
`(CREATE|REPLACE)`, `ALTER` and `DROP` schemas(!)
### Data types
Different in each DBMS provider
- Characters/strings
	- CHAR(N) - fixed length string
	- VARCHAR(N) - variable length string
- Numbers
	- INT
	- REAL
- Times and Dates
	- DATE
	- TIME
	- TIMESTAMP
- Domains - reusing data types
	- `CREATE DOMAIN name AS type`
### Defaults
`DEFAULT` defines the value to be used when the column is not specified in an `INSERT` query
Default of defaults is `NULL`
### CREATE TABLE
```mysql
CREATE TABLE Name(
	column1    INT,
	column2    VARCHAR(50),
	column3    VARCHAR(200),
	column4    BIT(1), -- like boolean
	column5    DATE,
	column6    VARCHAR(5) DEFAULT 'B.Sc.'
)
```
Order of columns in the table matters, as columns can be accessed by their position in the order, not just their name
### ALTER TABLE
`ADD` or `DROP` columns
### DROP TABLE
Delete the whole table
> [!DANGER] VERY DESCTRUSTIVE ACTION

---
## Indices and query optimization
### Index
Index is a small data structure attached to the relation, containing pointers to rows in the relation. Indices help make queries faster by providing a fast way to locate the rows we're looking for, like a search tree or a hash map instead of a simple linear search.
Indices can be defined on one or multiple columns
```mysql
CREATE INDEX name ON R(A1, ..., An)
```
Such an index first sorts data by `A1`, then by `A2` and so on. Thus, it is useful for queries with conditions including leading columns `A1..Ak` without gaps, i.e. an index `R(A1, A2, A3)` will not be as effective in the query on `A1, A3` as it will be in the queries on `A1`, `A1, A2` and `A1, A2, A3`

When should we add indices? When should we avoid adding indices, i.e. why not just add all possible indices? We will learn more about that later

---
## Data constraints in SQL
Constraints on data that the DBMS enforces
- Keys, foreign keys (easiest to enforce)
- Attribute-level constraints
- Global constraints - assertions (hardest to enforce)
Constraints can be violates on any data manipulations, in that case the DBMS will
- Fail and throw an error message
- Fix the violations via triggered updates
### Primary keys (PKs) and UNIQUE
A primary key is a set of columns that uniquely identifies the row, no two rows can have the same set of these values. In addition, primary key cannot be `NULL`
`PRIMARY KEY(A1, ..., Ak)`
A `UNIQUE` constraint is somewhat similar to primary key, but it is not limited to just one instance, and can be `NULL`
`UNIQUE(A1, ..., Am)`
### Foreign keys (FKs)
Column values are taken from the primary key of another table (the primary key represents an entire row), contrary to PK, an FK can be `NULL`(!), meaning that there is no link to another relation in this particular row
Foreign keys ensure that the link between two relations is not broken on updates in one of them
```mysql
Column Type REFERENCES R(KeyColumn)
-- or
FOREIGN KEY (Column1, Column2) REFERENCES R(KeyColumn1, KeyColumn2)
```
There are three main strategies on how to deal with FK violations
- `RESTRICT` - fail and throw an error message
- `CASCADE` - after an update/delete do an update/delete, meaning performing the same manipulation on all linked relations
- `SET NULL` - set foreign key to `NULL` if the original key value no longer exists
### Column-level constraints, NOT NULL and CHECK
- `NOT NULL` - column does not accept `NULL` values
- `CHECK` - any condition, `CHECK (Condition)`
### Global assertions
Independent members of the schema, supported by few DBMS, i.e.
```mysql
CREATE ASSERTION myAssert CHECK
	NOT EXISTS (
		SELECT   1
		FROM     Student as S
				 JOIN Takes as T ON S.ID = T.StudentID
		WHERE    S.degree = 'B.Sc.'
		GROUP BY T.courseID
		HAVING   AVG(S.grade) < 60
	)
```
This assertion will be run on **each** insert/update/delete in all relations in the schema
This means that this query should (likely) be optimized as much as possible using indices, etc.
### Pros and Cons of Constraints
- Declarative definition of conditions (*what* is allowed)
- Prevent users from creating errors in data
- Requires definition of *when* to check and *how* to handle
- Complex to implement
There exists a procedural alternative - *triggers*
### Triggers
Trigger is a procedure to be executed `BEFORE` or `AFTER` a manipulation (`INSERT`, `UPDATE`, `DELETE`). Procedure is defined using a procedural syntax, that is DBMS independent, i.e.
```mysql
CREATE TRIGGER t_grade_check
BEFORE INSERT ON Takes
FOR EACH ROW
BEGIN
	IF NEW.grade < 0 THEN
		SET NEW.grade = 0
	ELSEIF NEW.grade > 100 THEN
		SET NEW.grade = 100
	END IF;
END;
```
---
## Transaction
Transactions are a synchronization mechanism addressing two issues
- Concurrent access by multiple users
- Protection against crashes
By default, every DML statement update the DB directly, but we can control how exactly this happens
- START TRANSACTION - disable auto updates
- COMMIT - update all the changes since the beginning of current transaction
- ROLLBACK - cancel all the changes since the beginning of current transaction
### Serializability
Serializability is the technical term used to define the isolation of transactions
- An execution is **serial** if transactions are executed one after another
- An execution is **serializable** if it is equivalent to a **serial** one
- DBMS can offer serializability guarantees
#### Implementing Serializability
- Obtain all relevant read/write **locks** on tables/rows
- Perform transaction operations
- Commit and then release locks
- Rollback if an error occurs at any point
> [!TODO] To be continued when we learn NoSQL ...

---
