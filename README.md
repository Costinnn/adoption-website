# Animal adoption website
This is a React website, build using [Next.js v13.4.4](https://nextjs.org/) , [Prisma](https://www.prisma.io/) and [Mongo DB](https://www.mongodb.com/)

<img src="https://github.com/Costinnn/adoption-website/assets/103998434/160f7dc9-667d-4e85-83c9-21a888965437" width=70%>

## Introduction - project's aim
After creating an online store using the MERN stack, I was curious about the benefits of the Next.js framework and what you could do with it, uniting both client-side and server-side rendering pages. Although at the beginning it was a little difficult to think and structure the application according to the requirements of the Next.js framework, after a few days of practice you can already see the indisputable advantages that these technologies offer developers the ability to create high-performance and efficient applications.

The purpose of this application is to give every animal a second chance, so those interested in adopting an animal can search for their favorite, and those who want to offer a pet for adoption can create an account, add an ad with pictures, description and other information about the animal.

## Technologies

The technologies used in this project seem to me to be very efficient and oriented towards creating an efficient and easy-to-modify application in subsequent updates, and these are:

### React
React, a powerful library used in the front end of both applications, which helps you structure and organize in an easy-to-understand way, both javascript and jsx code.

### Next.js
Next.js a framework that brings major improvements to applications created with React that gives developers the option to create with server-side rendering and static websites.

### Prisma
Prisma was used to connect the application to database, to create models and to filter the posts that each page of the app needs.

### MongoDb
MongoDb is the database that I choosed to use for this project because of it's JSON-like data structure.

### HTML & SCSS
HTML & SCSS basic languages for web applications, I choosed SCSS over CSS only because it's nested structure, which helps me understand faster HTML components hierarchy.

## Dependencies :
### React-image-file-resizer (replaced with IMGbb direct links)
I used this package to compress the uploaded images, because if the size of the post was bigger that 10MB it wasn't uploaded to database.

### Axios
I used axios to fetch posts from database.

### Bcrypt
Bcrypt was used to hash the password before storing it to database, when a user register or login.

## What I learned?
This is the first project that I used Next.js and I learned about the structure of pages, the creation of API functions, the creation of client-based components in server-side pages and many other details related to this framework. I learnt about prisma, and how to filter, get, update or delete data in MongoDb. I deepened the work with images, how to store them in base64 and how to compress them to take less space in database.

## Functionalities

#### This is the main page where all the posts are displayed. Even if you are not logged, you can see the posts but you can't add them to favorites. On the top is navigation where you have icons for Wishlist, Account and Add new post. The posts can be filtered, using the categories menu.
<img src="https://github.com/Costinnn/adoption-website/assets/103998434/2d5ad3aa-e91d-45b9-b7ee-787316472e58" width=70%>.
======

#### To access more functionality of the website you can create an account and login safely with you credentials. After a successful login you'll be able to add posts to favorites or create new posts. When you're logged in you can access account menu, here you can see you active or inactive posts, you can change you account password or change your current name.
<img src="https://github.com/Costinnn/adoption-website/assets/103998434/c51eeb6e-7d12-406e-b02d-b32c1feb80c1" width=40%><img src="https://github.com/Costinnn/adoption-website/assets/103998434/019f590f-7771-4cf2-82d4-c6f2efc52ecb" width=40%>.
======

#### This is the page where you can add a new post, as you can see, each user can add up to 5 images per post and actually see a preview of them where you can delete each of them and add a new one. Here you can add all necessary information that a person would like to know when they decide to get a pet.
<img src="https://github.com/Costinnn/adoption-website/assets/103998434/c984acb5-5811-4e6a-b061-0f44198be044" width=70%>.
======

#### This is the page where you can see all details about the post. It contains an image gallery, general info about the post, location and the user that added it. If you're the owner of the post you'll be able to activate or deactivate, modify or delete the post. If you're not the owner of the post you'll not see these buttons.
<img src="https://github.com/Costinnn/adoption-website/assets/103998434/bd3e7736-05b3-4838-8a2d-04db15d60a6e" width=48%><img src="https://github.com/Costinnn/adoption-website/assets/103998434/1187a147-d157-4d71-89ca-b9746e489a8d" width=48%>.
======

#### This is the section for messages, you can start a new conversation and chat in real time
<img src="https://github.com/Costinnn/adoption-website/assets/103998434/3bcc6076-3bff-4fd7-9e7f-22eb620bf225" width=48%><img src="https://github.com/Costinnn/adoption-website/assets/103998434/a2e35581-d462-4b5e-931c-0553ac5585ac" width=48%>.
======

#### In case you want to change you password or name you can access this page  from the account menu.
<img src="https://github.com/Costinnn/adoption-website/assets/103998434/151dc4aa-442a-4e3f-ae90-3edfecf1f077" width=30%>.
======
## How to install the app on your computer

### Required environment variables:
NODE_ENV='development' # or "production"

DATABASE_URL= mongodb

NEXTAUTH_SECRET=

NEXTAUTH_JWT_SECRET=

NEXTAUTH_URL='http://localhost:3000'

NEXTAUTH_SESSION_URL='http://localhost:3000'

NEXT_PUBLIC_URL='http://localhost:3000'

NEXT_PUBLIC_PUSHER_APP_KEY=

PUSHER_APP_ID=

PUSHER_SECRET=

## Run the application
First, download the code and run 
```
npm install
```
then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

