export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
      />
      <input
        type="password"
        placeholder="Password"
        style={{ padding: "10px", marginBottom: "10px", borderRadius: "5px" }}
      />
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
}
