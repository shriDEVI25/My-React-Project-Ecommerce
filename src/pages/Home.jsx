import { useState } from "react";
import { products } from "../date/product.js";
import ProductCard from "../components/ProductCard";
import { FaStoreAlt } from "react-icons/fa"; // 🎯 Fancy store icon

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filtered = products.filter(
        (p) =>
            (category === "All" || p.category === category) &&
            p.name.toLowerCase().includes(search.toLowerCase())
    );

    const categories = ["All", ...new Set(products.map((p) => p.category))];

    const styles = {
        container: {
            padding: "30px",
            fontFamily: "'Poppins', sans-serif", // Modern font
            background: "linear-gradient(135deg, #b3cde0, #f2d1f2)", // Soft pastel gradient
            minHeight: "100vh",
            color: "#333", // Darker text for contrast
        },
        heading: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.5rem",
            color: "#6a4c93", // Bold purple accent
            gap: "10px",
            marginBottom: "25px",
            fontWeight: "600",
        },
        filters: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "35px",
            flexWrap: "wrap",
            fontSize: "1.1rem",
        },
        input: {
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minWidth: "220px",
            outline: "none",
            transition: "border-color 0.3s ease",
        },
        inputFocus: {
            borderColor: "#6a4c93", // Purple on focus
        },
        select: {
            padding: "12px",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            minWidth: "180px",
            backgroundColor: "#f4f4f4", // Light background
            transition: "background-color 0.3s ease",
        },
        selectFocus: {
            backgroundColor: "#e3d9f9", // Light purple background when focused
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
        },
        button: {
            padding: "12px 25px",
            fontSize: "1rem",
            backgroundColor: "#6a4c93", // Purple
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
        },
        buttonHover: {
            backgroundColor: "#8e44ad", // Darker purple on hover
            transform: "scale(1.05)",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                <FaStoreAlt size={35} color="#6a4c93" />
                Explore Our Products
            </h1>
            <div style={styles.filters}>
                <input
                    type="text"
                    placeholder="🔎 Search for products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ ...styles.input, ...(search && styles.inputFocus) }}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ ...styles.select, ...(category && styles.selectFocus) }}
                >
                    {categories.map((cat) => (
                        <option key={cat}>{cat}</option>
                    ))}
                </select>
            </div>
            <div style={styles.grid}>
                {filtered.map((product) => (
                    <ProductCard key={product.id + product.name} product={product} />
                ))}
            </div>
            <button style={styles.button} className="buy-now-btn">
                Buy Now
            </button>
        </div>
    );
}
