export default function DataBar({ tasks }) {
  return (
    <section className="flex flex-col items-center justify-center">
      {tasks.map((task, i) => (
        <div key={i}>{task}</div>
      ))}
    </section>
  );
}
