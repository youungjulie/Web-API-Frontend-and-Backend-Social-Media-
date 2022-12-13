# EE547_final_project

To use the file and view the webpages:

## step 1: Install all dependencies. 

```
npm install
```

## step 2: Start the server. 
```
npm start
```
----
File Structure
```
.
├── public                  # public files manage user inferface
│   ├── css                 # Frontend css files
│   ├── images              # Default images: profile image
│   └── js                  # javascript files contains common function and page specific functions
├── routes                  # API routes for each webpages
│   └── api                 # API routes with ./api/posts or ./api/users
├── schemas                 # Schemas for objects in the database (Users and Posts)
├── views                   # pug engine for each webpages, simplify the html design
├── app.js                  # main file for the REST API
├── middleware.js           # middleware functions, such as require login
├── database.js             # connect the MongoDB
└── README.md
```
Others are dependencies and .gitignore files. 

## API structure

