const getrentalmobil_new = "SELECT * FROM rentalmobil";
const getrentalmobil_newById =
  "SELECT * FROM rentalmobil WHERE id_peminjaman = $1";

const addatarentalmobil_new =
  "INSERT INTO rentalmobil (nama_mobil, tanggal_peminjaman, status_peminjaman) VALUES ($1, $2, $3)";

const deletedatarentalmobil_new =
  "DELETE FROM rentalmobil WHERE id_peminjaman = $1";

const updatedatarentalmobil_new =
  "UPDATE rentalmobil SET tanggal_pengembalian = $1, status_peminjaman =$2 WHERE id_peminjaman = $3";

module.exports = {
  getrentalmobil_new,
  getrentalmobil_newById,
  addatarentalmobil_new,
  deletedatarentalmobil_new,
  updatedatarentalmobil_new,
};
