import React from "react";
import { Link } from "react-router-dom";

// Import your social media icons (SVG) as React components
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
const AboutMePage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <nav className="flex justify-between items-center mb-8">
          <Link to="/" className="text-xl font-semibold">
            Continue Shopping
          </Link>
        </nav>
        <hr />
        <div className="mt-12 flex justify-center">
          <div className="border-4 border-blue-400 rounded-full overflow-hidden">
            <img
              src="/picc.jpg"
              alt="John Doe"
              className="w-48 h-48 object-cover"
            />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <p>About Me</p>
        </h2>
        <div className="mt-6 space-y-6 text-lg">
          <p>
            Hello! I'm{" "}
            <span className="font-bold text-green-500">Kamruzzaman Pavel</span>{" "}
            , a software enthusiast based in Kushtia, Bangladesh. I specialize
            in full-stack web development with technologies like React, Node.js,
            and MongoDB.
          </p>
          <p>
            My journey into programming started during my college years, where I
            developed a passion for building web applications that solve
            real-world problems.
          </p>

          <p>
            When I'm not coding, you can find me walking in the park,
            experimenting with new recipes in the kitchen, or exploring the
            latest tech trends.
          </p>
          <p>
            Feel free to{" "}
            <a
              href="mailto:john.doe@example.com"
              className="text-blue-400 hover:underline"
            >
              contact me
            </a>{" "}
            if you'd like to collaborate on a project or just chat about
            technology!
          </p>
        </div>
        {/* Social Media Links */}
        <div>
          <a
            href="https://github.com/your_github"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <GitHubIcon className="w-6 h-6 fill-current text-blue-400 hover:text-blue-600" />
          </a>
          <a
            href="https://github.com/your_github"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FacebookIcon className="w-6 h-6 fill-current text-blue-400 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
