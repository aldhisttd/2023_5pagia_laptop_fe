$(document).ready(function () {
    readMerek();

    // API read
    function readMerek() {
      $("#merekData").empty();
      $.ajax({
        type: "GET",
        url: host + "merek_read.php",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
          var dataMerek = data.body.data;
          for (var i = 0; i < dataMerek.length; i++) {
            $("#merekData").append(
              "<tr>" +
                "<td>" + (i + 1) + "</td>" +
                "<td>" + dataMerek[i].kode + "</td>" +
                "<td>" + dataMerek[i].nama + "</td>" +
                "<td>" +
                "<button class='btn btn-danger hapus' value='" +
                dataMerek[i].kode +
                "'>Hapus</button>" +
                "<button class='btn btn-primary'>" +
                "<a class='text-light' href='?page=merek_edit&kode=" +
                dataMerek[i].kode +
                "'>Edit</a>" +
                "</button>" +
                "</td>" +
                "</tr>"
            );
          }
        },
      });
    }

    // API hapus
    $(document).on("click", ".hapus", function () {
      var kode = $(this).val();

      if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
        $.ajax({
          type: "POST",
          url: host + "merek_delete.php",
          data: { kode: kode },
          dataType: "json",
          async: true,
          success: function (response) {
            alert(response.msg);
            readMerek();
          },
        });
      }
    });
  });