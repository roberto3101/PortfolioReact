import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 bg-gray-50 transition-colors duration-300">
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 dark:text-gray-300 text-gray-600 font-mono mb-10">
        <div className="flex gap-10 p-4 justify-center text-white dark:text-white text-gray-800">
          <a
            href="https://twitter.com/yourprofile"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/jos%C3%A9-larosa-ledezma-98b144338/"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white"
            target="_blank"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://github.com/roberto3101"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-800 text-white"
            target="_blank"
          >
            <FaSquareGithub />
          </a>
        </div>
        <p>@2025 roberto3101. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;