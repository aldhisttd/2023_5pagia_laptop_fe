<?php
$res = [
    "status" => 200,
    "msg" => "Data berhasil diinsert",
    "body" => [
        "data" => [
            [
                "kode" => "1",
                "nama" => "Nama Laptop",
                "kategori" => [
                    ["kode_kategori" => "1", "nama_kategori" => "Laptop"],
                    ["kode_kategori" => "2", "nama_kategori" => "Smartphone"],
                ], // tambahkan kurung kurawal penutup di sini
                "merek" => [
                    ["kode_merek" => "1", "nama_merek" => "Asus"],
                    ["kode_merek" => "2", "nama_merek" => "Lenovo"],
                ],
                "gambar" => "upload/gambar.png",
                "harga" => "20000",
                "deskripsi" => "isi deskripsi",
            ],
            [
                "kode" => "2",
                "nama" => "Nama Laptop 2",
                "kategori" => [
                    ["kode_kategori" => "1", "nama_kategori" => "Vivobook"],
                    ["kode_kategori" => "2", "nama_kategori" => "Thinkpad"],
                ], // tambahkan kurung kurawal penutup di sini
                "merek" => [
                    ["kode_merek" => "1", "nama_merek" => "Asus"],
                    ["kode_merek" => "2", "nama_merek" => "Lenovo"],
                ],
                "gambar" => "upload/gambar.png",
                "harga" => "20000",
                "deskripsi" => "isi deskripsi",
            ],
        ]
    ]
];

echo json_encode($res);
?>