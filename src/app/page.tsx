import React from "react";

export default function Page() {
  return (
    <div className="w-11/12 mx-auto flex flex-col items-start justify-center min-h-screen space-y-4">
      <span className="text-lg text-gray-600">Hello, I'm</span>

      <h1 className="text-5xl font-bold text-gray-900">Nagy Hani Botros</h1>

      <p className="text-xl text-blue-600 font-medium">
        Front-End Developer | React
      </p>

      <span className="max-w-2xl text-gray-700 leading-relaxed">
        I create responsive and interactive web interfaces using modern
        technologies like <strong>React</strong>, <strong>Tailwind CSS</strong>,
        and <strong>Bootstrap</strong>.
      </span>
    </div>
  );
}
