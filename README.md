<p align="center">
  <img src="https://your-image-url.com/logo.png" width="150" alt="E-Commerce Logo">
</p>

<h1 align="center">MERN E-Commerce Application</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Current%20Version-1.0.0-brightgreen">
  <img src="https://img.shields.io/badge/Made%20in-Python3-blue">
  <img src="https://img.shields.io/badge/License-GPL%20v3-yellow">
  <img src="https://img.shields.io/badge/Run%20Tests-passing-brightgreen">
  <img src="https://img.shields.io/badge/lines%20of%20code-1.5K-pink">
</p>


*Create and Clone the GitHub Repository*

```bash
git clone <https://github.com/iamrudro/E-Commerce.git>
```
<details>
<summary>Git Push to 10</summary>

### **Git Push #4 | Installation of Node.js, MongoDB, Postman**

1. Download Node.js
2. Download MongoDB Compass 
```browser
https://www.mongodb.com/try/download/community
```
3. Mongo Shell
```
https://www.mongodb.com/try/download/shell
```
- Extraction Path for MongoSh - C:\Program Files\MongoDB
- Add path to environment variable
- To check -> 
```cmd
mongosh
```
- To check existing Database Details -> ```$ show dbs```
4. PostMan
```browser
https://www.postman.com/downloads/
```
### **Git Push #5 | Project Folders Setup & Server Creation**
- We will at first work on the *backend* then procced to *frontend*
- In Terminal Run ```npm init -y``` , it will create the `package.json` file.
- Next Install express and dotenv ```npm i express dotenv```
- Refer ```Notes.txt``` for thoery
- Inside ```Backend``` Folder
    1. Create ***```app.js```***
    2. Create ***```server.js```***
- Installing nodemon ```npm i nodemon```
  * The use of nodemon is that , whenever we change something automatically the application will restart.
- Inside ```package.json``` , edit the 'scripts' tag with -> ***` "start": "nodemon backend/server.js" `***
-  Now in terminal ***``` npm run start ```***
-  Again inside backend folder - create a folder named ***` config `*** and create a file within name ***` config.env `***

### **Git Push #6 | Routes, Controllers, API & Professional Folder Structure**
- Working and testing on routes in Postman
- For handling various requests(GET,POST,DELETE etc) a better folder structure is need to be created rather than writing them in server.js
    * Create folders inside backend folder named ***```controller```*** and ***```routes```***
    * And then inside ***```routes```*** folder create ***```productRoutes.js```***
    * And also inside ***```controller```*** folder create ***```productController.js```***


### **Git Push #7 | Connecting Website to MongoDB for Seamless Data Management**
- Create a file named ***```db.js```*** inside ***```\backend\config```***
- Install ```npm i mongoose```

### **Git Push #8 | Building a Product Schema in MongoDB with Mongoose**
- Inside *backend* folder create a folder named *models*
- Then inside *models* folders create ***```productModel.js```***

### **Git Push #9 | Creating Products API and Testing with Postman**

### **Git Push #10 | Fetching All Products from MongoDB**

</details>

<details>
<summary>Git Push to 11 to 20</summary>

### **Git Push #11 | Updating Existing Product in MongoDB and Testing with Postman**

### **Git Push #12 | Deleting Existing Product from MongoDB and Testing with Postman**

### **Git Push #13 | Fetching Single Product from MongoDB and Refactoring Code**

### **Git Push #14 | Backend Error Handling**
- Inside *backend* folder create a folder named *utils*
- Then inside *utils* folder create a file named ***```handleError.js```***
- Again inside *backend* folder create a folder named *middleware*
- Then inside *middleware* folder create a file named ***```error.js```***

### **Git Push #15 | Backend-Handling Validation Errors**
- Inside *middleware* folder create a file named ***```handleAsyncError.js```***

### **Git Push #16 | Handle Promise Rejection Errors**

### **Git Push #17 | Handle Backend Uncaught Exception Errors**

### **Git Push #18 | Handle MongoDB Errors**

### **Git Push #19 | Search Functionality**
- Inside *utils* folder create a file named ***```apiFunctionality.js```***
- This file is created if we want to do searching or filtering or if we want to apply pagination.

### **Git Push #20 | Category Filter Functionality**

</details>

<details>
<summary>Git Push to 21 to 30</summary>

### **Git Push #21 | Pagination Functionality - Part 1**

