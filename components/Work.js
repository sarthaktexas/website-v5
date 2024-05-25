export default function Work({ position, company, year }) {
  return (
    <div className="flex flex-col">
      <h1 className="italic">{position}</h1>
      <h2 className="text-gray-500">{company}</h2>
      <span>{year}</span>
    </div>
  );
}
