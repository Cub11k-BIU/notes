---
{"publish":true,"created":"29/10/25, 09:10","modified":"2026-03-24T15:00:16.958+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---


> [!IMPORTANT] Books
> - Database Systems : The complete Book (2nd edition)
> - SQL for Web nerds

What is the goal of a database?
- Store the data
- Update the data
- Fetch certain parts of the data
## DBMS #definition 
Database Management System
## RDBMS #definition 
Relational DBMS

What is a DBMS?
- A collection of files that store the data
- A system that manages the files does all the above
- Collection of Interfaces

Let us try to implement a courses repository without using a DBMS
We need to store
- Students
- Professors
- Courses
- Relations between students and courses, professors and courses, etc.

We can do a naive file-storage system:
```
students.txt
ID, name, course list

courses.txt
ID, name, professor, students list

professors.txt
ID, name, course list
```
Which basic problems are there?
- Lists inside lists, complex data layout
- Data duplication
- Ambiguous field names
- Hard to update the data without rewriting the whole file
What about the following:
- System crashes - how do we ensure data consistency in case of a crash in the middle of some operation?
- Large data, e.g. 1Tb per file
- Simultaneous access by multiple users
- Complex queries - find all professors who teach some specific student that takes more first year classes than average, etc.

All, or almost all, of these problems have been addressed one way or another by existing DBMSs, with contributions of many excellent developers.

## DBMS structure
- **Client tier** - Clients connect to the DBMS and tell it what to do
- **Server tier** - Off-the-shelf program that manages data files, handles crashes, access control, concurrency, etc.
- **Client tier** send commands (queries) to **Server tier** and receives results

- Clients use some protocol to connect to the server and use a language to specify complex queries

> [!NOTE] Relational DBMS
> In the following notes we'll talk mainly about RDBMS

An example of such a language would be SQL
## Client tier
### SQL (Structured Query Language) #definition 
SQL consists of two main parts
- Data Definition language (DDL) - a way to define the structure of the data
- Data Manipulation language (DML) - a way to work with the data
- Data Control language (DCL) - a way to manage user permissions
- Procedural extensions (PS-SQL, etc.)
#### A declarative commands language
It is specifying **WHAT** to do, not **HOW** to do it
This allows the user to not know how the data management is done, only how to interact with a DBMS, which is, in most cases, much easier
Start with defining structure of the data with **DDL**
```mysql
CREATE TABLE Students (
	ID      CHAR(9) PRIMARY KEY NOT NULL,
	Name    CHAR(30),
	Degree  CHAR(20),
	...);
```
And continue with DML to populate the data
```mysql
INSERT INTO Students
VALUES('123456789', 'Alice Jones', 'Undergraduate', ...);
```
Multiple tables allow us to represent **relations** between different entities (tables)

| Students | ID        | Name        | Degree        |
| -------- | --------- | ----------- | ------------- |
|          | 123456789 | Alice Jones | Undergraduate |
|          | 987654321 | Bob Smith   | Undergraduate |
|          | ...       | ...         | ...           |

| Courses | CID    | Name      | Semester |
| ------- | ------ | --------- | -------- |
|         | 895581 | Databases | Fall     |
|         | 12345  | Origami   | Spring   |
|         | ...    | ...       | ...      |

| Takes | StudentID | CourseID |
| ----- | --------- | -------- |
|       | 123456789 | 895581   |
|       | 123456789 | 12345    |
|       | ...       | ...      |
Where **Takes** is a relation table representing relation "Student takes Course"
## Server tier
- Query/DML/DDL compiler - parse language and translate into logical execution steps
- Optimizer - optimize queries execution
- Execution engine
- Storage management
- Transaction management - concurrency and recovery
# SQL
## SQL Data
- Atomic types - int, char, date, etc.
- Table - each cell in a table contains one atomic value
- No nesting, except when including a nested document as an atomic value, e.g. XML document
## SQL Tables
- Each record (row, tuple) is an ordered list of atomic values (and NULLs)
- Each table is an unordered bag of records, at least from the client perspective
	- There can be duplicate records (theoretically)
	- No order (theoretically)
- A collection of atomic values in all records with the same name in the table is called a column
Notation is as follows
Students(ID, Name, Degree)
A key is an attribute or a set of attributes with unique value
- No two records may have the same key
- This can be explained as "KEY defines ATTRIBUTES", i.e. ID defines student name and degree
Classrooms(Building, Room, Capacity, Projector)
- Here, key is a set of two attributes - building and room define classroom capacity and projector
## SQL Queries
### Select
Basic form of a select query is as follows
```mysql
SELECT attributes
FROM relations
WHERE conditions for each record
```
### Where clause
- $x = y, x < y, x \leq y, etc.$
	- Usual meaning for numbers
	- Lexicographic order for CHAR and VARCHAR
	- Chronological ordering for dates and times
- Special functions
	- Arithmetic operations on numbers
	- Pattern matching on text
	- Special date functions
	- DBMS dependent (specific)
- Clause connectives, e.g. `AND`, `OR`, etc.
- `LIKE` - pattern matching
	- `s LIKE p` - s matches pattern p
	- p may contain two types of wildcards
		- `%` - any sequence of characters
		- `_` - any single character
	- Case sensitivity - depends on DBMS
### Distinct modifier
Select only distinct records, i.e.
```mysql
SELECT DISTINCT category
FROM            Product
```
will only return all distinct categories, without repetitions
Selecting distinct multiple columns will result in all distinct combinations of these columns
### Order by clause
```mysql
SELECT   pname, price, manufacturer
FROM     product
WHERE    category='Gadgets' AND price > 50
ORDER BY price, pname
```
- DESC/ASC modifier to enforce descending/ascending order, ASC is the default
- Order is lexicographic by columns
- Ordering is done in the post processing, after the resulting rows have been selected
- Additionally, it is possible to add `LIMIT n` clause that limits the resulting set to `n` rows
### Implicit joins (via FROM+WHERE clause)
How do we connect two or more tables in a query? We identify pairs of records that correspond to each other in different tables, e.g. by the value of some "shared" column
- `Product(pname, price, category, manufacturer)`
- `Company(cname, stockprice, country)`

A basic example would be "Find all products produced in Japan under 200$"
```mysql
SELECT pname, price
FROM   Product, Company
WHERE  manufacturer=cname
       AND country='Japan' AND price <= 200;
```

Another example "Find all countries that manufacture some product in 'Gadgets' category"
```mysql
SELECT country
FROM   Product, Company
WHERE  manufacturer=cname
	   AND category='Gadgets'
```
Does this work properly? No! Join creates records containing columns from both tables, so in our case if there are multiple 'Gadgets' products produced in the same country, there will be multiple repetitions of that country in the answer. We need `DISTINCT`!
```mysql
SELECT DISTINCT country
FROM            Product, Company
WHERE           manufacturer=cname
	            AND category='Gadgets'
```

One more example!
- `Product(pname, price, category, manufacturer)`
- `Purchase(buyer, seller, store, product)`
- `Person(persname, phoneNumber, city)`
"Find names of people living in Seattle that bought some product in the 'Gadgets' category, and the names of the stores from which they bought that product"
```mysql
SELECT DISTINCT persname, store
FROM            Person, Purchase, Product
WHERE           persname=buyer AND product=pname
                AND city='Seattle'
                AND category='Gadgets'
```
