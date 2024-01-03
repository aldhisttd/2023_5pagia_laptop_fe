$(document).ready(function () {
    // Fungsi untuk memuat data laptop dari API dan mengisi tabel
    function loadLaptopData() {
        $.ajax({
            type: "GET",
            url: host + "laptop_read.php", // Ganti dengan URL API yang sesuai
            dataType: "json",
            success: function (response) {
                var laptopList = response.body.data;

                // Bersihkan baris tabel yang sudah ada
                $("#laptopBody").empty();

                // Isi tabel dengan data laptop
                for (var i = 0; i < laptopList.length; i++) {
                    $("#laptopBody").append(
                        '<tr>' +
                        '<td>' + (i + 1) + '</td>' +
                        '<td>' + laptopList[i].kode + '</td>' +
                        '<td>' + laptopList[i].nama + '</td>' +
                        '<td>' + laptopList[i].kategori + '</td>' +
                        '<td>' + laptopList[i].merek + '</td>' +
                        '<td><img src="' + laptopList[i].gambar + '" width="100" /></td>' +
                        '<td>' + laptopList[i].harga + '</td>' +
                        '<td>' + laptopList[i].deskripsi + '</td>' +
                        '<td>' +
                        '<button class="btn btn-danger delete-btn" data-kode="' + laptopList[i].kode + '">Hapus</button>' +
                        '<a class="btn btn-primary" href="index.php?page=laptop_edit&kode=' + laptopList[i].kode + '">Edit</a>' +
                        '</td>' +
                        '</tr>'
                    );
                }
            },
            error: function (xhr, status, error) {
                console.error("Kesalahan AJAX: " + status, error);
            }
        });
    }

    // Memuat data laptop saat halaman dimuat
    loadLaptopData();

    // Fungsi untuk menangani klik tombol hapus
    function handleDeleteButtonClick() {
        $(document).on("click", ".delete-btn", function () {
            var kode = $(this).data("kode");

            if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
                // Memanggil API untuk menghapus data
                $.ajax({
                    type: "POST",
                    url: host + "laptop_delete.php", // Ganti dengan URL API yang sesuai
                    data: { kode: kode },
                    dataType: "json",
                    success: function (response) {
                        alert(response.msg);
                        // Memuat ulang data laptop setelah penghapusan berhasil
                        loadLaptopData();
                    },
                    error: function (xhr, status, error) {
                        console.error("Kesalahan AJAX: " + status, error);
                    }
                });
            }
        });
    }

    // Menambahkan penanganan klik tombol hapus
    handleDeleteButtonClick();
});