---
{"publish":true,"created":"21/01/26, 11:01","modified":"2026-03-24T15:00:17.018+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---

# NoSQL
## Why SQL and relational model?
- An efficient representation of structured data
- Expressive query language(s)
- Many optimizations for operations
- Many efficient implementations, many extensions
- Years of research (theoretical and practical)
## Why not SQL?
We will see
- Scalability and distribution
- Unstructured data
- No schema required, flexibility
- `NoRelational` rather than `NoSQL`

## Scalability
Is scalability a problem? Depending on the architecture!
### Serverless/1-Tier
Each client has his own copy of the application and a local DB (i.e. SQLite)
- Pros
	- No server, no performance bottlenecks
- Cons
	- No interaction
	- No shared storage
### Client-Server/2-Tier
Each client is connected to the DB server directly
- Pros
	- Shared storage
- Cons
	- Single DB server is a performance bottleneck
	- No central management of DB usage
### 3-Tier
Each client is connected to some application server and each application server is connected to the DB server
- Pros
	- Application servers are replicated for scalability
	- Central management of DB usage
- Cons
	- DB server is still a performance bottleneck
### Distributing the DB server
Instead of a single DB server, we can use many! Request handling will then be spread between different machines. What are the possible problems?
- DB state should be consistent for all clients
- Connections between different parts of data must be maintained
	- Within columns - keys and uniqueness
	- Within tables - FDs
	- Across tables - FKs, general conditions, transactions, triggers
#### CAP theorem #theorem 
If we replicate the DB server, we must give up one out of three desired properties
- Consistency - every read returns the latest write
- Availability - every operation returns an un-delayed response
- Partition tolerance - resilience to server crashes
> [!NOTE]
> NoSQL solutions relax some of the above!

There are two general approaches to DB distribution
- Replication
- Sharding/Partitioning
#### Sharding
For a relational DB, we can, for example, partition data by ranges of the primary key. Each shard will then be able to answer selection and projection queries independently of others (inside its own range)
The general idea is to partition data, where each shard holds a subset of data - subset of table columns, table rows or tables themselves
- Pros
	- Operations that apply to a specific subset are handled entirely by one shard
	- Other operations are executed over multiple servers, but are "embarrassingly parallel", meaning that they are extremely well parallelized
	- Data per server is smaller, which might allow for main memory DBs!
- Cons
	- Partitioning is not always natural
	- Load balancing is not guaranteed
	- Harder to execute complex operations like joins, group by, aggregation, etc.

What about constraints?
- Primary keys are easy to maintain, shards are defined by keys
- Other constraints like FKs, uniqueness, FDs and others - not so much
	- May be defined across shards
	- Typically not supported or only has limited support
#### Replication
All DB servers hold copies of the full data, requests are arbitrarily distributed
- Pros
	- Reads are always handled by a single server
	- Complex queries are as efficient as on a single server
	- Load balancing is perfect
	- A side-benefit - protection against data-loss
- Cons
	- Data per server is large
	- Updates must be applied to all copies, risk of inconsistencies

Both options have their own pros and cons, can we do better?
#### Hybrid approach
Data is partitioned into shards, and shards are replicated!
There is a tradeoff, given the same resources - either do more shards or more replicas
What about CAP theorem? This approach does not magically solve it, but it does allow to fit the strategy to specific data and usage

---
## Key-value storage
Data is stored as key-value pairs, where keys are unique atomic values and values can be anything(!)
This approach is excellent for sharding, it has no notion of tables and keys can be ordered for efficient range selection
Supported operations are simply `get(key)` and `put(key, value)`
Operations/constraints on values are not supported
### Sharding in key-value storage
- Range partitioning - split the key space into ranges and assign each to a server
	- Better support for range searches
	- May be problematic for skewed data
	- Expensive to add/remove servers
- Hash partitioning - store `(key, value)` on `hash(key) % num_servers`
	- No support for range searches
	- Not affected by skewedness of data
	- Variance in value sizes and frequently updated keys can affect load balancing
	- Expensive to add/remove servers

How can we improve hashing to make adding/removing servers less expensive?
- Consistent hashing
	- Assume current number of servers to be $n$
	- Choose a large number $N \gg n$
	- Choice of server by key is computed as $\ceil{\frac{(hash(k) \% N) \cdot n}{N}} \% n$
	- Adding/removing a server only moves the existing servers relatively little, affecting only the assignment of the values in $hash(k) \% N$
---
## Document storage
Document storage is a subclass of a key-value storage, where values are documents
Documents are usually a semi-structured data, with nested tree-like structure like JSON
```json
{
	"user_id": "user_001",
	"login_time": "2025-01-12T14:34:13",
	"preferences": {
		"theme": "dark",
		"language": "he",
		"currency": "NIS"
	}
}
```
- Data format is more flexible than relational data model
- It is less flexible than generic key-value storage, this is done to allow some querying of the documents themselves, not just the keys
- Sharding is very similar to key-value storage

An example of such a storage is Apache AsterixDB. It uses a query language `SQL++`, which is compatible in syntax with SQL, supports queries like joins, nested queries and aggregation, and has extensions to support JSON (for instance nested data)
### Indexes
- Indexes are also distributed - they are maintained per machine
- Finding the key (primary index) is done, for example, using a hash index per machine(!), its hash function must be different from the partition hash(!)
- Querying the values (secondary index) is done by searching in parallel over multiple machines and supports flexible structure, e.g. missing fields

What are the disadvantages of document storage?
- Complex queries are sometimes not supported, or simple perform much worse than a relational DB
- Updates can be more time consuming, or lead to temporary inconsistency
- Less support for constraints like FKs
- Storage can be less compact for uniform data schema
## Wide-column DBs
Similar to relational DBs, but each column can be a column family, that is, a set of columns that are related to one another.
This allows to store values that are commonly used together "close" to each other, making sharding and caching more efficient
Sharding then can be done not only by keys, but by column families

---
## Consistency - Transactions
### ACID properties
- Atomicity - all updates succeed or fail as an atomic unit
- Consistency - if the transaction input is consistent, so is the output
- Isolation - transactions do not interfere with each other
- Durability - in other words, persistency
### Strong consistency - ACID in NoSQL
- Consistency includes all replicas
	- Implemented by synchronizing all servers using lock mechanisms
- Supported by some NoSQL servers like MongoDB and AsterixDB
- Overhead can be very significant
### Eventual consistency - BASE properties
BASE is the opposite of ACID
- Basically Available - queries and updates are available but may return stale data or may be overridden
- Soft-State - after an update, state may be inconsistent for a short time
- Eventually consistent - servers coordinate offline to restore consistency (typically takes milliseconds)
#### Conflict resolution
- Updates are accumulated
- A deterministic mechanism exists to choose the final state
	- This algorithm must be the same for all servers
	- Examples of such algorithm is "last writer", "writes over deletes"
### Quorum-based consistency
Data is consistent if it appears in the majority of servers (quorum)
It can be combined with eventual consistency
