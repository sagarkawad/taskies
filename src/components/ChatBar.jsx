export default function ChatBar({ project }) {
  return (
    <section className="flex flex-col justify-center items-center pt-36">
      <h1 className="text-white font-bold mb-6">{project}</h1>
      <div>
        <input type="text" />
        <button className="border w-8">+</button>
      </div>
    </section>
  );
}
