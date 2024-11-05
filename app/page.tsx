import React from "react";
import { BlogPosts } from "./components/posts";
import Profile from "./components/profile";

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

          <div className="flex gap-4">
            <a
              href="https://github.com/minseoook"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span>GitHub</span>
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
