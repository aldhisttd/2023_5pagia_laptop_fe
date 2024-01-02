$(document).ready(function () {
    // Fungsi untuk memuat data menu
    function loadLaptopData() {
        $.ajax({
            type: "GET",
            url: host + "laptop_read.php",
            dataType: "json",
            success: function (response) {
                var datalaptop = response.body.data;

                // Hapus data yang ada
                $("#datalaptop").empty();

                // Muat ulang data menu setelah penghapusan berhasil
                for (var i = 0; i < datalaptop.length; i++) {
                    $("#datalaptop").append(
                        `
                        <tr>
                            <td>` +
                        (i + 1) +
                        `</td>
                            <td>` +
                        datalaptop[i].kode +
                        `</td>
                            <td>
                            <img src="` +
                        host +
                        datalaptop[i].gambar +
                        `" width="100" />
                                <td>` +
                        datalaptop[i].nama +
                        `</td>
                                <td>` +
                        datalaptop[i].kategori +
                        `</td>
                            <td>` +
                        datalaptop[i].merek +
                        `</td>
                            <td>` +
                        datalaptop[i].deskripsi +
                        `</td>
                            <td>` +
                        datalaptop[i].harga +
                        `</td>
                            <td>
                            <button class="btn btn-danger delete-btn" data-kode="` +
                        datalaptop[i].kode +
                        `">Hapus</button>
                            <button class="btn btn-primary edit-btn">
                                <a class="text-light" href="index.php?page=laptop_edit&kode=` +
                        datalaptop[i].kode +
                        `">Edit</a>
                                        </button>
                                    </td>
                                </tr>
                                `
                    );
                }
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error: " + status, error);
            }
        });
    }

    // Fungsi untuk menangani klik tombol hapus
    function handleDeleteButtonClick() {
        $(document).on("click", ".delete-btn", function () {
            var kode = $(this).data("kode");

            if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
                $.ajax({
                    type: "POST",
                    url:  host + "laptop_delete.php",
                    data: { kode: kode },
                    dataType: "json",
                    success: function (response) {
                        alert(response.msg);
                        loadLaptopData();
                    },
                    error: function (xhr, status, error) {
                        console.error("AJAX Error: " + status, error);
                    }
                });
            }
        });
    }

    // Panggil fungsi loadLaptopData saat memuat halaman
    loadLaptopData();

    // Panggil fungsi handleDeleteButtonClick untuk menangani klik tombol hapus
    handleDeleteButtonClick();
});