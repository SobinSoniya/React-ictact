const myArray = ['mango', 'blackberry', 'jamun'];
const myList = myArray.map((item) => <p>{item}</p>)

function Array() {
    return (
      <div className="Myapp">
        <center><h1>{myList}</h1></center>
      </div>
    );
  }
  export default Array;