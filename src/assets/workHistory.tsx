export interface Job {
  title: string;
  company: string;
  dates: string;
  info: string[];
}

export const workHistory: Job[] = [
  {
    title: "Staff Software Engineer",
    company: "SciTec",
    dates: "MAR 2023 - MAR 2025",
    info: [
      "Created backend Python software utilizing aiohttp and confluent-kafka to ingest real-time downloading of infrared data in real-time, then jinja2, Dash, and Plotly to render information as easy-to-analyze and interactive line charts and globe projections in a static HTML file",
      "Led application design development for 3 months, which consisted of weekly meetings presenting and critiquing interactive Axure mockups to the Space Development Agency, General Dynamics Mission Systems managers, and other in-house SMEs",
      "Translated Axure mockups into features such as graphing ECEF coordinates graphed onto a globe, filtering data by user-defined regions, and a refreshing real-time Plotly.js graph rendering thousands of data points per second to Open Analytics' microservice-architected Cesium.js app",
      "Quickly learned how to deploy Docker images onto AWS environments using Helm charts, as the software development cycle switched from code generation to deployment on a tight schedule",
      "Refactored a legacy React.js Cesium app by removing excessive useState methods, after troubleshooting revealed the cause of excessive lag and instability to be redundant rerendering",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "ICR",
    dates: "MAY 2021 - AUG 2022",
    info: [
      "Remodeled the existing company style guide to be a practical toolkit for developers without front-end experience by adding tutorials, copy-to-clipboard buttons for example features, common mistakes or misconceptions, and best practices",
      "Coached interns and other developers on how to develop web apps by teaching the basics of CSS, HTML, and Angular Materials, and demonstrating how to troubleshoot front-end issues",
      "Fixed bugs and added quality of life features, based on feedback from users and product owners",
      "Orated two professional speeches to communicate the work done to technical advisors and non-technical corporate representatives",
    ],
  },
  {
    title: "Lead U-Climb Mentor",
    company: "Colorado School of Mines",
    dates: "JAN 2020 - MAR 2021",
    info: [
      "Coordinated the grading of all student coding assignments with auto-graders being developed, updated, and verified before being passed along to other U-Climb Mentors",
      "Created and hosted a remote 3-hour Zoom study session for 300+ students before each exam",
      "Demystified high-level computer science topics to students of diverse knowledge sets",
    ],
  },
  {
    title: "Guest Service Technician",
    company: "Aurora Reservoir",
    dates: "MAY - AUG 2020",
    info: [
      "Processed customer service requests, ensuring safe operations and high satisfaction rates",
      "Communicated clear and concise health requirements to large groups, enhancing public safety",
    ],
  },
  {
    title: "Waiter",
    company: "Marcus Theatres",
    dates: "MAY - AUG 2019",
    info: [
      "Provided exceptional service, managing over 10 tables per theater in a fast-paced environment",
      "Developed strong time and management skills, handling multiple tasks simultaneously",
    ],
  },
];
