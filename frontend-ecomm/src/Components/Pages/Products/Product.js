import React, {useState, useEffect} from 'react'

const API_URL = 'http://localhost:8000/products'
export default function Product() {
    const [items, setItems] = useState('');
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(result => setItems(result))
        .catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className="product">
            <p>Product name: {items.name}</p>
            <p>Ratings: {items.ratings}</p>
            <p>Size: {items.size}</p>
            <h5>Description</h5>
            <p>{items.description}</p>
        </div>
    )
}

