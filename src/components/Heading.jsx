export default function Heading({ title }) {
  return (
    <h1 className="text-lg md:text-3xl lg:text-5xl py-8 font-black tracking-widest capitalize">
      {title}
    </h1>
  );
}
