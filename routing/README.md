For Routing :-

1. Introduction
    1. here the routing is done by file system.
    2. Index.js is the homepage of the routing.

2. routing pages (profile and about page)
    1. Files are created inside the pages folder and that becomes your route. with the pagename as route url and component inside the page is rendered on calling the url.

3. Nested Routes (blog folder)
    1. Nested routes can be made by creating the folder inside pages folder. and homepage of that folder should be named index.js filename 

4. Dynamic Routes (product folder)
    1. Dynamic routes can be made by naming the file as [productId].js . the product id canbe accessed inside the component by using useRouter hook of nextJs.

5. Nested Dynamic Routes (product folder)
    1. for creating nesting in dynamic routes make a folder of [productId] and then create a folder of review in it and make a file named [reviewId]..  url :- localhost:3000/product/milk/review/awesome

6. catch all routes
    1. [...slug] will take all the routes /shops/12/1212/212   ///  /shops/ammimal
    2. [[...slug]] will take all the routes but it will also take the home route of /shop 

7. Linking routes (products index.js)
    1. Link component in nextjs is used to create a link between 2 pages.
    2. 'replace' prop on product-3 will navigate the user to home page if he clicks back button
    3. This is used for client side routing
    4. if you are making a request to external website the you must use anchor tag 
    5. if you use anchor tag for client side routing it would make another web request. and your app can    lose some of the states.

8. Linking Routes programatically. (index.js) Home Page
    1. This is done by using userouter hook and push method in it.
    2. it even has replace method which does the same work of navigating directly to HomePage.

9. Custom 404 Page can be directly made by giving the name 404.js and keeping it in pages folder.