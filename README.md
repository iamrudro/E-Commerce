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

### **Git Push #63 | Working on Footer**
- Inside ```src``` folder create ```components``` folder
- Then inside ```components``` folder create ```Footer.jsx```
- Install ```npm i @mui/icons-material@mui/material @emotion/react @emotion/styled @mui/styled-engine```

### **Git Push #64 | Working on Navbar - Responsove Design**
- Then inside ```components``` folder create ```Navbar.jsx```

### **Git Push #65 | Image Slider**
- Then inside ```components``` folder create ```ImageSlider.jsx```

### **Git Push #66 | Diplay Products**
- Then inside ```components``` folder create ```Product.jsx```

### **Git Push #67 | Resuable Rating Component**
- Then inside ```components``` folder create ```Rating.jsx```

### **Git Push #68 | Create Dynamic Page Title**
- Then inside ```components``` folder create ```PageTitle.jsx```

### **Git Push #69 | State Management setup using Redux Toolkit**
- Install ```npm i @reduxjs/toolkit```
- Then inside ```src``` folder create a folder named ```app```
- Then inside ```src``` folder create a folder named ```features```
- in this project we have four features -> Product , User , Cart , Order .
- inside ```features``` folder create another folder named ```products```
- inside ```features/products``` folder create ```productSlice.js```
- inside ```app``` folder create ```store.js```
- Install ```npm i react-redux```

### **Git Push #70 | Fetch Product Data using API - createAsyncThunk**
- Install ```npm i axios```

</details>

<details>
<summary>Git Push to 71 to 80</summary>

### **Git Push #71 | Display API data in components - useSelector & useDispatch** 

### **Git Push #72 | Connect Frontend & Backend⭐**
- creating proxy port in ```vite.config.js``` for using the project in same server

### **Git Push #73 | Loader and Toastify - Error Handling Popup**
- inside ```components``` folder create ```Loader.jsx```
- Install ```npm i react-toastify```

### **Git Push #74 | Working on Product Details - Static Structure**
- inside ```pages``` folder create ```ProductDetails.jsx```

### **Git Push #75 | Fetch Single Product Details**

### **Git Push #76 | Render Product Details in UI**

### **Git Push #77 | Conditionally Render Stocks and Reviews**

### **Git Push #78 | Working on All Products - Static Structure**
- inside ```pages``` folder create ```Products.jsx```

### **Git Push #79 | 🔍Search Functionality - Access State**

### **Git Push #80 | 🔍Search Functionality - Access Keyword**

</details>

<details>
<summary>Git Push to 81 to 90</summary>

### **Git Push #81 | 🔍Search Functionality - Search API** 

### **Git Push #82 | ⚠️No Product Found Resuable Component**
- inside ```components``` folder create ```NoProduct.jsx```

### **Git Push #83 | Pagination API**

### **Git Push #84 | Reusable Pagination Component and Buttons**
- inside ```components``` folder create ```Pagination.jsx```

### **Git Push #85 | Pagination - Handle Page Change**

### **Git Push #86 | Working on Categories Filter**

### **Git Push #87 | Authentication - Registration Form**
- inside ```src``` folder create another folder named ```User```
- inside ```User``` folder create ```Register.jsx```

### **Git Push #88 | Registration Form - onChange Event Handler**

### **Git Push #89 | Registering User - onSubmit Event Handler**

### **Git Push #90 | Fetch Register API**
- in this project we have four features -> Product , User , Cart , Order .
- inside ```features``` folder create another folder ```user```
- inside ```features/user``` folder create ```userSlice.js```

</details>

<details>
<summary>Git Push to 91 to 100</summary>

### **Git Push #91 | Dispatch Register Action** 

### **Git Push #92 | Authentication - Login User Form**
- inside ```User``` folder create ```Login.jsx```

### **Git Push #93 | Fetch Login API**

### **Git Push #94 | Dispatch Login Action**

### **Git Push #95 | Complete Cloudinary Sign-Up Process**
- Cloudinary will provide cloud media management services for our website.
- Every images that will be uploaded in the project will be setup using Cloudinary.
- ```https://console.cloudinary.com/app/c-6278c7507afa89abc7806402422f0b/assets/media_library/folders/cb7bd03375092ddf43daa45f46307b382e?view_mode=list```
- Inside Root folder , the following packages will be installed
- ```npm i express-fileupload cloudinary```
- Express-fileupload is a middleware which will handle file uploads in our express application. 
- cloudinary is the official cloudinary SDK for managing and uploading media.
- At the end import cloudinary in the ```server.js```

### **Git Push #96 | Upload User Profile in Cloudinary**

