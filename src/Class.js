class human {
    constructor(name) {
      this.name = name;
    }
    display() {
      return 'My name is ' + this.name;
    }
  }
  class soniya extends human {
    constructor(name, job) {
      super(name);
      this.job = job;
    }  
    show() {
      return this.display() + ', and I am a ' + this.job
    }
  }
  function Class() {
    const soni = new soniya("Soniya", "Learner");
    return (
      <div className="Myapp">
        <center><h1>{soni.show()}</h1></center>
      </div>
    );
  }
  export default Class;