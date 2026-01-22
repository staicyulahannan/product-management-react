import { useEffect,  useRef } from "react";
import { useParams } from "react-router-dom";
import FormGroup from "./FormGroup";

export  default function ProductAdd (){
  const { id } = useParams();
    const titleRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();
    function handleProductAdd(e) {
        e.preventDefault();
        /* adding a new product */
fetch(`https://dummyjson.com/products/add`, {
  method: 'POST',
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
   
    return (
        <div>
            <h2>Product Add Page</h2>
            <div className="wrapper">
                <form>
                    {/* <FormGroup  value={id}ref={idRef} label="ID" type="text" id="id" className="form-control" /> */}
                    <FormGroup ref={titleRef} label="Title" type="text" id="title" className="form-control" />
                    <FormGroup ref={priceRef} label="price" type="number" id="price" className="form-control" />                      

                    <FormGroup ref={categoryRef} label="Category" type="text" id="category" className="form-control" />
                    <button onClick={handleProductAdd} type="submit" className="btn btn-primary mt-3">Save</button>
                </form>
            </div>
        </div>
    );
}