### **Git Push #97 | Fetch Load User API**

### **Git Push #98 | Dispatch Load User Action**
- inside ```User``` folder create ```UserDashboard.jsx```

### **Git Push #99 | Create User Dashboard**

### **Git Push #100 | Fetch Logout API**

</details>

<details>
<summary>Git Push to 100 to 110</summary>

### **Git Push #101 | Dispatch Logout Action**

### **Git Push #102 | Static Structure of Profile Page**
- inside ```User``` folder create ```Profile.jsx```

### **Git Push #103 | Render Logged in User Information**

### **Git Push #104 | Protecting Routes**
- inside ```components``` folder create ```ProtectedRoute.jsx```

### **Git Push #105 | Editing/Updating Profile Form - Static Structure**
- inside ```User``` folder create ```UpdateProfile.jsx```

### **Git Push #106 | Working on Profile Image Update**

### **Git Push #107 | Fetch Update Profile API**

### **Git Push #108 | Dispatch Update Profile Action**

### **Git Push #109 | Display Data in Form**

### **Git Push #110 | Backend - Working on Updating Avatar**

</details>

<details>
<summary>Git Push to 111 to 120</summary>

### **Git Push #111 | Update/Change Password Form - Static Structure**
- inside ```User``` folder create ```UpdatePassword.jsx```

### **Git Push #112 | Fetch API for Update Password**

### **Git Push #113 | Dispatch Update Password Action**

### **Git Push #114 | Forgot Password Form**
- inside ```User``` folder create ```ForgotPassword.jsx```

### **Git Push #115 | Fetch Forgot Password API**

### **Git Push #116 | Dispatch Forgot Password Action**

### **Git Push #117 | Reset Password Form - Static Structure**
- inside ```User``` folder create ```ResetPassword.jsx```

### **Git Push #118 | Fetch API for Reset Password**

### **Git Push #119 | Dispatch Reset Password Action**

### **Git Push #120 | Increase and Decrease Cart Item Quantity**

</details>

<details>
<summary>Git Push to 121 to 130</summary>

### **Git Push #121 | Fetch Add Items to Cart API**
- in this project we have four features -> Product , User , Cart , Order .
- inside ```features``` folder create another folder named ```cart```
- inside ```features/cart``` folder create ```cartSlice.js```

### **Git Push #122 | Dispatch Add to cart Action**

### **Git Push #123 | Check for Existing Items in Cart Before Adding**

### **Git Push #124 | Designing the Cart Layout – Static Cart Component Setup**
- inside ```src``` folder create another folder named ```Cart```
- inside ```src/Cart``` folder create ```Cart.jsx```
- inside ```src/Cart``` folder create ```CartItem.jsx```

### **Git Push #125 | Render Cart Items & Update Quantity**

### **Git Push #126 | Remove Items from Cart**

### **Git Push #127 | Calculate Subtotal, Tax, Shipping & Total in Cart**

### **Git Push #128 | Checkout Handler Logic & Redirect Setup**

### **Git Push #129 | Shipping Info Component – Static Structure Setup**
- inside ```src/Cart``` folder create ```Shipping.jsx```

### **Git Push #130 | **

</details>

<details>
<summary>Git Push to 131 to 140</summary>

### **Git Push #131 | ** 

### **Git Push #132 | **

### **Git Push #133 | **

### **Git Push #134 | **

### **Git Push #135 | **

### **Git Push #136 | **

### **Git Push #137 | **

### **Git Push #138 | **

### **Git Push #139 | **

### **Git Push #140 | **

</details>

<details>
<summary>Git Push to 141 to 150</summary>

### **Git Push #141 | ** 

### **Git Push #142 | **

### **Git Push #143 | **

### **Git Push #144 | **

### **Git Push #145 | **

### **Git Push #146 | **

### **Git Push #147 | **

### **Git Push #148 | **

### **Git Push #149 | **

### **Git Push #150 | **

</details>

<details>
<summary>Git Push to 151 to 160</summary>

### **Git Push #151 | ** 

### **Git Push #152 | **

### **Git Push #153 | **

### **Git Push #154 | **

### **Git Push #155 | **

### **Git Push #156 | **

### **Git Push #157 | **

### **Git Push #158 | **

### **Git Push #159 | **

### **Git Push #160 | **

</details>


<details>
<summary>Git Push to 161 to 170</summary>

### **Git Push #161 | ** 

### **Git Push #162 | **

### **Git Push #163 | **

### **Git Push #164 | **

### **Git Push #165 | **

### **Git Push #166 | **

### **Git Push #167 | **

### **Git Push #168 | **

### **Git Push #169 | **

### **Git Push #170 | **

</details>