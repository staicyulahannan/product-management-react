import { useEffect, useState,useContext } from "react";
import { tokenContext } from "./Login.jsx";
import ProductEdit from "./ProductEdit.jsx";
import { Link } from "react-router-dom";
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEdit, setIsEdit] = useState(false);
    const token = useContext(tokenContext);
    function handleButtonEdit(id) {
        setIsEdit(id);
    }
    useEffect(() => {
       
        setIsLoading(true);
        fetch('https://dummyjson.com/products', {
            headers: {
            Authorization: `Bearer ${token}`, 
          },
        })
            .then(res => res.json())
            .then(data => setProducts(data.products));
        setIsLoading((prev) => !prev);
    }, []);
    if(isEdit){
       return <ProductEdit id={isEdit} />;
    }
    return (
      <div className="content-wrapper">

     
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Products</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Products</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {isLoading && <p>Loading...</p> }
      <section className="content">
        <div className="container-fluid">

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Product List</h3>

              <div className="card-tools">
                <button className="btn btn-primary btn-sm">
                  <i className="fas fa-plus"></i> Add Product
                </button>
              </div>
            </div>

            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price ($)</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 {products.map((product) => ( 
                    <tr key={product.id}>
                         <td>{product.id}</td> 
                    <td>{product.title}</td> 
                    <td>{product.price}</td> 
                    <td>{product.category}</td> 
                    <td><Link to={`/products/${product.id}/edit`} className="btn btn-sm btn-primary">Edit</Link></td> 
                    </tr> )
                 )}
                </tbody>
              </table>
            </div>

            <div className="card-footer clearfix">
              <span className="text-muted">
                Showing {products.length} products
              </span>
            </div>

          </div>

        </div>
      </section>

    </div>
    
  );
}