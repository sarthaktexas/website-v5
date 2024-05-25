export default function Project({ image, title, link, description, year }) {
  return (
    <div className="flex flex-col items-start">
      <img
        className="max-h-32 w-auto object-contain md:hover:scale-[300%] transition duration-200 ease-in-out cursor-pointer"
        src={image}
      />
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <span className="rounded-full border-2 border-gray-400 text-gray-400 px-1 text-sm h-fit">
          {year}
        </span>
      </div>
      <p className="text-purple-700 text-sm">{description}</p>
    </div>
  );
}
