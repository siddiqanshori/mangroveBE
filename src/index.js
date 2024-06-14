require('dotenv').config()

const PORT = process.env.PORT || 5000;
const express = require('express');
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');
const siswaModel = require('./models/siswas');
const bukuModel = require('./models/bukus');
const mangroveModel = require('./models/mangrove');
const adminModel = require('./models/admins');
const app = express();
const cors = require('cors');

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewareLogRequest);
    app.use('/assets', express.static('public/images'))


app.post('/upload',upload.single('photo'),(req, res) => {
    res.json({
        message: 'Upload berhasil'
    })
})



// LATIHAN SIDDIQ
//USER ROUTE
app.post('/createSiswa', async (req, res, next) => {
    try {
        const dataSiswa = {
            nama: req.body.nama,
            alamat: req.body.alamat,
        };
        console.log(dataSiswa);
        if (!dataSiswa.nama || !dataSiswa.alamat ) {
            throw new Error('Semua Kolom Wajib Di Isi!!!');
        }
        await siswaModel.createSiswa(dataSiswa);
        res.status(201).json({ status: '200',
        message: 'Berhasil Menambah Data Siswa' });
    } catch (error) {
        next(error); 
    }
});


app.get('/getAllSiswa', express.json(), async (req, res, next) => {
    try {
        const [siswas] = await siswaModel.getAllSiswas();
        res.status(200).json({
            status: 200,
            message: 'Berhasil Mengambil Data siswa',
            siswa: siswas,
        });
    } catch (error) {
        next(error);
    }
});

app.delete('/deleteSiswa', async (req, res, next) => {
    try {
        const id = req.body.id; // Mengambil id dari body request
        await siswaModel.deleteSiswa(id);
        res.status(200).json({ 
            status: 200,
            message: 'Berhasil Menghapus Data Siswa'
        });
    } catch (error) {
        next(error); 
    }
});

app.put('/updateSiswa', async (req, res, next) => {
    try {
        const siswaData = {
            id: req.body.id,
            nama: req.body.nama,
            alamat: req.body.alamat,
        };
        await siswaModel.updateSiswa(siswaData);
        res.status(201).json({ 
            status: 200,
            message: 'Berhasil meperbaharui Data siswa'
         });
    } catch (error) {
        next(error); 
    }
});

// BUKU
app.post('/createBuku', async (req, res, next) => {
    try {
        const dataBuku = {
            nama: req.body.nama,
            author: req.body.author,
        };
        console.log(dataBuku);
        if (!dataBuku.nama || !dataBuku.author ) {
            throw new Error('Semua Kolom Wajib Di Isi!!!');
        }
        await bukuModel.createBuku(dataBuku);
        res.status(201).json({ status: '200',
        message: 'Berhasil Menambah Data Buku' });
    } catch (error) {
        next(error); 
    }
});

app.get('/getAllBuku', express.json(), async (req, res, next) => {
    try {
        const [bukus] = await bukuModel.getAllBukus();
        res.status(200).json({
            status: 200,
            message: 'Berhasil Mengambil Data buku',
            buku: bukus,
        });
    } catch (error) {
        next(error);
    }
});

app.delete('/deleteBuku', async (req, res, next) => {
    try {
        const id = req.body.id; // Mengambil id dari body request
        await bukuModel.deleteBuku(id);
        res.status(200).json({ 
            status: 200,
            message: 'Berhasil Menghapus Data Buku'
        });
    } catch (error) {
        next(error); 
    }
});

app.put('/updateBuku', async (req, res, next) => {
    try {
        const dataBuku = {
            id: req.body.id,
            nama: req.body.nama,
            author: req.body.author,
        };
        await bukuModel.updateBuku(dataBuku);
        res.status(201).json({ 
            status: 200,
            message: 'Berhasil meperbaharui Data buku'
         });
    } catch (error) {
        next(error); 
    }
});



// ================================================ MANGROVE =========================================================
//====================================================================================================================
app.post('/createDonate', async (req, res, next) => {
    try {
        const dataDonate = {
            jumlah: req.body.jumlah,
            nama: req.body.nama,
            pesan: req.body.pesan,
        };
        console.log(dataDonate);
        if (!dataDonate.jumlah || !dataDonate.nama || !dataDonate.pesan ) {
            throw new Error('Semua Kolom Wajib Di Isi!!!');
        }
        
        const { createdAt } = await mangroveModel.createDonate(dataDonate);

        res.status(201).json({
            status: '200',
            message: 'Berhasil melakukan Donasi',
            createdAt: createdAt,
        });
    } catch (error) {
        next(error); 
    }
});

app.get('/getAllDonate', express.json(), async (req, res, next) => {
    try {
        const [mangrove] = await mangroveModel.getAllDonate();
        res.status(200).json({
            status: 200,
            message: 'Berhasil Mengambil Data donasi',
            donate: mangrove,
        });
    } catch (error) {
        next(error);
    }
});

app.post('/createComment', async (req, res, next) => {
    try {
        const dataComment = {
            nama: req.body.nama,
            provinsi: req.body.provinsi,
            kota: req.body.kota,
            detail: req.body.detail,
        };
        console.log(dataComment);
        if (!dataComment.nama || !dataComment.provinsi || !dataComment.kota || !dataComment.detail ) {
            throw new Error('Semua Kolom Wajib Di Isi!!!');
        }

        const { createdAt } = await mangroveModel.createComment(dataComment);

        res.status(201).json({
            status: '200',
            message: 'Berhasil Menambah Informasi',
            createdAt: createdAt,
        });
    } catch (error) {
        next(error); 
    }
});

app.delete('/deleteComment', async (req, res, next) => {
    try {
        const id = req.body.id;
        await mangroveModel.deleteComment(id);
        res.status(200).json({ 
            status: 200,
            message: 'Berhasil Menghapus Data Informasi'
        });
    } catch (error) {
        next(error); 
    }
});



app.get('/getAllComment', express.json(), async (req, res, next) => {
    try {
        const [mangrove] = await mangroveModel.getAllComment();
        res.status(200).json({
            status: 200,
            message: 'Berhasil Mengambil Data Informasi',
            comment: mangrove,
        });
    } catch (error) {
        next(error);
    }
});


app.post('/createAdmin',  async (req, res, next) => {
    try {
        const userDataAdmin = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        };
        await adminModel.createNewAdmin(userDataAdmin);
        res.status(201).json({ 
            status: 200,
            message: 'Berhasil Membuat Akun Admin'
         });
    } catch (error) {
        next(error); 
    }
});

app.post('/loginAdmin', async (req, res, next) => {
    try {
        const reqDataLogin = {
            email: req.body.email,
            password: req.body.password
        };

        if (!reqDataLogin.email || !reqDataLogin.password) {
            throw new Error('Email dan password harus diisi');
        }
        
        const token = await adminModel.authenticateAdmin(reqDataLogin);
        const adminData = await adminModel.getAdminByEmail(reqDataLogin.email);

        res.status(200).json({
            message: 'Login berhasil',
            token: token,
            data: {
                id: adminData.id,
                name: adminData.name,
                email: adminData.email,
                password: adminData.password
            }
        });
    } catch (error) {
        next(error); 
    }
});


app.use((err, req, res, next) => {
    res.json({
        message: err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server berhasil di running di port ${PORT}`);
})