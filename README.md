# EE547_final_project

To use the file and view the webpages:

## View on AWS server
HTTP address: http://54.215.73.132/


## View Locally
### step 1: Install all dependencies. 

```
npm install
```

### step 2: Start the server. 
```
npm start
```
### Local address
HTTP address: http://localhost:3000

# File Structure
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
### Home and Login API
<img src="https://user-images.githubusercontent.com/63425702/207232564-1a9cb1fe-ba4c-4965-b527-cd6bcce89fb1.jpg" alt="Home and Login API" width="600" height="200" >

### Search and View Post API
<img src="https://user-images.githubusercontent.com/63425702/207232775-671f6fa0-6f3b-4f32-aba8-dc52ccfab4e2.jpg" alt="Search and View Post API" width="600" height="150">

### Profile Page API
<img src="https://user-images.githubusercontent.com/63425702/207233590-e470d6ab-df7f-4637-ae82-3429ad9ee5f5.jpg" alt="Profile page API" width="600" height="300">

### Navigation Bar API
<img src="https://user-images.githubusercontent.com/63425702/207233662-6911a465-adcd-4bc5-9f67-886270db1078.jpg" alt="Navigation Bar" width="500" height="150">

