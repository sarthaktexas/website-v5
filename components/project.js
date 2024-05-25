export default function Project({ image, title, link, description, year }) {
  return (
    <div className="flex flex-col items-start">
      <img
        className="max-h-32 w-auto object-contain md:hover:scale-[300%] transition duration-200 ease-in-out cursor-pointer"
        src={image}
      />
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-black">{title}</h1>
        <span className="rounded-full border-2 border-gray-400 text-gray-400 text-sm px-1 h-fit">
          {year}
        </span>
      </div>
      <p className="text-purple-700">{description}</p>
    </div>
  );
}
