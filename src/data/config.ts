const config = {
  title: "Aarush Bhagat | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Aarush, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Aarush, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Naresh",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Aarush Bhagat",
  email: "aarushbhagat093@gmail.com",
  site: "https://nareshkhatri.site",

  // for github stars button
  githubUsername: "AarushBhagat",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/",
    linkedin: "https://www.linkedin.com/in/aarushbhagat03/",
    instagram: "https://www.instagram.com/aarushbhagat5/",
    facebook: "https://www.facebook.com/aarush.bhagat",
    github: "https://github.com/AarushBhagat",
  },
};
export { config };
