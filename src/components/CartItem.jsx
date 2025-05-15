function CartItems({ item, removeFromCart, updateQuantity }) {
    const containerStyle = {
        backgroundColor: "#1e293b", // Dark slate blue
        color: "#ffffff",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "12px",
        width: "320px",
        boxShadow: "0 6px 25px rgba(0, 0, 0, 0.5)", // Deeper shadow for depth
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
    };

    const nameStyle = {
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "10px",
        color: "#10B981", // Teal
    };

    const priceStyle = {
        fontSize: "16px",
        marginBottom: "10px",
        color: "#cbd5e1", // Slate grey for a soft contrast
    };

    const quantityStyle = {
        fontSize: "16px",
        marginBottom: "12px",
        color: "#ffffff",
    };

    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
        flexWrap: "wrap",
        marginTop: "10px",
    };

    const buttonStyle = {
        padding: "10px 18px",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        flexGrow: 1,
    };

    const plusBtn = {
        ...buttonStyle,
        backgroundColor: "#34D399", // Light green
        color: "#fff",
    };

    const minusBtn = {
        ...buttonStyle,
        backgroundColor: "#FBBF24", // Yellow
        color: "#fff",
    };

    const removeBtn = {
        ...buttonStyle,
        backgroundColor: "#EF4444", // Bright red
        color: "#fff",
    };

    const handleHover = (e, hoverColor, originalColor) => {
        e.target.style.backgroundColor = hoverColor ? hoverColor : originalColor;
    };

    return (
        <div
            style={containerStyle}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 8px 35px rgba(0, 0, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 25px rgba(0, 0, 0, 0.5)";
            }}
        >
            <div style={nameStyle}>{item.name}</div>
            <div style={priceStyle}>₹{item.price.toFixed(2)}</div>
            <div style={quantityStyle}>Quantity: {item.quantity}</div>
            <div style={buttonContainerStyle}>
                <button
                    style={plusBtn}
                    onMouseEnter={(e) => handleHover(e, "#059669")}
                    onMouseLeave={(e) => handleHover(e, "#34D399")}
                    onClick={() => updateQuantity(item.id, 1)}
                >
                    +
                </button>
                <button
                    style={minusBtn}
                    onMouseEnter={(e) => handleHover(e, "#F59E0B")}
                    onMouseLeave={(e) => handleHover(e, "#FBBF24")}
                    onClick={() => updateQuantity(item.id, -1)}
                >
                    -
                </button>
                <button
                    style={removeBtn}
                    onMouseEnter={(e) => handleHover(e, "#DC2626")}
                    onMouseLeave={(e) => handleHover(e, "#EF4444")}
                    onClick={() => removeFromCart(item.id)}
                >
                    🗑 Remove
                </button>
            </div>
        </div>
    );
}

export default CartItems;
