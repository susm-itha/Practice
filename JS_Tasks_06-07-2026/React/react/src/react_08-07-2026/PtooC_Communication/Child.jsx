function Child({ title, data }) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
      }}
    >
      <h3>{title}</h3>

      {/* String */}
      {typeof data === "string" && <p>{data}</p>}

      {/* Number */}
      {typeof data === "number" && <p>{data}</p>}

      {/* Array */}
      {Array.isArray(data) && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {/* Object */}
      {typeof data === "object" && !Array.isArray(data) && data && (
        <div>
          <p>Name : {data.name}</p>
          <p>Course : {data.course}</p>
        </div>
      )}
    </div>
  );
}

export default Child;