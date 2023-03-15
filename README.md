# How to scrape Amazon products using Node.js and Puppeteer

Simple POC of Puppeteer use for scraping Amazon products.

## Installation

```
npm install
```

## Launch


```
npm run scrape ${your_query}
```

For example:

```
npm run scrape "Javascript Books"
```


## Output

```
npm run scrape "Javascript book"

> amazon-puppeteer@1.0.0 scrape
> node scrape.js Javascript book

[
  {
    title: 'Python Programming and SQL: 5 books in 1 - The #1 Coding Course from Beginner to Advanced. Learn it Well & Fast (2023) (Computer Programming)',
    price: 0,
    image: 'https://m.media-amazon.com/images/I/81r56C+F61L._AC_UL320_.jpg'
  },
  {
    title: 'Front-End Back-End Development with HTML, CSS, JavaScript, jQuery, PHP, and MySQL',
    price: 79.68,
    image: 'https://m.media-amazon.com/images/I/711VNDOe88L._AC_UL320_.jpg'
  },
  {
    title: 'Learning PHP, MySQL & JavaScript: A Step-by-Step Guide to Creating Dynamic Websites (Learning PHP, MYSQL, Javascript, CSS & HTML5)',
    price: 21.1,
    image: 'https://m.media-amazon.com/images/I/9170aXRA4PS._AC_UL320_.jpg'
  },
  {
    title: 'Learn to Code With JavaScript',
    price: 19.76,
    image: 'https://m.media-amazon.com/images/I/61m8OEe4BpL._AC_UL320_.jpg'
  },
  {
    title: 'Aprendiendo JavaScript: Desde cero hasta ECMAScript 6+. (Spanish Edition)',
    price: 14.85,
    image: 'https://m.media-amazon.com/images/I/6137upbz66L._AC_UL320_.jpg'
  },
  {
    title: "Learn React with TypeScript: A beginner's guide to reactive web development with React 18 and TypeScript, 2nd Edition",
    price: 39.99,
    image: 'https://m.media-amazon.com/images/I/51+xOpy7QML._AC_UL320_.jpg'
  },
  {
    title: 'HTML, CSS & JavaScript in easy steps',
    price: 20.49,
    image: 'https://m.media-amazon.com/images/I/81grclmjdSL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript: A Detailed Approach to Practical Coding (Step-By-Step JavaScript Book 2)',
    price: 0,
    image: 'https://m.media-amazon.com/images/I/71xrRLC8IIL._AC_UL320_.jpg'
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    price: 36.81,
    image: 'https://m.media-amazon.com/images/I/A1O2e-E1WkL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
    price: 49.99,
    image: 'https://m.media-amazon.com/images/I/718DC5KZiZL._AC_UL320_.jpg'
  },
  {
    title: "Murach's JavaScript and jQuery (4th Edition)",
    price: 59.5,
    image: 'https://m.media-amazon.com/images/I/71GGGiPBHjL._AC_UL320_.jpg'
  },
  {
    title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
    price: 29.99,
    image: 'https://m.media-amazon.com/images/I/51EyrsWbMGL._AC_UL320_.jpg'
  },
  {
    title: 'Learning JavaScript: JavaScript Essentials for Modern Application Development',
    price: 30.49,
    image: 'https://m.media-amazon.com/images/I/71i0JM1V6DL._AC_UL320_.jpg'
  },
  {
    title: 'PHP, MySQL, & JavaScript All-in-One For Dummies',
    price: 30.99,
    image: 'https://m.media-amazon.com/images/I/81ndA7YuKYL._AC_UL320_.jpg'
  },
  {
    title: 'Laws of UX: Using Psychology to Design Better Products & Services',
    price: 24.99,
    image: 'https://m.media-amazon.com/images/I/71aZV6-7-qL._AC_UL320_.jpg'
  },
  {
    title: 'Object-Oriented JavaScript: Learn everything you need to know about object-oriented JavaScript (OOJS), 3rd Edition',
    price: 46.99,
    image: 'https://m.media-amazon.com/images/I/71BuEIIncGL._AC_UL320_.jpg'
  },
  {
    title: "Build Your Own Programming Language: A programmer's guide to designing compilers, interpreters, and DSLs for solving modern computing problems",
    price: 34.25,
    image: 'https://m.media-amazon.com/images/I/71LhuxmxmkL._AC_UL320_.jpg'
  },
  {
    title: 'The Recursive Book of Recursion: Ace the Coding Interview with Python and JavaScript',
    price: 35.99,
    image: 'https://m.media-amazon.com/images/I/81fNWO1d4pL._AC_UL320_.jpg'
  },
  {
    title: 'Get Coding!: Learn HTML, CSS & JavaScript & Build a Website, App & Game',
    price: 11.59,
    image: 'https://m.media-amazon.com/images/I/81Hs6eTF0FL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript Coding Book for Beginners, Web Development Crash Course: Head First JavaScript Programming Book for Modern Software Engineering, JavaScript The Definitive Guide for Coding Interview',
    price: 0,
    image: 'https://m.media-amazon.com/images/I/7159Mue64-L._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript All-in-One For Dummies',
    price: 39.99,
    image: 'https://m.media-amazon.com/images/I/81fArR0+MML._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript: Advanced Features and Programming Techniques (Step-By-Step JavaScript Book 3)',
    price: 0,
    image: 'https://m.media-amazon.com/images/I/71GgQmakIgL._AC_UL320_.jpg'
  },
  {
    title: 'HTML, CSS, and JavaScript All in One: Covering HTML5, CSS3, and ES6, Sams Teach Yourself',
    price: 35.99,
    image: 'https://m.media-amazon.com/images/I/41YuXiubLOL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript Explained: Step-by-Step Guide to the Most Common and Reliable JS Techniques',
    price: 24.99,
    image: 'https://m.media-amazon.com/images/I/41FxYM1UMLL._AC_UL320_.jpg'
  },
  {
    title: 'The JavaScript Cooking Book: Learn JavaScript from the ground-up (The cooking book of the modern JavaScript and TypeScript developer)',
    price: 25,
    image: 'https://m.media-amazon.com/images/I/61VEojPSWxL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript For Kids For Dummies (For Dummies (Computers))',
    price: 21.99,
    image: 'https://m.media-amazon.com/images/I/81kn+5JRdsL._AC_UL320_.jpg'
  },
  {
    title: 'Learn Coding Basics in Hours with JavaScript',
    price: 3.99,
    image: 'https://m.media-amazon.com/images/I/61X+xSZhB4L._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript in easy steps',
    price: 12.89,
    image: 'https://m.media-amazon.com/images/I/819DHHJyVuL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript Cheat Sheet, Cover all Basic JavaScript Syntaxes, A Reference Guide: JavaScript Programming Syntax Book, Syntax Table & Chart, Quick Study Workbook (Syntax Series)',
    price: 13.99,
    image: 'https://m.media-amazon.com/images/I/61gvb1aSYcL._AC_UL320_.jpg'
  },
  {
    title: "JavaScript Coding for Teens: A Beginner's Guide to Developing Websites and Games",
    price: 19.54,
    image: 'https://m.media-amazon.com/images/I/711ELrJQutL._AC_UL320_.jpg'
  },
  {
    title: 'Modern JavaScript for the Impatient',
    price: 34.99,
    image: 'https://m.media-amazon.com/images/I/51SJg5VOOWL._AC_UL320_.jpg'
  },
  {
    title: 'Professional JavaScript for Web Developers',
    price: 30.49,
    image: 'https://m.media-amazon.com/images/I/61b03PRisyL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript for Kids: A Playful Introduction to Programming',
    price: 34.95,
    image: 'https://m.media-amazon.com/images/I/81sKWdNmSpL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript Cookbook: Programming the Web',
    price: 36.41,
    image: 'https://m.media-amazon.com/images/I/81GeW25Tf0L._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript: Programming Basics for Absolute Beginners (Step-By-Step JavaScript Book 1)',
    price: 0,
    image: 'https://m.media-amazon.com/images/I/71K4vYUxA3L._AC_UL320_.jpg'
  },
  {
    title: "JavaScript: A Beginner's Guide, Fifth Edition",
    price: 33.79,
    image: 'https://m.media-amazon.com/images/I/614UQvBucTL._AC_UL320_.jpg'
  },
  {
    title: 'A Smarter Way to Learn JavaScript. The new tech-assisted approach that requires half the effort',
    price: 19.95,
    image: 'https://m.media-amazon.com/images/I/61dT97CMHoL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript Crash Course',
    price: 34.99,
    image: 'https://m.media-amazon.com/images/I/61GPOOOvgXL._AC_UL320_.jpg'
  },
  {
    title: 'Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)',
    price: 16.89,
    image: 'https://m.media-amazon.com/images/I/61HUuiDH+0L._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript: The Good Parts: The Good Parts',
    price: 13.69,
    image: 'https://m.media-amazon.com/images/I/81kqrwS1nNL._AC_UL320_.jpg'
  },
  {
    title: 'Coding with JavaScript For Dummies',
    price: 18.89,
    image: 'https://m.media-amazon.com/images/I/51-G-4SUzpL._AC_UL320_.jpg'
  },
  {
    title: 'Web Design with HTML, CSS, JavaScript and jQuery Set',
    price: 46.53,
    image: 'https://m.media-amazon.com/images/I/811a1DHT8OL._AC_UL320_.jpg'
  },
  {
    title: 'Head First JavaScript Programming: A Brain-Friendly Guide',
    price: 49.31,
    image: 'https://m.media-amazon.com/images/I/91Ss-Th23nL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript: The Comprehensive Guide to Learning Professional JavaScript Programming',
    price: 53.71,
    image: 'https://m.media-amazon.com/images/I/714Bhh248UL._AC_UL320_.jpg'
  },
  {
    title: 'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming',
    price: 20.11,
    image: 'https://m.media-amazon.com/images/I/91asIC1fRwL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript and jQuery: Interactive Front-End Web Development',
    price: 23.49,
    image: 'https://m.media-amazon.com/images/I/41y31M-zcgL._AC_UL320_.jpg'
  },
  {
    title: 'JavaScript from Beginner to Professional: Learn JavaScript quickly by building fun, interactive, and dynamic web apps, games, and pages',
    price: 33.29,
    image: 'https://m.media-amazon.com/images/I/71oZ45OrLjL._AC_UL320_.jpg'
  },
  {
    title: "JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language",
    price: 29,
    image: 'https://m.media-amazon.com/images/I/913tvBe7OOL._AC_UL320_.jpg'
  }
]

```

## Resources

<https://medium.com/@leogbrt/how-to-scrape-amazon-products-using-node-js-and-puppeteer-31d135ccf71e>