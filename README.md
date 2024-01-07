# object-relational-mapping-homework



## Description
Object-Relational Mapping (ORM): E-Commerce Back End.
Build the back end for an e-commerce site by modifying starter code. Configure a working Express.js API to use Sequelize to interact with a MySQL database.
The API Routes to Perform RESTful CRUD Operations.


## Installation
clone the repository to your system, 
Create .env file,
SET DB_NAME to 'ecommerce_db',
SET DB_USER to 'YOUR-MYSQL-USERNAME',
SET DB_PASSWORD to 'YOUR-MYSQL-PASSWORD',
npm install,
Load schema.sql via MySQL command line:,
source schema.sql,
node seeds/index.js,
node server.js.

## Criteria
Connect to MySQL Database via Sequalize,
Create Dev Database via schema and seed commands,
API GET Routes display JSON formatted data,
GET will return ALL data in the sections below:,
GET Will return SINGLE data in the sections below:,
Categories,
Products,
Tags,
API POST, PUT, DELETE Routes,
Successfully Create, Update, and Delete data in Dev Database.
Associations,
Products BELONGS-TO Category,
Category HAS-MANY Product,
Prodcut BELONGS-TO Tag,
Tag BELONGS-TO-MANY Product.


### Associations

User need to execute association methods on Sequelize models to create the following relationships between them:

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.

> **Hint:** Make sure  set up foreign key relationships that match the column  created in the respective models.

In Insomnia, the user tests “GET tags,” “GET Categories,” and “GET All Products.
In Insomnia, the user tests “GET tag by id,” “GET Category by ID,” and “GET One Product.
In Insomnia, the user tests “DELETE Category by ID,” “CREATE Category,” and “UPDATE Category.

## Video link
https://watch.screencastify.com/v/7uyUnYJ40ATVTTAXXdgO


