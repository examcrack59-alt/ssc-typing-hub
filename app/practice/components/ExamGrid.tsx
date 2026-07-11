"use client";

import ExamCard from "./ExamCard";

const exams = [
 {
  slug: "cgl",
  title: "SSC CGL",
  image: "/logos/ssc2.png",
  duration: "15 Minutes",
  tests: 40,
  description: "Combined Graduate Level",
},
 {
  slug: "chsl",
  title: "SSC CHSL",
  image: "/logos/ssc2.png",
  duration: "10 Minutes",
  tests: 35,
  description: "Higher Secondary Level",
},
{
  slug: "mts",
  title: "SSC MTS",
  image: "/logos/ssc2.png",
  duration: "10 Minutes",
  tests: 25,
  description: "Multi Tasking Staff",
},
{
  slug: "gd",
  title: "SSC GD",
  image: "/logos/ssc2.png",
  duration: "10 Minutes",
  tests: 20,
  description: "General Duty",
},
{
  slug: "cpo",
  title: "SSC CPO",
  image: "/logos/ssc2.png",
  duration: "10 Minutes",
  tests: 20,
  description: "Central Police Organization",
},
{
  slug: "stenographer",
  title: "SSC Stenographer",
  image: "/logos/ssc2.png",
  duration: "10 Minutes",
  tests: 20,
  description: "Stenographer Grade C & D",
},
];

export default function ExamGrid() {
  return (
    <section className="mt-8">

      <div className="mb-6">

        <h2 className="text-3xl font-black text-slate-800">
          Practice Tests 
        </h2>

        <p className="mt-2 text-slate-500">
          Select your exam to start practicing.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {exams.map((exam) => (
          <ExamCard
            key={exam.title}
            {...exam}
          />
        ))}

      </div>

    </section>
  );
}
