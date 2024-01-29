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
    completionDueDate: "6/8/2114",
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
        courseCompleted: true,
        completionPercentage: 25
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
        courseCompleted: false,
        completionPercentage: 14
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
    completionDueDate: "9/28/2099",
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
        courseCompleted: false,
        completionPercentage: 0
      },
      {
        id: 202,
        name: "Daisy Miller",
        email: "daisy@example.com",
        courseCompleted: true,
        completionPercentage: 50
      },
      {
        id: 301,
        name: "Eva White",
        email: "eva@example.com",
        courseCompleted: true,
        completionPercentage: 45
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
    completionDueDate: "9/23/2058",
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
        courseCompleted: false,
        completionPercentage: 34
      },
      {
        id: 302,
        name: "Frank Johnson",
        email: "frank@example.com",
        courseCompleted: true,
        completionPercentage: 50
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
    completionDueDate: "5/12/2033",
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
        courseCompleted: false,
        completionPercentage: 22
      },
      {
        id: 402,
        name: "Harry Turner",
        email: "harry@example.com",
        courseCompleted: true,
        completionPercentage: 80
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
    completionDueDate: "12/24/2116",
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
        courseCompleted: true,
        completionPercentage: 90

      },
      {
        id: 502,
        name: "Jenna Carter",
        email: "jenna@example.com",
        courseCompleted: false,
        completionPercentage: 59

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
    completionDueDate: "3/22/2109",
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
                courseCompleted: true,

                completionPercentage: 10
      },
      {
        id: 602,
        name: "Leo Parker",
        email: "leo@example.com",
                courseCompleted: false,
                completionPercentage: 60

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
    completionDueDate: "10/3/2114",
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
    completionDueDate: "6/5/2108",
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
    completionDueDate: "5/6/2067",
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
    completionDueDate: "3/30/2041",
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

  {
    id: 11,
    name: 'Artificial Neural Networks',
    instructor: 'Dr. Rachel Hernandez',
    description: 'In-depth study of artificial neural networks and their applications in machine learning.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '14 weeks',
    schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    completionDueDate: "4/15/2099",
    prerequisites: ['Understanding of machine learning basics', 'Basic programming skills'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Neural Networks',
        content: 'Overview of neural network architecture and components.',
      },
      {
        week: 2,
        topic: 'Training Neural Networks',
        content: 'Training and optimizing artificial neural networks.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1101,
        name: 'Victor Lee',
        email: 'victor@example.com',
      },
      {
        id: 1102,
        name: 'Wendy Baker',
        email: 'wendy@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 12,
    name: 'iOS App Development',
    instructor: 'Alexandra Turner',
    description: 'Learn to develop native iOS applications using Swift and Xcode.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Onsite',
    completionDueDate: "10/18/2050",
    prerequisites: ['Basic knowledge of programming', 'Familiarity with mobile app development'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to iOS Development',
        content: 'Overview of iOS development tools and environment.',
      },
      {
        week: 2,
        topic: 'Building User Interfaces with Swift',
        content: 'Creating responsive user interfaces using Swift programming language.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1201,
        name: 'Xander Hill',
        email: 'xander@example.com',
      },
      {
        id: 1202,
        name: 'Yara Foster',
        email: 'yara@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 13,
    name: 'Quantum Computing Essentials',
    instructor: 'Dr. William Adams',
    description: 'Introduction to quantum computing principles and algorithms.',
    enrollmentStatus: 'Closed',
    thumbnail: 'your.image.here',
    duration: '12 weeks',
    schedule: 'Wednesdays and Fridays, 6:30 PM - 8:30 PM',
    location: 'Online',
    completionDueDate: "7/21/2110",
    prerequisites: ['Understanding of linear algebra', 'Basic knowledge of computer science'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Quantum Computing',
        content: 'Overview of quantum computing concepts and quantum bits (qubits).',
      },
      {
        week: 2,
        topic: 'Quantum Algorithms',
        content: 'Exploring algorithms designed for quantum computers.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1301,
        name: 'Zara Patel',
        email: 'zara@example.com',
      },
      {
        id: 1302,
        name: 'Aaron Turner',
        email: 'aaron@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 14,
    name: 'Full-Stack Web Development Bootcamp',
    instructor: 'Chris Miller',
    description: 'Comprehensive bootcamp covering both front-end and back-end web development.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '16 weeks',
    schedule: 'Mondays and Thursdays, 6:00 PM - 9:00 PM',
    location: 'Onsite',
    completionDueDate: "1/10/2039",
    prerequisites: ['Basic understanding of HTML, CSS, and JavaScript'],
    syllabus: [
      {
        week: 1,
        topic: 'Front-End Development Basics',
        content: 'Introduction to HTML, CSS, and JavaScript for building interactive web interfaces.',
      },
      {
        week: 2,
        topic: 'Back-End Development with Node.js',
        content: 'Building server-side applications using Node.js and Express.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1401,
        name: 'Elijah Carter',
        email: 'elijah@example.com',
      },
      {
        id: 1402,
        name: 'Sofia Foster',
        email: 'sofia@example.com',
      },
      // Additional enrolled students...
    ],
  },

  {
    id: 15,
    name: 'Python for Data Science',
    instructor: 'Dr. Olivia Martinez',
    description: 'Learn Python programming for data analysis and machine learning applications.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    completionDueDate: "2/21/2069",
    prerequisites: ['Basic knowledge of programming', 'Interest in data science'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Python',
        content: 'Overview of Python programming language and its syntax.',
      },
      {
        week: 2,
        topic: 'Data Analysis with Pandas',
        content: 'Using the Pandas library for data manipulation and analysis.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1501,
        name: 'Liam Adams',
        email: 'liam@example.com',
      },
      {
        id: 1502,
        name: 'Sophie Turner',
        email: 'sophie@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 16,
    name: 'UX/UI Design Principles',
    instructor: 'Emily Davis',
    description: 'Master the principles of user experience (UX) and user interface (UI) design.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'your.image.here',
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 6:30 PM - 8:30 PM',
    location: 'Onsite',
    completionDueDate: "2/20/2072",
    prerequisites: ['Interest in design', 'Basic knowledge of graphic design tools'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to UX/UI Design',
        content: 'Understanding the fundamentals of user experience and user interface design.',
      },
      {
        week: 2,
        topic: 'Wireframing and Prototyping',
        content: 'Creating wireframes and interactive prototypes for digital products.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1601,
        name: 'Oliver Hill',
        email: 'oliver@example.com',
      },
      {
        id: 1602,
        name: 'Emma Parker',
        email: 'emma@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 17,
    name: 'Cloud Computing Fundamentals',
    instructor: 'Dr. Isaac Robinson',
    description: 'Explore the basics of cloud computing and popular cloud platforms.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '12 weeks',
    schedule: 'Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    completionDueDate: "3/7/2120",
    prerequisites: ['Basic knowledge of computer networks', 'Interest in cloud technologies'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to Cloud Computing',
        content: 'Overview of cloud computing concepts and deployment models.',
      },
      {
        week: 2,
        topic: 'Amazon Web Services (AWS)',
        content: 'Exploring cloud services on the AWS platform.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1701,
        name: 'Ava Garcia',
        email: 'ava@example.com',
      },
      {
        id: 1702,
        name: 'Noah Baker',
        email: 'noah@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 18,
    name: 'React Native Mobile App Development',
    instructor: 'Sarah Turner',
    description: 'Build cross-platform mobile apps with React Native for iOS and Android.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 6:30 PM - 8:30 PM',
    location: 'Online',
    completionDueDate: "12/8/2120",
    prerequisites: ['Basic knowledge of React', 'Familiarity with JavaScript ES6+'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to React Native',
        content: 'Overview of React Native and its advantages for mobile app development.',
      },
      {
        week: 2,
        topic: 'Building UI Components',
        content: 'Creating reusable UI components for React Native applications.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1801,
        name: 'Mia Foster',
        email: 'mia@example.com',
      },
      {
        id: 1802,
        name: 'Liam Adams',
        email: 'liam@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 19,
    name: 'DevOps Essentials',
    instructor: 'Dr. Ethan White',
    description: 'Learn essential DevOps practices for improving collaboration and efficiency.',
    enrollmentStatus: 'In Progress',
    thumbnail: 'your.image.here',
    duration: '8 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    completionDueDate: "9/30/2080",
    prerequisites: ['Basic knowledge of software development', 'Familiarity with version control systems'],
    syllabus: [
      {
        week: 1,
        topic: 'Introduction to DevOps',
        content: 'Understanding the principles and benefits of DevOps.',
      },
      {
        week: 2,
        topic: 'Continuous Integration and Deployment',
        content: 'Implementing CI/CD pipelines for automated software delivery.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 1901,
        name: 'Logan Turner',
        email: 'logan@example.com',
      },
      {
        id: 1902,
        name: 'Aria Mitchell',
        email: 'aria@example.com',
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 20,
    name: 'E-commerce Website Development',
    instructor: 'Chris Davis',
    description: 'Build scalable and secure e-commerce websites using modern web technologies.',
    enrollmentStatus: 'Open',
    thumbnail: 'your.image.here',
    duration: '12 weeks',
    schedule: 'Thursdays, 6:00 PM - 8:00 PM',
    location: 'Onsite',
    completionDueDate: "10/4/2077",
    prerequisites: ['Basic knowledge of HTML, CSS, and JavaScript', 'Understanding of web development basics'],
    syllabus: [
      {
        week: 1,
        topic: 'Setting Up an E-commerce Project',
        content: 'Planning and setting up a project for e-commerce website development.',
      },
      {
        week: 2,
        topic: 'Implementing Shopping Cart Functionality',
        content: 'Building features for adding products to a shopping cart and managing orders.',
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 2001,
        name: 'Eva Turner',
        email: 'eva@example.com',
      },
      {
        id: 2002,
        name: 'Owen Baker',
        email: 'owen@example.com',
      },
      // Additional enrolled students...
    ],
  },
];
