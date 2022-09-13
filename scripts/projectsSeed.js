const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING
  ||
  "mongodb://localhost:27017"
);

const ProjectsSeed = [
  {
    src: 'https://res.cloudinary.com/denverdev/image/upload/v1616339904/DenverDev%20Website/note-app.jpg',
    className: 'note-app',
    title: 'Note Application',
    text: 'This Note application is build using React for the front end and uses "Serverless" framework to API to Amazon Web Services. The configuration allows a user to sign up and login and while logged in, users can save notes with a file attachment. AWS Congnito is used for user access management, Lambda functions access the AWS API Gateway to make CRUD, (Create, Read, Update and Delete), actions to collection in DynamoDB and an s3 bucket for the attachment. The users home page will render the notes saved in the database',
    tech: 'MongoDB | Express.js | React.js | Node.js | Serverless Framework | Amazon Web Services - IAM Roles | Cognito user pools | S3 bucket | DynamoDB | Amplify Auth | Netlify ',
    alt: 'Note Application',
    link: 'https://my-serverless-note-app-to-aws.netlify.app/',
    github: 'https://github.com/jaredseefried/serverless-note-app',
  },
  {
    src: 'https://res.cloudinary.com/denverdev/image/upload/v1616339906/DenverDev%20Website/Pandemic%20Tracker.jpg',
    className: 'pandemic-tracker',
    title: 'Pandemic Tracker',
    text: "The tracker is web application using MERN Stack, (MongoDB, Express.js, React.js and Node.js). The application uses React Globe and Generates Data from an external API to update the the state of the statistics container. Users can select a country and that specific countries Covid Data will populate. Additional API's to generate data by US State from a drop down menu as well as a New API that populates 2 news articles from the 'Covid' Keyword.",
    tech: 'MongoDB | Express.js | React.js | Node.js | React Globe | Axios | Bootstrap | Heroku',
    alt: 'My Pandemic Tracker in React',
    link: 'https://covid19-pandemic-tracker.herokuapp.com/',
    github: 'https://github.com/jaredseefried/covid19-pandemic-tracker',
  },
  {
    src: 'https://res.cloudinary.com/denverdev/image/upload/v1616339900/DenverDev%20Website/Chap%20Application.jpg',
    className: 'chat-app',
    title: 'Chat Application',
    text: 'This real-time chat app is a Node.js application which uses Express.js and Socket.io. Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.',
    tech: 'Socket.io | Node.js | JavaScript | Heroku',
    alt: 'Real time chat application with Socket.io',
    link: 'https://my-socketio-chat-app.herokuapp.com/',
    github: 'https://github.com/jaredseefried/socket.io-chat-app',
  },
  {
    src: 'https://res.cloudinary.com/denverdev/image/upload/v1616339900/DenverDev%20Website/employee-directory.jpg',
    className: 'employee-directory',
    title: 'Employee Directory',
    text: 'This employee directory is built using React.js and is a front end only application. The employee data is imported from a .json file and javascript .map and .sort methods are used to render the data upon search of terms. The app uses class components and changes the state of the list upon search.',
    tech: 'React.js | JavaScript | Heroku',
    alt: 'Employee Directory React Application',
    link: 'https://my-employee-directory-react.herokuapp.com/',
    github: 'https://github.com/jaredseefried/employee-directory-with-react',
  },
  {
    src: EatDaBurger,
    className: 'eat-da-burger',
    id: 5,
    title: 'Eat-Da-Burger',
    text: 'Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they would like to eat. This is a burger logger using MySQL and a homemade ORM (Object-relation mapping). The development architecture follows the MVC (Model View Controller) design pattern. Using Node and MySQL, we query and route data in the app and Handlebars to generate the HTML.',
    tech: 'MySQL | Sequelize | Node.js | Express.js | Handlebars.js | MVC (Model-Controller-View) Architecture | ORM | Heroku',
    alt: 'Eat-Da_Burger application using MySQL and Sequelize',
    link: 'https://eat-da-burger-mvc-mysql.herokuapp.com/',
    github: 'https://github.com/jaredseefried/Eat-Da-Burger',
  },
  {
    src: Weather,
    className: 'weather-dashboard',
    id: 6,
    title: 'Weather Dashboard',
    text: 'Using OpenWeather API I am retrieving weather data for cities entered in the search bar. Denver is the default city populated. As a user, I want to search for a city and I need to be presented with current weather conditions, temperature, humidity and wind speed. The web app is built on Node to act as a server side API.',
    tech: 'JavaScript | HTML | CSS | GitHub',
    alt: 'Weather Dashboard',
    link: 'https://jaredseefried.github.io/weather-dashboard/',
    github: 'https://github.com/jaredseefried/weather-dashboard',
  },
  {
    src: ShelfIndulgence,
    className: 'shelf-indulgence',
    id: 7,
    title: 'Shelf Indulgence',
    text: 'A book club community where book enthusiasts can join, login, and search for books via an API and discuss the books they are reading in a real time chat application. Search for books using an api, add those books to a database of books you want to read, and keep track of books you have read.',
    tech: 'JavaScript | MySQL and Sequelize | Passport Authentication | Express.js | Socket.io | Heroku',
    alt: 'Shelf Indulgence Book Club',
    link: 'https://shelf-indulgence-bc.herokuapp.com/',
    github: 'https://github.com/jaredseefried/shelf-indulgence',
  },
  {
    src: MealMatcher,
    className: 'meal-matcher',
    id: 8,
    title: 'Meal Matcher',
    text: 'Meal Matcher is a recipe application using an API to render recipe data when a user searched for an ingredient.',
    tech: 'JavaScript | RapidAPI | GitHub',
    alt: 'Meal Matcher API',
    link: 'https://jaredseefried.github.io/meal_matcher_javascript_ajax/',
    github: 'https://github.com/jaredseefried/meal_matcher_javascript_ajax',
  },

];

db.MyProject
  .remove({})
  .then(() => db.MyProject.collection.insertMany(ProjectsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
