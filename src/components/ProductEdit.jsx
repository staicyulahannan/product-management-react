import { useEffect,  useRef } from "react";
import { useParams } from "react-router-dom";
import FormGroup from "./FormGroup";

export  default function ProductEdit( ){
  const { id } = useParams();
    const titleRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();
    function handleProductEdit(e) {
        e.preventDefault();
        /* updating title of product with id 1 */
fetch(`https://dummyjson.com/products/${id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: titleRef.current.value,
    price: priceRef.current.value,
    category: categoryRef.current.value,
  })
})
.then(res => res.json())
.then(() => {
  window.location.href = "/products";
});
    }
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data=>{
    titleRef.current.value=data.title;
    priceRef.current.value=data.price;
    categoryRef.current.value=data.category;
})
.then(console.log);
    }, []);
    return (
        <div>
            <h2>Product Edit Page</h2>
            <div className="wrapper">
                <form>
                    {/* <FormGroup  value={id}ref={idRef} label="ID" type="text" id="id" className="form-control" /> */}
                    <FormGroup ref={titleRef} label="Title" type="text" id="title" className="form-control" />
                    <FormGroup ref={priceRef} label="price" type="number" id="price" className="form-control" />                      

                    <FormGroup ref={categoryRef} label="Category" type="text" id="category" className="form-control" />
                    <button onClick={handleProductEdit} type="submit" className="btn btn-primary mt-3">Save</button>
                </form>
            </div>
        </div>
    );
}