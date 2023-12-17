const Teacher = ({ teacher }) => {
  return (
    <div>
      <h2 id="name">{teacher.name}</h2>

      <span>Cargo: {teacher.job}</span>
      <span>Salário: {teacher.job}</span>
    </div>
  );
};

export { Teacher };
// named export
