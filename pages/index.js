import Project from "../components/project";
import { projects } from "../data/projects";
import Work from "../components/Work";
import { work } from "../data/work";

export default function Home() {
  return (
    <div className="">
      {/* <HeadObject /> */}
      {/* <Nav /> */}
      <main className="w-5/6 mx-auto my-10 xl:my-0 flex flex-col gap-8 lg:items-center min-h-screen justify-center">
        <div className="flex flex-row gap-4 items-center">
          <img
            src="https://github.com/sarthaktexas.png"
            className="size-10 rounded-full"
          />
          <h1 className="text-3xl font-medium text-center md:mt-2">
            Sarthak Mohanty
          </h1>
        </div>
        <p className="text-gray-700">
          An archive of some of my work. You can see more of it on my{" "}
          <a className="underline text-purple-700" href="https://read.cv/srtk">
            CV
          </a>
          .
        </p>
        <section className="flex flex-col gap-10">
          {/* <h1 className="text-2xl font-medium border-2 border-purple-700 text-purple-700 px-2 rounded-lg size-fit">
            Projects
          </h1> */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-start gap-10 lg:gap-20">
            {projects
              .sort((a, b) => b.year - a.year)
              .map((project) => (
                <Project key={project.title} {...project} />
              ))}
          </div>
        </section>
        {/* <section className="flex flex-col gap-5">
          <h1 className="text-2xl font-medium border-2 border-purple-700 text-purple-700 px-2 rounded-lg size-fit">
            Work
          </h1>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-start gap-10 lg:gap-20">
            {work
              .sort((a, b) => b.year - a.year)
              .map((project) => (
                <Work key={project.title} {...project} />
              ))}
          </div>
        </section> */}
      </main>
    </div>
  );
}
