import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card';

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="dfa"
          name="sld"
          price={55}
          stock={33}
          handler={addToCartHandler}
          photo="https://a.media-amazon.com/images/I/71wOLohvu5L._SX425_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
