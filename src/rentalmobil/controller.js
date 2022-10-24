const pool = require("./db");
const query = require("./query");

//Menampilkan Data Rental Mobil All
const getrentalmobil_new = (req, res) => {
  pool.query(query.getrentalmobil_new, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

//Menampilkan Data Rental Mobil Berdasarkan ID

const getrentalmobil_newById = (req, res) => {
  const id_peminjaman = parseInt(req.params.id_peminjaman);
  pool.query(
    query.getrentalmobil_newById,
    [id_peminjaman],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    }
  );
};

//Menambahkan Data Rental Mobil

const addatarentalmobil_new = (req, res) => {
  const { nama_mobil, tanggal_peminjaman, status_peminjaman } = req.body;
  //Menambahkan Data Rental Mobil
  pool.query(
    query.addatarentalmobil_new,
    [nama_mobil, tanggal_peminjaman, status_peminjaman],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Data Berhasil Dimasukan");
    }
  );
};

//Menghapus Data Rental Mobil

const deletedatarentalmobil_new = (req, res) => {
  const id_peminjaman = parseInt(req.params.id_peminjaman);

  pool.query(
    query.deletedatarentalmobil_new,
    [id_peminjaman],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Data Berhasil diHapus");
    }
  );
};

//Mengupdate Data Rental Mobil

const updatedatarentalmobil_new = (req, res) => {
  const id_peminjaman = parseInt(req.params.id_peminjaman);
  const { tanggal_pengembalian, status_peminjaman } = req.body;

  pool.query(
    query.updatedatarentalmobil_new,
    [tanggal_pengembalian, status_peminjaman, id_peminjaman],
    (error, results) => {
      if (error) throw error;
      res.status(200).json("Data Berhasil diUpdate");
    }
  );
};

module.exports = {
  getrentalmobil_new,
  getrentalmobil_newById,
  addatarentalmobil_new,
  deletedatarentalmobil_new,
  updatedatarentalmobil_new,
};
