import React from "react";
import { BlogPosts } from "./components/posts";
import Profile from "./components/profile";
import { Mail, Github, FileText, Linkedin, MessageSquare } from "lucide-react";

export default function Page() {
  return (
    <section className="mx-auto w-full">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-3xl font-bold">🧑🏻 안녕하세요</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <Profile />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">FE개발자 성민석 입니다.</h2>
          <div className="space-y-4 mb-8">
            <p>
              저는 항상 사용자의 관점에서 사고하며 그들의 경험을 깊이 이해하고자
              노력합니다. 사용자가 겪는 불편함을 파악하고 정리하여, 더 나은
              솔루션을 제공하기 위해 끊임없이 개선해 나갑니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/minseoook"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            {/* Email */}
            <a
              href="mailto:imuchgabis@google.com"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>

            <a
              href="/성민석_이력서 (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            >
              <FileText className="w-5 h-5" />
              <span>이력서</span>
            </a>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h1 className="text-3xl font-bold mb-8 mt-14">📝 Recent Posts</h1>
        <BlogPosts />
      </div>
    </section>
  );
}
