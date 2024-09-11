import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = new Hono();

app.use('*', cors({
  origin: 'http://localhost:3000'
}));


app.get('/assets/*', (c) => {
  const filePath = path.join(__dirname, 'public', c.req.path.replace('/assets/', ''));
  try {
    const data = fs.readFileSync(filePath);
    return c.body(data, 200, { 'Content-Type': 'image/jpeg' });
  } catch (err) {
    return c.text('File not found', 404);
  }
});

interface Course {
  id: number;
  title: string;
  instructors: string[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

interface CourseCategory {
  id: number;
  courseType: string;
  courseList: Course[];
}

const courses: CourseCategory[] = [
  {
    id: 1,
    courseType: "Full Stack Web Development",
    courseList: [
      {
        id: 1,
        title: "Beginner Full Stack Web Development: HTML, CSS, React & Node",
        instructors: ["Mark Wahlbeck", "Developed by Nathan"],
        rating: 4.5,
        reviewCount: 12549,
        imageUrl: "/assets/html-css.jpg"
      },
      {
        id: 2,
        title: "The Ultimate 2024 Fullstack Web Development Bootcamp",
        instructors: ["Kane Ezki", "Kalob Taulien", "Radek Wilk"],
        rating: 4.6,
        reviewCount: 7520,
        imageUrl: "/assets/full-stack-dev2.jpg"
      },
      {
        id: 3,
        title: "The Full Stack Web Development Bootcamp 2024",
        instructors: ["Masynctech Coding School", "Aditya Mandal"],
        rating: 4.4,
        reviewCount: 2407,
        imageUrl: "/assets/full-stack-dev3.jpg"
      },
      {
        id: 4,
        title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.8,
        reviewCount: 2981,
        imageUrl: "/assets/full-stack-development.jpg"
      },
      {
        id: 5,
        title: "Laravel - For Beginner to Advanced",
        instructors: ["Web Solution US"],
        rating: 4.2,
        reviewCount: 324,
        imageUrl: "/assets/Laravel.jpg"
      },
      {
        id: 6,
        title: "JavaScript: The Good Parts",
        instructors: ["Douglas Crockford"],
        rating: 4.3,
        reviewCount: 3210,
        imageUrl: "/assets/js.jpg"
      },
      {
        id: 7,
        title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.7,
        reviewCount: 1342,
        imageUrl: "/assets/css-sass.jpg"
      },
      {
        id: 8,
        title: "React - The Complete Guide",
        instructors: ["Maximilian Schwarzmüller"],
        rating: 4.9,
        reviewCount: 8763,
        imageUrl: "/assets/react-js.jpg"
      },
      {
        id: 9,
        title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.6,
        reviewCount: 5125,
        imageUrl: "/assets/nodejs.jpg"
      },
      {
        id: 10,
        title: "Python for Data Science and Machine Learning Bootcamp",
        instructors: ["Jose Portilla"],
        rating: 4.8,
        reviewCount: 4923,
        imageUrl: "/assets/python.jpg"
      }
    ]
  },
  {
    id: 2,
    courseType: "Based on your skill interests, we recommend",
    courseList: [
      {
        id: 1,
        title: "Python for Data Science and Machine Learning Bootcamp",
        instructors: ["Jose Portilla"],
        rating: 4.8,
        reviewCount: 4923,
        imageUrl: "/assets/python.jpg"
      },
      {
        id: 2,
        title: "Complete Guide to Data Science",
        instructors: ["Mosh Hamedani"],
        rating: 4.6,
        reviewCount: 2134,
        imageUrl: "/assets/data-science.jpg"
      },
      {
        id: 3,
        title: "The Full Stack Web Development Bootcamp 2024",
        instructors: ["Masynctech Coding School", "Aditya Mandal"],
        rating: 4.4,
        reviewCount: 2407,
        imageUrl: "/assets/full-stack-dev3.jpg"
      },
      {
        id: 4,
        title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.8,
        reviewCount: 2981,
        imageUrl: "/assets/full-stack-development.jpg"
      },
      {
        id: 5,
        title: "Laravel - For Beginner to Advanced",
        instructors: ["Web Solution US"],
        rating: 4.2,
        reviewCount: 324,
        imageUrl: "/assets/Laravel.jpg"
      },
      {
        id: 6,
        title: "JavaScript: The Good Parts",
        instructors: ["Douglas Crockford"],
        rating: 4.3,
        reviewCount: 3210,
        imageUrl: "/assets/js.jpg"
      },
      {
        id: 7,
        title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.7,
        reviewCount: 1342,
        imageUrl: "/assets/css-sass.jpg"
      },
      {
        id: 8,
        title: "React - The Complete Guide",
        instructors: ["Maximilian Schwarzmüller"],
        rating: 4.9,
        reviewCount: 8763,
        imageUrl: "/assets/react-js.jpg"
      },
      {
        id: 9,
        title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.6,
        reviewCount: 5125,
        imageUrl: "/assets/nodejs.jpg"
      },
      {
        id: 10,
        title: "Python for Data Science and Machine Learning Bootcamp",
        instructors: ["Jose Portilla"],
        rating: 4.8,
        reviewCount: 4923,
        imageUrl: "/assets/python.jpg"
      }
    ]
    
  },
  {
    id: 3,
    courseType: "Learners are viewing",
    courseList: [
      {
        id: 29,
        title: "Laravel - For Beginner to Advanced",
        instructors: ["Web Solution US"],
        rating: 4.2,
        reviewCount: 324,
        imageUrl: "/assets/Laravel.jpg"
      },
      {
        id: 28,
        title: "JavaScript: The Good Parts",
        instructors: ["Douglas Crockford"],
        rating: 4.3,
        reviewCount: 3210,
        imageUrl: "/assets/js.jpg"
      },
      {
        id: 27,
        title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.8,
        reviewCount: 2981,
        imageUrl: "/assets/full-stack-development.jpg"
      },
      {
        id: 26,
        title: "Python for Data Science and Machine Learning Bootcamp",
        instructors: ["Jose Portilla"],
        rating: 4.8,
        reviewCount: 4923,
        imageUrl: "/assets/python.jpg"
      },
      {
        id: 25,
        title: "The Ultimate 2024 Fullstack Web Development Bootcamp",
        instructors: ["Kane Ezki", "Kalob Taulien", "Radek Wilk"],
        rating: 4.6,
        reviewCount: 7520,
        imageUrl: "/assets/full-stack-dev2.jpg"
      },
      {
        id: 24,
        title: "Advanced CSS and Sass: Flexbox, Grid, Animations",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.7,
        reviewCount: 1342,
        imageUrl: "/assets/css-sass.jpg"
      },
      {
        id: 23,
        title: "React - The Complete Guide",
        instructors: ["Maximilian Schwarzmüller"],
        rating: 4.9,
        reviewCount: 8763,
        imageUrl: "/assets/react-js.jpg"
      },
      {
        id: 21,
        title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        instructors: ["Jonas Schmedtmann"],
        rating: 4.6,
        reviewCount: 5125,
        imageUrl: "/assets/nodejs.jpg"
      },
      {
        id: 22,
        title: "Python for Data Science and Machine Learning Bootcamp",
        instructors: ["Jose Portilla"],
        rating: 4.8,
        reviewCount: 4923,
        imageUrl: "/assets/python.jpg"
      }
    ]
  }
];

app.get('/courses', (c) => {
  return c.json({ courses });
});

const port = process.env.PORT || 3003;
serve(app).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
