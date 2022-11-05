function Event() {
    const clicked = () => {
      alert("Welcome");
    } 
    return (
      <center>
        <button onClick={clicked}>Click the button </button>
      </center>
    );
  }
  export default Event;