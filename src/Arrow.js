function hi() {
    return "Hi ";
  }

  function Arrow() {
    let name = "Soniya";
    return (
      <div className="Myapp">
        <center><h1>{hi() + name}</h1></center>
      </div>
    );
  }

  export default Arrow;
