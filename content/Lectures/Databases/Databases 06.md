---
{"publish":true,"created":"03/12/25, 10:15","modified":"2026-03-24T15:00:16.997+02:00","tags":["Academia","Lecture","Databases"],"cssclasses":""}
---

# Database design
### Work process
- Design - entities, relationships, constraints
- Create DB schema
- Use in applications
	- A good design minimizes changing the DB and the systems using it
### Communication
An intuitive yet precise modeling language
### Correctness
Avoid duplicates/lost data, support efficient analysis
## Entity Relation (E/R) diagram
### Entities, attributes, relationships
ER diagrams represent **entity sets** (i.e. tables, rectangle nodes), **attributes** (ellipse nodes) of these sets and **relationships** (diamond nodes) between these sets
```tikz
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, positioning, calc}

\begin{document}

\begin{tikzpicture}[
	scale=0.7,
    % Define styles for the different node types
    entity/.style={
        rectangle, 
        draw=black, 
        thick, 
        fill=blue!40, 
        minimum width=2.5cm, 
        minimum height=1.5cm, 
        font=\sffamily\large
    },
    attribute/.style={
        ellipse, 
        draw=black, 
        thick, 
        fill=teal, 
        minimum width=1.5cm, 
        minimum height=1.2cm, 
        font=\sffamily\large
    },
    relationship/.style={
        diamond, 
        draw=black, 
        thick, 
        fill=gray, 
        aspect=2, % Makes the diamond wider
        minimum width=1.5cm, 
        minimum height=1cm, 
        font=\sffamily\large
    },
    line/.style={
        draw, 
        thick, 
        shorten >=1pt, 
        shorten <=1pt
    }
]

    % --- Main Entities ---
    % Place Product at (0,0)
    \node[entity] (product) at (0,0) {Product};
    
    % Place Company to the right
    \node[entity] (company) at (10,0) {Company};
    
    % Place Person centered below the other two
    \node[entity] (person) at (5,-5) {Person};

    % --- Relationships ---
    % "makes" is strictly between Product and Company
    \node[relationship] (makes) at ($(product)!0.5!(company)$) {makes};
    
    % "buys" is between Product and Person
    \node[relationship] (buys) at ($(product)!0.5!(person)$) {buys};
    
    % "employs" is between Company and Person
    \node[relationship] (employs) at ($(company)!0.5!(person)$) {employs};

    % --- Attributes for Product ---
    \node[attribute] (prod_price) [above left=1cm and 0.5cm of product] {price};
    \node[attribute] (prod_name) [above=1cm of product] {\underline{name}};
    \node[attribute] (prod_cat) [above right=1cm and 0.3cm of product] {\underline{category}};

    % --- Attributes for Company ---
    \node[attribute] (comp_stock) [above left=1cm and -1cm of company] {stockprice};
    \node[attribute] (comp_name) [above right=1cm and -0.5cm of company] {\underline{name}};

    % --- Attributes for Person ---
    \node[attribute] (pers_addr) [below left=1cm and 0cm of person] {address};
    \node[attribute] (pers_name) [below=1cm of person] {name};
    \node[attribute] (pers_id) [below right=1cm and 0cm of person] {\underline{ID}};

    % --- Connections (Lines) ---
    
    % Entity-Relationship Connections
    \draw[line] (product) -- (makes);
    \draw[line] (makes) -- (company);
    
    \draw[line] (product) -- (buys);
    \draw[line] (buys) -- (person);
    
    \draw[line] (company) -- (employs);
    \draw[line] (employs) -- (person);

    % Product Attributes Connections
    \draw[line] (product) -- (prod_price);
    \draw[line] (product) -- (prod_name);
    \draw[line] (product) -- (prod_cat);

    % Company Attributes Connections
    \draw[line] (company) -- (comp_stock);
    \draw[line] (company) -- (comp_name);

    % Person Attributes Connections
    \draw[line] (person) -- (pers_addr);
    \draw[line] (person) -- (pers_name);
    \draw[line] (person) -- (pers_id);

\end{tikzpicture}

\end{document}
```
There are many types of relationships (denoted with different types of arrows):
- One-to-One: one entity from A relates to one entity from B
- One-to-Many: one entity from B relates to many entities from A (note that order is important)
- Many-to-One: symmetrical to One-to-Many
- Many-to-Many: many entities from A relate to many entities from B
`One` is a directed arrow, `Many` is an undirected arrow (line)
```tikz
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, positioning}

\begin{document}

\begin{tikzpicture}[
	scale=0.6, transform shape,
    % --- Styles defined in the previous turn ---
    % Keeping these for consistency, although not all are used in this specific diagram.
    entity/.style={
        rectangle,
        draw=black,
        thick,
        fill=blue!40,
        minimum width=3cm,
        minimum height=1cm,
        font=\sffamily\large
    },
    attribute/.style={
        ellipse,
        draw=black,
        thick,
        fill=teal,
        minimum width=2.5cm,
        minimum height=1.2cm,
        font=\sffamily\large
    },
    isa/.style={
        regular polygon,
        regular polygon sides=3,
        draw=black,
        thick,
        fill=gray,
        minimum size=1.5cm,
        inner sep=1pt,
        shape border rotate=0,
        font=\sffamily\large
    },
    line/.style={
        draw,
        thick,
        shorten >=1pt,
        shorten <=1pt
    },
    arrow/.style={
        ->,
        thick,
        shorten >=1pt,
        shorten <=1pt
    },
    % --- New styles for this diagram, matching the established visual theme ---
    label text/.style={
        font=\sffamily\huge,
        anchor=west
    },
    set ellipse/.style={
        ellipse,
        draw=black,
        thick,
        minimum width=2cm,
        minimum height=4.5cm,
        align=center
    },
    set element/.style={
        font=\sffamily\Large,
        inner sep=2pt
    },
    relationship diamond/.style={
        diamond,
        draw=black,
        thick,
        fill=gray, % Matching the gray fill style
        minimum width=2.5cm,
        minimum height=2cm,
        aspect=1.2
    }
]

    % ================= Row 1: one-to-one =================
    % 1. Text Label
    \node[label text] (lbl1) at (0,0) {one-to-one};

    % 2. Set Diagram
    \node[set ellipse] (setA1) at (6,0) {};
    \node[set ellipse] (setB1) at (9,0) {};

    % Place elements inside sets
    \node[set element] (a1_1) at (setA1.north) [yshift=-1.2cm] {1};
    \node[set element] (a1_2) at (setA1.center) {2};
    \node[set element] (a1_3) at (setA1.south) [yshift=1.2cm] {3};

    \node[set element] (b1_a) at (setB1.north) [yshift=-1cm] {a};
    \node[set element] (b1_b) at (setB1.center) [yshift=0.7cm] {b};
    \node[set element] (b1_c) at (setB1.center) [yshift=-0.7cm] {c};
    \node[set element] (b1_d) at (setB1.south) [yshift=1cm] {d};

    % Draw connections (1-a, 2-c, 3-d)
    \draw[line] (a1_1) -- (b1_a);
    \draw[line] (a1_2) -- (b1_c);
    \draw[line] (a1_3) -- (b1_d);

    % 3. ER Notation
    \node[relationship diamond] (rel1) at (15,0) {};
    \draw[arrow] (rel1.west) -- +(-2.5,0); % Arrow pointing left
    \draw[arrow] (rel1.east) -- +(2.5,0);  % Arrow pointing right


    % ================= Row 2: one-to-many =================
    % 1. Text Label
    \node[label text] (lbl2) at (0,-5) {one-to-many};

    % 2. Set Diagram
    \node[set ellipse] (setA2) at (6,-5) {};
    \node[set ellipse] (setB2) at (9,-5) {};

    % Place elements
    \node[set element] (a2_1) at (setA2.north) [yshift=-1.2cm] {1};
    \node[set element] (a2_2) at (setA2.center) {2};
    \node[set element] (a2_3) at (setA2.south) [yshift=1.2cm] {3};

    \node[set element] (b2_a) at (setB2.north) [yshift=-1cm] {a};
    \node[set element] (b2_b) at (setB2.center) [yshift=0.7cm] {b};
    \node[set element] (b2_c) at (setB2.center) [yshift=-0.7cm] {c};
    \node[set element] (b2_d) at (setB2.south) [yshift=1cm] {d};

    % Draw connections (1-b, 1-c, 2-d)
    \draw[line] (a2_1) -- (b2_b);
    \draw[line] (a2_2) -- (b2_b);
    \draw[line] (a2_3) -- (b2_d);

    % 3. ER Notation
    \node[relationship diamond] (rel2) at (15,-5) {};
    \draw[line] (rel2.west) -- +(-2.5,0); % Line on left ("many" side)
    \draw[arrow] (rel2.east) -- +(2.5,0);  % Arrow on right ("one" side)


    % ================= Row 3: many-to-many =================
    % 1. Text Label
    \node[label text] (lbl3) at (0,-10) {many-to-many};

    % 2. Set Diagram
    \node[set ellipse] (setA3) at (6,-10) {};
    \node[set ellipse] (setB3) at (9,-10) {};

    % Place elements
    \node[set element] (a3_1) at (setA3.north) [yshift=-1.2cm] {1};
    \node[set element] (a3_2) at (setA3.center) {2};
    \node[set element] (a3_3) at (setA3.south) [yshift=1.2cm] {3};

    \node[set element] (b3_a) at (setB3.north) [yshift=-1cm] {a};
    \node[set element] (b3_b) at (setB3.center) [yshift=0.7cm] {b};
    \node[set element] (b3_c) at (setB3.center) [yshift=-0.7cm] {c};
    \node[set element] (b3_d) at (setB3.south) [yshift=1cm] {d};

    % Draw connections (1-a, 1-b, 2-a, 2-c, 3-d)
    \draw[line] (a3_1) -- (b3_a);
    \draw[line] (a3_1) -- (b3_b);
    \draw[line] (a3_2) -- (b3_a);
    \draw[line] (a3_2) -- (b3_c);
    \draw[line] (a3_3) -- (b3_d);

    % 3. ER Notation
    \node[relationship diamond] (rel3) at (15,-10) {};
    \draw[line] (rel3.west) -- +(-2.5,0); % Line on left ("many" side)
    \draw[line] (rel3.east) -- +(2.5,0);  % Line on right ("many" side)

\end{tikzpicture}

\end{document}
```
### Attributes on relationships
It is possible to add attributes on relationships,
i.e. `each pair of A, B is associated with attribute x`
This attribute can also be **Identifying**
### Multiway relationships
A relationships between more than two entity sets is called multiway
Multiway relationships can represent multi-dependencies:
- Agency X Invoice X Person X date $\to$ Car
- Agency X Invoice X Car X date $\to$ Person
```tikz
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, positioning, calc}

\begin{document}

\begin{tikzpicture}[
    entity/.style={
        rectangle, 
        draw=black, 
        thick, 
        fill=blue!40, 
        minimum width=3cm, 
        minimum height=1cm, 
        font=\sffamily\large
    },
    attribute/.style={
        ellipse, 
        draw=black, 
        thick, 
        fill=teal, % Use the newly defined teal color
        minimum width=2.5cm, 
        minimum height=1.2cm, 
        font=\sffamily\large
    },
    relationship/.style={
        diamond, 
        draw=black, 
        thick, 
        fill=gray, 
        aspect=1.5, 
        minimum width=2cm, 
        minimum height=1cm, 
        font=\sffamily\large
    },
    line/.style={
        draw, 
        thick, 
        shorten >=1pt, 
        shorten <=1pt
    },
    arrow/.style={
        ->,
        thick, 
        shorten >=1pt, 
        shorten <=1pt
    }
]

    % Central Relationship
    \node[relationship] (rental) at (0,0) {Rental};

    % Entities
    \node[entity] (agency) [above left=1cm and 2cm of rental] {Agency};
    \node[entity] (invoice) [above right=1cm and 0.5cm of rental] {Invoice};
    \node[entity] (car) [right=2cm of rental] {Car};
    \node[entity] (person) [below=1cm of rental] {Person};

    % Attribute with teal fill
    \node[attribute] (date) [left=2cm of rental] {date};

    % Connections
    \draw[line] (rental) -- (agency);
    \draw[line] (rental) -- (invoice);
    \draw[arrow] (rental) -- (car);
    \draw[arrow] (rental) -- (person);
    \draw[line] (rental) -- (date);

\end{tikzpicture}

\end{document}
```
It is possible to convert a multiway relationship to a set of binary relationships, but some information will be lost(!)
### Subclasses in E/R
Subclasses are represented with an `IsA` relationship (triangle nodes) between two entity sets
```tikz
\usepackage{tikz}
\usetikzlibrary{shapes.geometric, positioning, calc}

\begin{document}

\begin{tikzpicture}[
    % --- Styles provided by user ---
    entity/.style={
        rectangle,
        draw=black,
        thick,
        fill=blue!40,
        minimum width=3cm,
        minimum height=1cm,
        font=\sffamily\large
    },
    attribute/.style={
        ellipse,
        draw=black,
        thick,
        fill=teal, % Using the requested teal fill
        minimum width=2.5cm,
        minimum height=1.2cm,
        font=\sffamily\large
    },
    % "isa" style derived from the user's "relationship" style (gray fill, thick border)
    % but using a triangle shape required for this specific diagram type.
    isa/.style={
        regular polygon,
        regular polygon sides=3,
        draw=black,
        thick,
        fill=gray,
        minimum size=1.5cm,
        inner sep=1pt,
        shape border rotate=0,
        font=\sffamily\large
    },
    line/.style={
        draw,
        thick,
        shorten >=1pt,
        shorten <=1pt
    }
]

    % --- Nodes ---

    % 1. Superclass Entity
    \node[entity] (person) {Person};

    % 2. Attributes of Person
    % Positioned above, fanning out
    \node[attribute] (name) [above=2cm of person] {name};
    \node[attribute] (id) [left=0.5cm of name, yshift=-0.5cm] {\underline{ID}}; % Underlined ID
    \node[attribute] (address) [right=0.5cm of name, yshift=-0.5cm] {address};

    % 3. Inheritance Relationships (ISA Triangles)
    % Split below the Person entity
    \node[isa] (isa_phys) [below left=1cm and 2.5cm of person.south] {isa};
    \node[isa] (isa_pat) [below right=1cm and 2.5cm of person.south] {isa};

    % 4. Subclass Entities
    \node[entity] (physician) [below=1cm of isa_phys] {Physician};
    \node[entity] (patient) [below=1cm of isa_pat] {Patient};

    % 5. Subclass Attributes
    \node[attribute] (specialty) [below=1cm of physician] {specialty};
    \node[attribute] (medhist) [below=1cm of patient] {medicalHistory};

    % --- Connections ---

    % Connecting Person to its attributes
    \draw[line] (person) -- (name);
    \draw[line] (person) -- (id);
    \draw[line] (person) -- (address);

    % Connecting Hierarchy (Person -> ISA -> Subclass)
    \draw[line] (person.south) -- (isa_phys.north);
    \draw[line] (person.south) -- (isa_pat.north);

    \draw[line] (isa_phys.south) -- (physician.north);
    \draw[line] (isa_pat.south) -- (patient.north);

    % Connecting Subclasses to their attributes
    \draw[line] (physician) -- (specialty);
    \draw[line] (patient) -- (medhist);

\end{tikzpicture}

\end{document}
```
### Constraints in E/R
- Keys
- Single value
- Referential integrity
- Others
#### Referential integrity
Referential integrity refers to a `NOT NULL` constraint on relationships, i.e. `FKs`
It is denoted with a special kind of arrow with rounded tip
```tikz
\usepackage{tikz}
% Add arrows.meta library for custom arrowheads
\usetikzlibrary{shapes.geometric, positioning, arrows.meta}

\begin{document}

\begin{tikzpicture}[
	scale=0.8, transform shape,
    node distance=2cm,
    font=\sffamily\Large,
    % --- Styles matching the image ---
    entity/.style={
        rectangle,
        draw=black,
        thick,
        fill=blue!40, % Light blue fill
        minimum width=4cm,
        minimum height=1.5cm,
        align=center
    },
    relationship/.style={
        diamond,
        draw=black,
        thick,
        fill=gray, % Gray fill
        aspect=1.5,   % Make the diamond wider
        minimum width=3cm,
        aspect=1.3,
        align=center
    },
    line/.style={
        draw,
        thick
    },
    % --- Custom Arrow Style ---
    % This defines the bar and open arrow tip seen in the image.
    % It uses the arrows.meta syntax.
    % -{...} means the arrow is at the end of the line.
    % Bar[sep=1.5pt] adds the vertical bar with a small separation.
    % Straight Barb[open, ...] adds the open arrow tip.
    mandatory-one-arrow/.style={
        -{Arc Barb[open, length=3mm, width=5mm]},
        thick
    }
]

    % --- Nodes ---
    % Place the central relationship node first
    \node[relationship] (makes) {makes};

    % Place the entities relative to the relationship
    \node[entity, left=of makes] (product) {Product};
    \node[entity, right=of makes] (company) {Company};

    % --- Connections ---
    % Simple line from Product to makes
    \draw[line] (product) -- (makes);

    % Line with the custom arrow from makes to Company
    \draw[mandatory-one-arrow] (makes) -- (company);

\end{tikzpicture}

\end{document}
```
#### Referential integrity and weak entity sets
One entity identifier might depend on another, i.e. relationship is part of the key
In this case, entity and relationship have a double outline.
#### Other constraints
Other constraints are listed as annotations on edges of relationships

---
## Converting E/R diagram to a DB Schema
### Translations
- Entity sets are always converted to relations(tables)
- Many-to-Many relationships are also converted to connecting "helper" tables
- One-to-Many relationships are recorded in the "Many" table as an additional column(attribute)
- Subclasses are converted into separate tables with the same key as the superclass(!)
- Constraints
	- Keys are converted to Primary keys
	- Relationships
		- Many-to-Many: FKs in the connecting table, note that multiway relationships are also converted into one connecting table with more FKs
		- Many-to-One: FK in the "Many" relation referencing the "One" relation
		- One-to-One: unidirectional Many-to-One + `UNIQUE` or bidirectional Many-to-One
	- Referential integrity is converted to `NOT NULL`
	- Other constraints are converted to `CHECK` and assertions
### Finding the keys
- Key of an Entity set
	- direct or inherited key attributes of the entity set
	- key attributes of entity sets it depends on (recursively)
- Key of a Many-to-Many relationship
	- direct key attributes of the relationship
	- keys of related entity sets
- Key of a Many-to-One relationship
	- direct key attributes of the relationship
	- keys of related "Many" entity sets
