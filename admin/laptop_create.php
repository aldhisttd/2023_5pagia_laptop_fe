<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Input Laptop</h1>
</div>

<div class="row">
    <div class="col">
        <form id="insert-laptop">
         <div class="form-group">
                <label for="kode">Kode</label>
                <input type="text" class="form-control" name="kode" id="kode">
            </div>  
            <div class="form-group">
                <label for="nama">Nama Laptop</label>
                <input type="text" class="form-control" name="nama" id="nama">
            </div>                    
            <div class="form-group">
                <label for="kategori">Kategori</label>
                <select class="form-control" id="kategori" name="kode_kategori"></select>
            </div>
            <div class="form-group">
                <label for="merek">Merek</label>
                <select class="form-control" id="merek" name="kode_merek"></select>
            </div>
            <div class="form-group">
                <label for="gambar">Gambar</label>
                <input type="file" name="gambar" class="form-control-file" id="gambar">
            </div>
            <div class="form-group">
                <label for="harga">Harga</label>
                <input type="text" name="harga" class="form-control" id="harga">
            </div>                    
            <div class="form-group">
                <label for="deskripsi">Deskripsi</label>
                <textarea class="form-control" id="deskripsi" name="deskripsi" rows="3"></textarea>
            </div>
        <button type="submit" class="btn btn-primary btn-lg btn-block" id="submit-btn">Tambah Data Laptop</button>
        </form>
    </div>
</div>