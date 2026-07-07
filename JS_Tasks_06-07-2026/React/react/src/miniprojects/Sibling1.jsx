function SiblingOne(props) {

  return (
    <div>

      <h3>Sibling One</h3>

      <button onClick={() => props.changeName("Susmitha")}>
        Send Name
      </button>

    </div>
  );
}

export default SiblingOne;