# MERN Stack E-Commerce Application

*Create and Clone the GitHub Repository*

```bash
git clone <https://github.com/iamrudro/E-Commerce.git>
```

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

### **Git Push #9 | **

### **Git Push #10 | **


