import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiRedis,
  SiCloudinary,
  SiJsonwebtokens,
  SiPhp,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  redis: {
    title: "Redis",
    bg: "black",
    fg: "white",
    icon: <SiRedis />,
  },
  cloudinary: {
    title: "Cloudinary",
    bg: "black",
    fg: "white",
    icon: <SiCloudinary />,
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: <SiJsonwebtokens />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "unied",
    category: "Education Management",
    title: "UniEd",
    src: "/assets/unied/UniEd.png", 
    screenshots: ["webLanding.png", "modals.png", "dashboard.png", "lisaAI.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.sockerio,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.redis,
        PROJECT_SKILLS.cloudinary,
        PROJECT_SKILLS.jwt,
      ],
    },
    live: "https://uniedplatform.vercel.app/",
    github: "https://github.com/AarushBhagat/UniEd",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            UniEd: Transforming Education Management
          </TypographyP>
          <TypographyP className="font-mono ">
            Excited to share UniEd, a comprehensive education management and virtual classroom platform built to transform how students and faculty interact in a digital learning environment.
            This project gave me hands-on exposure to designing a scalable, real-time full-stack application, from system architecture to secure authentication.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Web Landing & Modals</TypographyH3>
          <p className="font-mono mb-2">
            A clean, responsive landing page introduces the platform. The modals showcase the smooth user interaction for login, registration, and quick actions.
          </p>
          <SlideShow
            images={[
              `/assets/unied/webLanding.png`,
              `/assets/unied/modals.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Dashboard Overview</TypographyH3>
          <p className="font-mono mb-2">
            The dashboard is the command center for students and faculty. It provides real-time insights into:
            <ul className="list-disc ml-6 mt-2">
              <li><strong>Live Classes:</strong> Join ongoing virtual sessions directly.</li>
              <li><strong>Attendance:</strong> Visual indicators for your attendance record.</li>
              <li><strong>Assignments:</strong> Pending tasks and submission deadlines.</li>
              <li><strong>Notifications:</strong> Instant updates on grades and announcements.</li>
              <li><strong>Grades:</strong> A summary view of academic performance.</li>
            </ul>
          </p>
          <SlideShow
            images={[
              `/assets/unied/dashboard.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Lisa AI Assistant</TypographyH3>
          <p className="font-mono mb-2">
             Meet Lisa AI, the intelligent companion for students. It assists with answering queries, summarising lectures, and providing personalized study recommendations, available 24/7.
          </p>
          <SlideShow
            images={[
              `/assets/unied/lisaAI.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono">
            <li>Real-time virtual classrooms with interactive whiteboards</li>
            <li>Intelligent messaging system (reply, forward, delete)</li>
            <li>Live attendance tracking & grade management</li>
            <li>Assignment submission with cloud storage</li>
            <li>Real-time notifications and online status tracking</li>
            <li>Role-based access control (Student, Faculty, Admin)</li>
            <li>Secure authentication & authorization</li>
            <li>Fully responsive UI across devices</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "parivartan",
    category: "Civic Tech",
    title: "Parivartan",
    src: "/assets/Parivartan/Parivartan.png", 
    screenshots: ["pLanding.png", "report.png", "report2.png", "map.png", "community.png", "communit_issue.png"],
    live: "", 
    github: "https://github.com/AarushBhagat/Parivartan",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.jwt,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            PARIVARTAN (meaning “Transformation”) bridges the gap between citizens, government departments, and field staff, enabling efficient issue reporting, tracking, and resolution through integrated web and mobile applications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">System Components</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
             <li><strong>Department Dashboard (Web):</strong> Multi-role login for Admin, Staff & Department; issue management dashboard and staff assignment; real-time progress tracking with secure authentication.</li>
             <li><strong>Citizen App (React Native):</strong> Simple complaint reporting with photo, GPS location & description; real-time status updates and notifications; option for anonymous reporting.</li>
             <li><strong>App-Staff (React Native):</strong> Field staff can view assigned issues, update status & upload proof images; GPS navigation to issue location; timestamped progress tracking.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">App Interface & Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            The platform features a user-friendly landing page and comprehensive reporting screens.
          </p>
          <SlideShow
            images={[
              `/assets/Parivartan/pLanding.png`,
              `/assets/Parivartan/report.png`,
              `/assets/Parivartan/report2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Location & Community</TypographyH3>
          <p className="font-mono mb-2">
            Integrated GPS for precise location tracking and community features for broader engagement.
          </p>
          <SlideShow
            images={[
              `/assets/Parivartan/map.png`,
              `/assets/Parivartan/community.png`,
              `/assets/Parivartan/communit_issue.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            React.js | React Native | Node.js | Express.js | Firebase Firestore | Firebase Authentication | JWT
          </p>

          <TypographyH3 className="my-4 mt-8">Workflow</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>Citizen reports:</strong> Issue stored in Firebase</li>
            <li><strong>Department dashboard:</strong> Verifies & assigns to staff</li>
            <li><strong>Staff app:</strong> Receives, resolves & updates the issue</li>
            <li><strong>Citizen updates:</strong> Gets resolution update & can review it</li>
          </ul>
            <p className="font-mono mb-2 mt-4 text-center italic">
            ✅ A transparent, efficient, and complete issue-resolution cycle!
          </p>
          
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
           <ul className="list-disc ml-6 font-mono mb-4">
            <li>⏱️ 60% reduction in issue resolution time</li>
            <li>📊 80% improvement in citizen satisfaction</li>
            <li>🧭 Increased transparency & accountability in governance</li>
           </ul>

        </div>
      );
    },
  },
  {
    id: "startupops",
    category: "AI Startup Management",
    title: "StartupOps",
    src: "/assets/StartupOps/startupOps.png",
    screenshots: ["sl1.png", "sl2.png", "sl3.png", "sl4.png"],
    live: "https://startupops-omega.vercel.app/",
    github: "https://github.com/AarushBhagat/StartupOps",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            StartupOps: AI-Powered Startup Management Platform
          </TypographyP>
          <TypographyP className="font-mono text-center">
            A modern, AI-powered platform designed for startup founders and teams to automate roadmap creation, manage tasks in real-time, and track project metrics with a premium, high-end user experience.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Dashboard & Features</TypographyH3>
           <p className="font-mono mb-2">
            Experience a premium glassmorphism UI with real-time updates and AI-driven insights.
           </p>
          <SlideShow
            images={[
              `/assets/StartupOps/sl1.png`,
              `/assets/StartupOps/sl2.png`,
              `/assets/StartupOps/sl3.png`,
              `/assets/StartupOps/sl4.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Overview & AI Tools</TypographyH3>
          <p className="font-mono mb-2">
            StartupOps leverages Google Gemini AI to transform ideas into execution plans.
          </p>
          <SlideShow
            images={[
              `/assets/StartupOps/tell.png`,
              `/assets/StartupOps/template.png`,
              `/assets/StartupOps/plan.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Task Management</TypographyH3>
          <p className="font-mono mb-2">
            A dynamic Kanban board for seamless task tracking and team collaboration.
          </p>
           <SlideShow
            images={[
              `/assets/StartupOps/l1.png`,
              `/assets/StartupOps/task.png`,
              `/assets/StartupOps/task2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Feedback & Analysis</TypographyH3>
           <p className="font-mono mb-2">
             Gather feedback and analyze your startup's readiness with investor-grade scoring.
           </p>
           <SlideShow
            images={[
              `/assets/StartupOps/feedback.png`,
              `/assets/StartupOps/inverstor1.png`,
              `/assets/StartupOps/inverstor2.png`,
              `/assets/StartupOps/inverstor3.png`,
              `/assets/StartupOps/generatepitch.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Advanced Analytics</TypographyH3>
           <p className="font-mono mb-2">
            Visual metrics to track your progress and milestones.
           </p>
           <SlideShow
            images={[
              `/assets/StartupOps/analysis.png`,
              `/assets/StartupOps/analysis2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li><strong>AI-Driven Strategy:</strong> Dynamic roadmap generation based on context.</li>
            <li><strong>Premium UI:</strong> Glassmorphism design with Framer Motion.</li>
            <li><strong>Real-Time Collaboration:</strong> Instant sync powered by Firestore.</li>
            <li><strong>Actionable Insights:</strong> Investor readiness scoring and analytics.</li>
            <li><strong>Smart Roadmap:</strong> 12-week execution plans created automatically.</li>
            <li><strong>Kanban Management:</strong> Drag-and-drop tasks with real-time updates.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
             React 18 | TypeScript | TailwindCSS | Node.js | Express.js | Firebase | Google Gemini AI
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/portfolio/p1.png",
    screenshots: ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png"],
    live: "http://nareshkhatri.vercel.app",
    github:"https://github.com/Naresh-Khatri/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `/portfolio/p1.png`,
              `/portfolio/p2.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`/portfolio/p3.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `/portfolio/p4.png`,
              `/portfolio/p5.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "planpilot",
    category: "Fullstack",
    title: "PlanPilot – AI-Powered Timetable Planning System",
    src: "/assets/PlanPilot/PlanPilot.png",
    screenshots: ["PlanPilot.png", "pl1.png", "pl2.png", "pl3.png", "pl4.png"],
    live: "",
    github:"https://github.com/AarushBhagat/Smart-Time-Table-Generator",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.php], // You can add other skills if they exist in PROJECT_SKILLS, like OAuth, Gemini, dompdf
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            An intelligent academic scheduling platform that generates optimized timetables using AI algorithms. Features Google OAuth authentication, smart conflict resolution, cognitive science-based scheduling, and PDF export capabilities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `/assets/PlanPilot/PlanPilot.png`,
              `/assets/PlanPilot/pl1.png`,
              `/assets/PlanPilot/pl2.png`,
              `/assets/PlanPilot/pl3.png`,
              `/assets/PlanPilot/pl4.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">AI-powered schedule optimization with intelligent algorithms</li>
            <li className="font-mono">Google OAuth 2.0 authentication & secure session management</li>
            <li className="font-mono">Smart conflict resolution & cognitive science-based scheduling</li>
            <li className="font-mono">PDF export with interactive timetable interface</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">
            PHP | JavaScript | Tailwind CSS | Google OAuth | Gemini API | dompdf
          </p>
        </div>
      );
    },
  },
  {
    id: "ecoroute",
    category: "Route Optimization",
    title: "Eco-Route – Fuel-Efficient Route Optimization",
    src: "/assets/seo/EcoRoute/EcoRoute.png",
    screenshots: ["e1.png", "e2.png", "e3.png", "e4.png", "el1.jpeg", "analyse.png", "feul.png"],
    live: "",
    github: "https://github.com/AarushBhagat/Eco-Route",
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A smart eco-routing system using graph algorithms to generate fuel-efficient routes. Improved travel efficiency by 35% with an interactive frontend for route visualization.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Landing Pages</TypographyH3>
          <p className="font-mono mb-2">
            The platform features clean, user-friendly interfaces to guide the route optimization process.
          </p>
          <SlideShow
            images={[
              `/assets/seo/EcoRoute/e1.png`,
              `/assets/seo/EcoRoute/e2.png`,
              `/assets/seo/EcoRoute/e3.png`,
              `/assets/seo/EcoRoute/e4.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Analysis & Fuel Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Interactive dashboards visualize the efficiency improvements and estimated fuel metrics algorithmically.
          </p>
          <SlideShow
            images={[
              `/assets/seo/EcoRoute/analyse.png`,
              `/assets/seo/EcoRoute/feul.png`,
              `/assets/seo/EcoRoute/el1.jpeg`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Highlights</TypographyH3>
          <ul className="list-disc ml-6 space-y-2">
            <li className="font-mono">Improved travel efficiency by 35%</li>
            <li className="font-mono">Graph algorithm-based routing</li>
            <li className="font-mono">Reduced response time by 30%</li>
            <li className="font-mono">Interactive route visualization</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Technologies</TypographyH3>
          <p className="font-mono mb-2">
            Python | C++ | JavaScript | HTML | CSS
          </p>
        </div>
      );
    },
  },
];
export default projects;
