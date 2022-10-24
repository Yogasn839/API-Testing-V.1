const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getrentalmobil_new); // routing untuk menampikan data all rental mobil
router.get("/:id_peminjaman", controller.getrentalmobil_newById); // routing untuk mencari data rental mobil berdasarkan id
router.post("/", controller.addatarentalmobil_new); // routing untuk menambahkan data rental mobil
router.delete("/:id_peminjaman", controller.deletedatarentalmobil_new); // routing untuk menghapus data rental mobil berdasarkan id
router.put("/:id_peminjaman", controller.updatedatarentalmobil_new); // routing untuk update data rental mobil berdasarkan id

module.exports = router;
