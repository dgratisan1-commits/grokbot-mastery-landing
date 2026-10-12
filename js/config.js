/**
 * Satu tempat untuk mengganti placeholder operasional.
 * Edit nilai di bawah, lalu refresh halaman.
 */
export const siteConfig = {
  /** URL formulir pendaftaran resmi */
  registrationUrl: "https://example.com/daftar-grok-bot-mastery",

  /** Placeholder format kelas — ganti saat jadwal & harga resmi tersedia */
  classFormat: {
    date: "[Tanggal]",
    duration: "[Durasi]",
    price: "[Harga]",
  },

  /**
   * Logo: set useLogoImage true setelah menaruh file di /assets/logo.svg
   * (atau ubah path di index.html).
   */
  logo: {
    useLogoImage: false,
    src: "/assets/logo.svg",
  },
};
