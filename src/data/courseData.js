export const courseData = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail: "your.image.here", //Link to the course thumbnail
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
    ],

    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
    ],
  },

  {
    id: 2,
    name: "Advanced JavaScript Concepts",
    instructor: "Jane Smith",
    description:
      "Dive deep into advanced JavaScript topics and enhance your coding skills.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: [
      "Intermediate JavaScript knowledge",
      "Understanding of ES6",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Closures and Scopes",
        content: "Understanding JavaScript closures and lexical scopes.",
      },
      {
        week: 2,
        topic: "Asynchronous JavaScript",
        content:
          "Working with asynchronous code using callbacks, promises, and async/await.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 201,
        name: "Charlie Brown",
        email: "charlie@example.com",
      },
      {
        id: 202,
        name: "Daisy Miller",
        email: "daisy@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "Web Development Bootcamp",
    instructor: "Michael Johnson",
    description:
      "A comprehensive bootcamp covering HTML, CSS, and JavaScript for web development.",
    enrollmentStatus: "Closed",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Onsite",
    prerequisites: ["Basic programming knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "Learning the fundamentals of HTML.",
      },
      {
        week: 2,
        topic: "Styling with CSS",
        content: "Exploring CSS for web page styling.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 301,
        name: "Eva White",
        email: "eva@example.com",
      },
      {
        id: 302,
        name: "Frank Johnson",
        email: "frank@example.com",
      },
      // Additional enrolled students...
    ],
  },

  {
    id: 4,
    name: "Data Science Fundamentals",
    instructor: "Dr. Amanda Rodriguez",
    description:
      "Introduction to data science, covering statistical analysis and machine learning basics.",
    enrollmentStatus: "In Progress",
    thumbnail: "your.image.here",
    duration: "14 weeks",
    schedule: "Wednesdays and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of Python", "Understanding of statistics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications.",
      },
      {
        week: 2,
        topic: "Statistical Analysis with Python",
        content: "Using Python for statistical analysis.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 401,
        name: "Grace Davis",
        email: "grace@example.com",
      },
      {
        id: 402,
        name: "Harry Turner",
        email: "harry@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 5,
    name: "Mobile App Design Workshop",
    instructor: "Emily Turner",
    description:
      "Hands-on workshop on designing user-friendly mobile applications.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "6 weeks",
    schedule: "Mondays, 6:00 PM - 9:00 PM",
    location: "Onsite",
    prerequisites: ["Basic understanding of UX design"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Mobile App Design",
        content: "Exploring the principles of mobile app design.",
      },
      {
        week: 2,
        topic: "UI/UX Basics",
        content:
          "Understanding the basics of user interface and user experience design.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 501,
        name: "Isaac Adams",
        email: "isaac@example.com",
      },
      {
        id: 502,
        name: "Jenna Carter",
        email: "jenna@example.com",
      },
      // Additional enrolled students...
    ],
  },

  {
    id: 6,
    name: "Artificial Intelligence Foundations",
    instructor: "Dr. Alex Turner",
    description:
      "Fundamentals of artificial intelligence, covering algorithms and applications.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: [
      "Basic knowledge of programming",
      "Understanding of linear algebra",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Artificial Intelligence",
        content: "Overview of AI and its various branches.",
      },
      {
        week: 2,
        topic: "Machine Learning Basics",
        content: "Understanding the basics of machine learning algorithms.",
      },
    ],
    students: [
      {
        id: 601,
        name: "Katie Robinson",
        email: "katie@example.com",
      },
      {
        id: 602,
        name: "Leo Parker",
        email: "leo@example.com",
      },
    ],
  },
  {
    id: 7,
    name: "Digital Marketing Strategies",
    instructor: "Sarah Miller",
    description:
      "Learn effective digital marketing strategies for online businesses.",
    enrollmentStatus: "In Progress",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic knowledge of marketing principles"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Digital Marketing",
        content: "Overview of digital marketing channels and tools.",
      },
      {
        week: 2,
        topic: "Social Media Marketing",
        content: "Strategies for effective social media marketing.",
      },
    ],
    students: [
      {
        id: 701,
        name: "Mark Foster",
        email: "mark@example.com",
      },
      {
        id: 702,
        name: "Nina Johnson",
        email: "nina@example.com",
      },
    ],
  },

  {
    id: 8,
    name: "Cybersecurity Essentials",
    instructor: "Dr. Brian Taylor",
    description:
      "Essential principles of cybersecurity, covering threat detection and prevention.",
    enrollmentStatus: "Closed",
    thumbnail: "your.image.here",
    duration: "10 weeks",
    schedule: "Thursdays, 7:00 PM - 9:00 PM",
    location: "Onsite",
    prerequisites: [
      "Basic understanding of computer networks",
      "Knowledge of basic security concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Overview of cybersecurity principles and common threats.",
      },
      {
        week: 2,
        topic: "Network Security",
        content: "Understanding the fundamentals of network security.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 801,
        name: "Olivia Turner",
        email: "olivia@example.com",
      },
      {
        id: 802,
        name: "Paul Garcia",
        email: "paul@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 9,
    name: "Game Development Workshop",
    instructor: "Chris Anderson",
    description:
      "Hands-on workshop on game development using popular game engines.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "8 weeks",
    schedule: "Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic programming skills", "Interest in game development"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Game Development",
        content: "Overview of game development concepts and tools.",
      },
      {
        week: 2,
        topic: "Building Your First Game",
        content: "Creating a simple game project using game development tools.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 901,
        name: "Quinn Mitchell",
        email: "quinn@example.com",
      },
      {
        id: 902,
        name: "Rachel White",
        email: "rachel@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 10,
    name: "Blockchain Fundamentals",
    instructor: "Dr. Sophia Anderson",
    description:
      "Introduction to blockchain technology, covering principles and applications.",
    enrollmentStatus: "Open",
    thumbnail: "your.image.here",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 5:30 PM - 7:30 PM",
    location: "Online",
    prerequisites: [
      "Basic understanding of cryptography",
      "Familiarity with distributed systems",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Blockchain",
        content:
          "Overview of blockchain technology and its underlying concepts.",
      },
      {
        week: 2,
        topic: "Smart Contracts",
        content:
          "Understanding and creating smart contracts on blockchain platforms.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1001,
        name: "Samuel Turner",
        email: "samuel@example.com",
      },
      {
        id: 1002,
        name: "Tina Davis",
        email: "tina@example.com",
      },
      // Additional enrolled students...
    ],
  },
];
