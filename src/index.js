require('dotenv').config()

const PORT = process.env.PORT || 5000;
const express = require('express');
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer');
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

app.post('/createInformasi', async (req, res, next) => {
    try {
        const dataInformasi = {
            nama: req.body.nama,
            provinsi: req.body.provinsi,
            kota: req.body.kota,
            detail: req.body.detail,
        };
        console.log(dataInformasi);
        if (!dataInformasi.nama || !dataInformasi.provinsi || !dataInformasi.kota || !dataInformasi.detail ) {
            throw new Error('Semua Kolom Wajib Di Isi!!!');
        }

        const { createdAt } = await mangroveModel.createInformasi(dataInformasi);

        res.status(201).json({
            status: '200',
            message: 'Berhasil Menambah Informasi',
            createdAt: createdAt,
        });
    } catch (error) {
        next(error); 
    }
});

app.delete('/deleteInformasi', async (req, res, next) => {
    try {
        const id = req.body.id;
        await mangroveModel.deleteInformasi(id);
        res.status(200).json({ 
            status: 200,
            message: 'Berhasil Menghapus Data Informasi'
        });
    } catch (error) {
        next(error); 
    }
});



app.get('/getAllInformasi', express.json(), async (req, res, next) => {
    try {
        const [mangrove] = await mangroveModel.getAllInformasi();
        res.status(200).json({
            status: 200,
            message: 'Berhasil Mengambil Data Informasi',
            Informasi: mangrove,
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