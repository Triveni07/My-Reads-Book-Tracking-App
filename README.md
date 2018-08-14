# MyReads: A Book Tracking App

This is a bookshelf app that allows user to select and categorize books one has read, is currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.
## Table of Contents :
* ### Installation
* ### Specification
* ### Usage
* ### Credits
* ### License

### 3. _Installation_
The application was created with create-react-app and requires only npm install and npm start to get it installed and launched.

    In your terminal or command line, navigate to the directory containing this project
    npm install
    npm start

### 1. _Specification_
* Main Page:
   > a) The main page shows 3 shelves for books, and each book is shown on the correct shelf.

   > b) The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
   
   > c)  When the browser is refreshed, the same information is displayed on the page.

 * Search Page:
    > a) The search page has a search input field:

    > b) The search page behaves correctly:
     1. As the user types into the search field, books that match the query are displayed on the page.
    2.  Search results are not shown when all of the text is deleted out of the search input box.
    3. Invalid queries are handled and prior search results are not shown.
    4. The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
    5. The user is able to search for multiple words, such as “artificial intelligence.”

    > c) Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
    
    > d) If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
    
    > e) When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
    
* Routing:
    > a) The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.

    > b) The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.

* Code Functionality:
    > a) Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.

    > b) Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
    
    > c) All JSX code is formatted properly and functional.


### 4. _Usage_
1) User can move books on respective bookshelves as "Currently Reading", "Want To Read", "Read" and "None" as default.
2) User can update any book's shelf category.
3) User can search for a book and update it's shelf.
4) User can notice any book's current shelf category.
5) User can navigate to home page and search page forth and back.

### 5. _Credits_
__The starter code for the My Reads- A Book Tracking App website is from Udacity__

### 6. _License_
MIT License
Copyright (c) [2018] [Triveni Vikrant Londhe]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


