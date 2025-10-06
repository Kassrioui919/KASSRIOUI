import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* 🔰 Header - logo + name على اليسار */}
<header
  style={{
    position: "absolute",
    top: "1rem",
    left: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <img
    src="/images/logo.png"
    alt="KR Community Logo"
    style={{
      width: "80px",   // ✅ بدلناها من 40px → 60px
      height: "80px",  // ✅ بدلناها من 40px → 60px
      objectFit: "contain",
    }}
  />
  <h1
    style={{
      color: "white",
      fontWeight: "bold",
      fontSize: "1.3rem",
      letterSpacing: "3px",
    }}
  >
    KR COMMUNITY
  </h1>
</header>


      {/* 💬 المحتوى الرئيسي */}
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          مرحباً بك فـ KR COMMUNITY 💪
        </h2>
      </div>
    </div>
  );
}