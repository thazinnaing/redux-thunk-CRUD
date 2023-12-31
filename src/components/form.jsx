import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNewProduct } from "../thunkFunctions";
import { useNavigate } from "react-router-dom";

const initialState={
    title: "",
    description: "",
    images:[],
    price: ""
}

const Form =()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const [post, setPost]=useState(initialState);
    console.log("post", post);

    const addAvailable=[post?.title,post?.description,post?.images,post?.price].every(Boolean);
    console.log("addAvailable", addAvailable)

    const onChangedInput=(e)=>{
        const {name, value}=e.target;
        setPost(prev=>{
            return{...post, [name]: value}
        })
    }

    const onChangeImage=(e)=>{
        const url=e.target.value;
        setPost(prev=>{
            return {...prev, images: [post?.images[0],url]}
        })
    }

    const onClickAddPost=(e)=>{
        e.preventDefault();
        dispatch(addNewProduct(post))
        setPost(initialState); 
        navigate("/list");

    }

    return(
        <div className="container">
            <div className="form-container">
            <section className="formSection">
            <h2>Add new product</h2>
            <form className="addForm">
                <label htmlFor="title">Product Title:</label>
                <input
                type="text"
                name = "title"
                id="title"
                value = {post?.title}
                required 
                onChange={onChangedInput}
                />

                <label htmlFor="description">Product Description:</label>
                <textarea
                type="text"
                name="description"
                id="description"
                value = {post?.description}
                required
                onChange={onChangedInput}
                />

                <label htmlFor="imageUrl">Product Image URL:</label>
                <input 
                type="text"
                name="imageUrl"
                id="imageUrl"
                value = {post?.images}
                required
                onChange={onChangeImage}
                />

                <label htmlFor="price">Product Price:</label>
                <input 
                type="text"
                name="price"
                id="price"
                value = {post?.price}
                required
                onChange={onChangedInput}
                />

                <button
                type="button"
                className="add-button"
                disabled={!addAvailable}
                onClick= {onClickAddPost}
                >
                    Add Product 

                </button>

            </form>
        </section>

        </div>

        </div>
        
        
    )
}

export default Form;