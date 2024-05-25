export default function Project({
  image,
  title,
  link,
  description,
  year,
  collaborators,
}) {
  return (
    <div className="flex flex-col items-start">
      <img
        id={`image-for-${title}`}
        className="max-h-32 w-auto object-contain hover:active:scale-150 origin-bottom-left md:origin-center md:hover:scale-[300%] transition duration-200 ease-in-out cursor-pointer mb-2"
        style={{
          "-webkit-touch-callout":
            "none" /* disables the callout on long press for iOS Safari */,
        }}
        src={image}
      />
      <div className="flex flex-row items-center gap-2">
        <h1 className="text-black">{title}</h1>
        <span className="rounded-full border border-gray-400 text-gray-400 text-sm px-1 h-fit">
          {year}
        </span>
      </div>
      <p className="text-purple-700">
        {description}
        {collaborators ? `, ${collaborators}` : ""}
      </p>
    </div>
  );
}
