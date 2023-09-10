export const SuccessMessage = () => {
  const handleReturnToForm = () => {
    // Hapus alamat email dari localStorage saat pengguna kembali ke formulir
    localStorage.removeItem("newsletterEmail");
    // Kembalikan ke tampilan formulir
    window.location.reload(); // Anda bisa menggunakan pendekatan yang lebih baik jika ada, misalnya dengan mengubah state komponen App
  };
  return (
    <div>
      <h2>Thank you for subscribing!</h2>
      <p>You will receive our newsletter in your inbox.</p>
      <button onClick={handleReturnToForm}>Kembali</button>
    </div>
  );
};
