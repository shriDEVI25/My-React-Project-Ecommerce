import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const goToDetails = () => navigate(`/product/${product.id}`);

    const cardStyle = {
        width: "270px",
        backgroundColor: "#1f2937", // Dark background for a modern feel
        color: "#ffffff", // White text for contrast
        borderRadius: "12px",
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.2)", // Darker shadow for depth
        overflow: "hidden",
        margin: "20px",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const clickableStyle = {
        cursor: "pointer",
        padding: "16px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
    };

    const imageStyle = {
        width: "100%",
        height: "220px",
        objectFit: "cover",
        borderRadius: "10px",
        marginBottom: "12px",
        transition: "transform 0.3s ease",
    };

    const titleStyle = {
        fontSize: "18px",
        fontWeight: "600",
        margin: "6px 0",
        color: "#FBBF24", // Warm yellow accent for title
    };

    const priceStyle = {
        color: "#10B981", // Green for price
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "8px",
    };

    const detailsText = {
        color: "#9CA3AF", // Light gray for additional text
        fontSize: "14px",
        marginTop: "4px",
        fontWeight: "400",
    };

    const buttonStyle = {
        backgroundColor: "#10B981", // Green for button
        color: "#ffffff",
        border: "none",
        padding: "14px 0",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
        width: "100%",
        borderTop: "1px solid #4B5563", // Dark border at the top
        transition: "background-color 0.3s ease",
    };

    const handleHover = (e, hover) => {
        e.target.style.backgroundColor = hover ? "#16A34A" : "#10B981"; // Darker green on hover
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.1)";
            }}
        >
            <div style={clickableStyle} onClick={goToDetails}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <h3 style={titleStyle}>{product.name}</h3>
                <p style={priceStyle}>₹{product.price.toFixed(2)}</p>
                <p style={detailsText}>View Details</p>
            </div>
            <button
                style={buttonStyle}
                onMouseEnter={(e) => handleHover(e, true)}
                onMouseLeave={(e) => handleHover(e, false)}
                onClick={() => addToCart(product)}
            >
                🛒 Add to Cart
            </button>
        </div>
    );
}
