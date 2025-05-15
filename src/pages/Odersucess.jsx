import { useCart } from "../context/cartContext";
import { useEffect } from "react";

export default function Ordersuccess() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    const styles = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            fontFamily: "'Poppins', sans-serif",
            padding: "20px"
        },
        card: {
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "40px",
            textAlign: "center",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
            color: "#fff",
            maxWidth: "500px",
            width: "100%",
            animation: "fadeIn 1s ease-in-out"
        },
        title: {
            fontSize: "2.8rem",
            fontWeight: "600",
            marginBottom: "20px"
        },
        message: {
            fontSize: "1.2rem",
            color: "#e0e0e0",
            marginBottom: "30px"
        },
        button: {
            padding: "12px 30px",
            fontSize: "1rem",
            background: "linear-gradient(90deg, #43e97b, #38f9d7)",
            color: "#111",
            fontWeight: "bold",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 0 15px rgba(67, 233, 123, 0.5)"
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>✅ Order Confirmed!</h1>
                <p style={styles.message}>Thank you for your purchase. We're preparing your order.</p>
                <a
                    href="/"
                    style={styles.button}
                    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.08)"}
                    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                    🏠 Back to Home
                </a>
            </div>
        </div>
    );
}
