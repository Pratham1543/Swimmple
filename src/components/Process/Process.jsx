import React from "react";

const Process = () => {
  return (
    <div>
      <section className="bg-[#2d3748] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-16">
            <span>We Like Swimming</span>
            <br />
            <span>We Love Data</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <CircleIcon className="text-[#30c8d6] mb-2" />
              <h2 className="text-xl font-semibold">Step 1 - Gather Data</h2>
            </div>
            <div className="flex flex-col items-center">
              <CircleIcon className="text-[#30c8d6] mb-2" />
              <h2 className="text-xl font-semibold">Step 2 - Analyze</h2>
            </div>
            <div className="flex flex-col items-center">
              <CircleIcon className="text-[#30c8d6] mb-2" />
              <h2 className="text-xl font-semibold">Step 3 - Benchmark</h2>
            </div>
            <div className="flex flex-col items-center">
              <CircleIcon className="text-[#30c8d6] mb-2" />
              <h2 className="text-xl font-semibold">Step 4 - Improve</h2>
            </div>
            <div className="flex flex-col items-center">
              <CircleIcon className="text-[#30c8d6] mb-2" />
              <h2 className="text-xl font-semibold">Step 5 - Repeat</h2>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <img
              alt="Swimming Athlete Performance Improvement"
              className="w-full max-w-4xl"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "984/300",
                objectFit: "cover",
              }}
              width="984"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default Process;
