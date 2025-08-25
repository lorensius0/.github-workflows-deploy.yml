import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <header style={{ background: "#1d4ed8", color: "white", padding: "15px", borderRadius: "10px" }}>
        <h1>OSIS SMK Stella Maris Labuan Bajo</h1>
        <p>Organisasi Siswa Intra Sekolah</p>
      </header>

      <main style={{ marginTop: "20px" }}>
        <h2>Selamat Datang di Website OSIS</h2>
        <p>
          Ini adalah wadah informasi resmi kegiatan OSIS. Di sini, kamu bisa menemukan berita terbaru, agenda,
          dan dokumentasi kegiatan sekolah.
        </p>
      </main>

      <footer style={{ marginTop: "40px", textAlign: "center", fontSize: "14px" }}>
        © 2025 OSIS SMK Stella Maris Labuan Bajo
      </footer>
    </div>
  );
}

export default App;