### **Git Push #22 | Pagination Functionality - Part 2**

### **Git Push #23 | Working on User Authentication - Creating User Schema**
- Inside *models* folders create ***```userModel.js```***
- Install ```npm i validator```

### **Git Push #24 | Register User Functionality**
- Inside ***```controller```*** folder create ***```userController.js```***
- Inside ***```routes```*** folder create ***```userRoutes.js```***

### **Git Push #25 | Password Hashing using Bcryptjs**
- Install ```npm i bcryptjs```

### **Git Push #26 | JSON Web Token (JWT)**
- Install ```npm i jsonwebtoken```

### **Git Push #27 | MongoDB Duplicate Key Error**

### **Git Push #28 | Login User Functionality**

### **Git Push #29 | Verify Password using bcryptjs**

### **Git Push #30 | Setting Cookie and Refactoring Code**
- Inside *utils* folders create ***```jwtToken.js```***

</details>

<details>
<summary>Git Push to 31 to 40</summary>

### **Git Push #31 | Verifying User Authentication**
- Install ```npm i cookie-parser```
- Inside *middleware* folder create a file named ***```userAuth.js```***

### **Git Push #32 | Logout User Functionality**

### **Git Push #33 | User Authorization - Role Based Access**

### **Git Push #34 | Refer User Model ID in Product Model**

### **Git Push #35 | Generating Reset Token using crypto package**
- Install ```npm i crypto```
- Inside *backend* folders create a temporary file(for testing crypto) as ***```index.js```***

### **Git Push #36 | Password Request Reset Function**

### **Git Push #37 | Generate Reset URL for Password Reset**

### **Git Push #38 | Working on Nodemailer**
- Inside *utils* folder create a file named ***```sendEmail.js```***
- Install ```npm i nodemailer```

### **Git Push #39 | Generate App Password for Sending Emails**

### **Git Push #40 | Sending Reset Password Email**

</details>

<details>
<summary>Git Push to 41 to 50</summary>

### **Git Push #41 | Reset Password using token** 

### **Git Push #42 | Get User Profile Details API**

### **Git Push #43 | Update User's Existing Password**

### **Git Push #44 | Update User's Profile**

### **Git Push #45 | Working on Admin Routes**

### **Git Push #46 | Admin Routes - Get All Products**

### **Git Push #47 | Admin Routes - Access All Users**

### **Git Push #48 | Admin Routes - Access Single User Information**

### **Git Push #49 | Admin Routes - Update User Role**

### **Git Push #50 | Admin Routes - Delete User Profile**

</details>

<details>
<summary>Git Push to 51 to 60</summary>

### **Git Push #51 | Create and Update Product Review** 

### **Git Push #52 | Get all product reviews**

### **Git Push #53 | Delete Product Reviews**

### **Git Push #54 | Create Order Schema**
- Inside *models* folder create a file named ***```orderModel.js```***

### **Git Push #55 | Create New Order**
- Inside *controller* folder create a file named ***```orderController.js```***
- Inside *routes* folder create a file named ***```orderRoutes.js```***

### **Git Push #56 | Admin Route - Get Single Order**

### **Git Push #57 | Get Logged-In User Orders**

### **Git Push #58 | Admin Route - Get All Orders**

### **Git Push #59 | Admin Route - Update Order Status**

### **Git Push #60 | Admin Route - Update Product Stock**

</details>

<details>
<summary>Git Push to 61 to 70</summary>

### **Git Push #61 | Admin Route - Delete Delivered Order** 
- Backend completed

### **Git Push #62 | Frontend and React Router Setup**
- Inside frontend folder , install React ```npm create vite@latest```
- Install ```npm i react-router-dom```
- Inside ```src``` folder create a folder named ```pages```
- Then inside ```pages``` folder create the file ```Home.jsx```

### **Git Push #63 | **

### **Git Push #64 | **

### **Git Push #65 | **

### **Git Push #66 | **

### **Git Push #67 | **

### **Git Push #68 | **

### **Git Push #69 | **

### **Git Push #70 | **

</details>

<details>
<summary>Git Push to 71 to 80</summary>

### **Git Push #71 | ** 

### **Git Push #72 | **

### **Git Push #73 | **

### **Git Push #74 | **

### **Git Push #75 | **

### **Git Push #76 | **

### **Git Push #77 | **

### **Git Push #78 | **

### **Git Push #79 | **

### **Git Push #80 | **

</details>