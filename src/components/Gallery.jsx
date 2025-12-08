import "./gallery.css";

export default function Gallery() {
  return (
    <section style={{ textAlign: "center" }}>
      <h2>Our Impact</h2>

      <div className="gallery-wrapper">
        <div className="gallery-scroll">
          <img src="public/images/Gallery1.jpeg" className="g-img" />
          <img src="public/images/Gallery4.jpeg" className="g-img" />
          <img src="public/images/Gallery5.jpeg" className="g-img" />
          <img src="public/images/Gallery6.jpeg" className="g-img" />
          <img src="public/images/Gallery2.jpeg" className="g-img" />
          <img src="public/images/Gallery3.jpeg" className="g-img" />
          <img src="public/images/Gallery7.jpeg" className="g-img" />
          <img src="public/images/Gallery8.png" className="g-img" />
          <img src="public/images/Gallery9.png" className="g-img" />
          <img src="public/images/Gallery10.png" className="g-img" />
          <img src="public/images/Gallery11.png" className="g-img" />
          <img src="public/images/Gallery12.png" className="g-img" />
          <img src="public/images/Gallery15.png" className="g-img" />
          <img src="public/images/Gallery14.png" className="g-img" />

          {/* duplicate set for seamless loop */}
          <img src="public/images/Gallery1.jpeg" className="g-img" />
          <img src="public/images/Gallery2.jpeg" className="g-img" />
          <img src="public/images/Gallery3.jpeg" className="g-img" />
          <img src="public/images/Gallery4.jpeg" className="g-img" />
          <img src="public/images/Gallery5.jpeg" className="g-img" />
          <img src="public/images/Gallery6.jpeg" className="g-img" />
          <img src="public/images/Gallery7.jpeg" className="g-img" />
          <img src="public/images/Gallery8.png" className="g-img" />
          <img src="public/images/Gallery9.png" className="g-img" />
          <img src="public/images/Gallery10.png" className="g-img" />
          <img src="public/images/Gallery11.png" className="g-img" />
          <img src="public/images/Gallery12.png" className="g-img" />
          <img src="public/images/Gallery15.png" className="g-img" />
          <img src="public/images/Gallery14.png" className="g-img" />
        </div>
      </div>
    </section>
  );
}
