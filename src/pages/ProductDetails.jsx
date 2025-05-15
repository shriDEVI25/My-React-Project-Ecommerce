import { useParams, useNavigate } from "react-router-dom";
import { products } from "../date/product.js";
import { useCart } from "../context/cartContext.jsx";

export default function ProductsDetails() {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const styles = {
        container: {
            maxWidth: "800px",
            margin: "50px auto",
            padding: "30px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            borderRadius: "12px",
            backgroundColor: "#f5f3ff", // Light lavender
            fontFamily: "'Segoe UI', sans-serif",
            textAlign: "center"
        },
        image: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px"
        },
        name: {
            fontSize: "2rem",
            marginBottom: "10px",
            color: "#4b0082" // Indigo
        },
        description: {
            fontSize: "1.1rem",
            marginBottom: "15px",
            color: "#555"
        },
        price: {
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#6a0dad", // Dark orchid
            marginBottom: "20px"
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            background: "linear-gradient(to right, #7b2ff7, #f107a3)", // Gradient
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "transform 0.2s ease, background 0.3s ease"
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.name}>{product.name}</h2>
            <img src={product.image} alt={product.name} style={styles.image} />
            <p style={styles.description}>{product.description}</p>
            <p style={styles.price}>₹{product.price}</p>
            <button
                style={styles.button}
                onClick={() => {
                    addToCart(product);
                    navigate("/cart");
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
