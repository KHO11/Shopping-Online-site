export function About() {
  return (
    <div>
      <h1>About Us</h1>
      <h2>Our Team</h2>
        <div className="row">
        <div className="column">
        <div className="card">
        <div className="container">
          <h2>Jane Doe</h2>
          <p className="title">CEO & Founder</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>jane@example.com</p>
          <p><button className="button">Contact</button></p>
        </div>
      </div>
    </div>

  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
