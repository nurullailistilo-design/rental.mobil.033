// Mengambil form
const form = document.getElementById("formSewa");

// Mengambil data mobil dari URL
const url = new URLSearchParams(window.location.search);
const pilihan = url.get("mobil");

// Mengisi pilihan mobil otomatis
const mobil = document.getElementById("mobil");

if (mobil && pilihan) {
    mobil.value = pilihan;
}

// Memeriksa form
if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const lama = document.getElementById("lama").value;
        const pesan = document.getElementById("pesan");

        if (nama.trim() === "") {
            pesan.textContent = "Nama wajib diisi!";
            pesan.style.color = "red";
        }

        else if (mobil.value === "") {
            pesan.textContent = "Pilih mobil terlebih dahulu!";
            pesan.style.color = "red";
        }

        else if (lama === "" || Number(lama) < 1 ||
                 !Number.isInteger(Number(lama))) {
            pesan.textContent = "Lama sewa minimal 1 hari!";
            pesan.style.color = "red";
        }

        else {
            pesan.textContent = "Penyewaan berhasil divalidasi!";
            pesan.style.color = "green";

            console.log("Nama:", nama);
            console.log("Mobil:", mobil.value);
            console.log("Lama sewa:", lama);
        }

    });

}