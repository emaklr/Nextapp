import Link from "next/link";
const FrontPage = () => {
  return (
    <div className="front">
      <img className="back" src="back_n.png" alt="" />
      <div className="front-child1">
        <h1>
          If comparable, It is no longer
          <span className="nova"> NOVA!</span>
        </h1>
        <button className="order">
          <a href="#booking">Order now</a>{" "}
        </button>
        <button className="view">
          <Link href="/vehicles">View Cars</Link>
        </button>
      </div>
      <div className="front-child2">
        <img className="car car1" src="rc1.jpg" alt="" />
        <img className="car car2" src="rc2.jpg" alt="" />
      </div>
    </div>
  );
};

export default FrontPage;
