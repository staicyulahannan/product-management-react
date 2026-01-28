import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) return;

    setIsLoading(true);

    fetch("https://dummyjson.com/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false));
  }, [token]);

  return (
    <div className="content-wrapper">
      <section className="content-header">
        <h1>Products</h1>
      </section>

      {isLoading && <p>Loading...</p>}

      {!isLoading && (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <Link
                    to={`/products/${product.id}/edit`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
