import "./gallery.css";

export default function Gallery() {
  return (
    <section style={{ textAlign: "center" }}>
      <h2>Our Impact</h2>

      <div className="gallery-wrapper">
        <div className="gallery-scroll">
          <img src="src\assets\Gallery1.jpeg" className="g-img" />
          <img src="src\assets\Gallery4.jpeg" className="g-img" />
          <img src="src\assets\Gallery5.jpeg" className="g-img" />
          <img src="src\assets\Gallery6.jpeg" className="g-img" />
          <img src="src\assets\Gallery2.jpeg" className="g-img" />
          <img src="src\assets\Gallery3.jpeg" className="g-img" />
          <img src="src\assets\Gallery7.jpeg" className="g-img" />
          <img src="src\assets\Gallery8.png" className="g-img" />
          <img src="src\assets\Gallery9.png" className="g-img" />
          <img src="src\assets\Gallery10.png" className="g-img" />
          <img src="src\assets\Gallery11.png" className="g-img" />
          <img src="src\assets\Gallery12.png" className="g-img" />
          <img src="src\assets\Gallery15.png" className="g-img" />
          <img src="src\assets\Gallery14.png" className="g-img" />

          {/* duplicate set for seamless loop */}
          <img src="src\assets\Gallery1.jpeg" className="g-img" />
          <img src="src\assets\Gallery2.jpeg" className="g-img" />
          <img src="src\assets\Gallery3.jpeg" className="g-img" />
          <img src="src\assets\Gallery4.jpeg" className="g-img" />
          <img src="src\assets\Gallery5.jpeg" className="g-img" />
          <img src="src\assets\Gallery6.jpeg" className="g-img" />
          <img src="src\assets\Gallery7.jpeg" className="g-img" />
          <img src="src\assets\Gallery8.png" className="g-img" />
          <img src="src\assets\Gallery9.png" className="g-img" />
          <img src="src\assets\Gallery10.png" className="g-img" />
          <img src="src\assets\Gallery11.png" className="g-img" />
          <img src="src\assets\Gallery12.png" className="g-img" />
          <img src="src\assets\Gallery15.png" className="g-img" />
          <img src="src\assets\Gallery14.png" className="g-img" />
        </div>
      </div>
    </section>
  );
}
