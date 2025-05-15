import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Header() {
    const { cart } = useCart();

    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 32px",
        background: "linear-gradient(135deg, #00b4d8, #48c78e)", // Gradient from blue to green
        color: "#ffffff",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        transition: "background 0.3s ease", // smooth background change
    };

    const logoStyle = {
        fontSize: "28px",
        textDecoration: "none",
        color: "#ffffff", // white text
        fontWeight: "700",
        letterSpacing: "2px", // increased letter spacing for sleek look
        transition: "color 0.3s ease",
    };

    const logoHover = (e, hover) => {
        e.target.style.color = hover ? "#FDCB82" : "#ffffff"; // soft peachy color on hover
    };

    const cartLinkStyle = {
        textDecoration: "none",
        color: "#ffffff",
        fontSize: "18px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontWeight: "500",
        transition: "opacity 0.3s ease, transform 0.3s ease",
    };

    const cartCountStyle = {
        backgroundColor: "#FDCB82", // soft peachy color
        color: "#ffffff",
        borderRadius: "9999px",
        padding: "6px 12px", // slightly larger padding for better visibility
        fontSize: "14px",
        fontWeight: "600",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    };

    return (
        <header style={headerStyle}>
            <Link
                to="/"
                style={logoStyle}
                onMouseEnter={(e) => logoHover(e, true)}
                onMouseLeave={(e) => logoHover(e, false)}
            >
                NeoShop
            </Link>
            <Link
                to="/cart"
                style={cartLinkStyle}
                onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = 0.85;
                    e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >
                🛒 Cart
                <span style={cartCountStyle}>{cart.length}</span>
            </Link>
        </header>
    );
}
