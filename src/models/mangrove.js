const dbPool = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');
const moment = require('moment-timezone');


const saltRounds = 10;
const jwtSecret = 'SECRET';

const getAllDonate = () => {
    const SQLQuery = 'SELECT id, jumlah, nama, pesan, createdAt FROM pohon';

    return dbPool.execute(SQLQuery);
}


const createDonate = async (body) => {
    const { jumlah, nama, pesan } = body;
    const donateId = nanoid(16);
    const createdAt = moment().tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm:ss'); 

    const SQLQuery = `INSERT INTO pohon (id, jumlah, nama, pesan, createdAt) 
                      VALUES (?, ?, ?, ?, ?)`;
    const values = [donateId, jumlah, nama, pesan, createdAt];

    await dbPool.execute(SQLQuery, values);

    return { donateId, createdAt };
}


const getAllComment = () => {
    const SQLQuery = 'SELECT id, nama, provinsi, kota, detail, createdAt FROM comment';
    
    return dbPool.execute(SQLQuery);
}

const createComment = async (body) => {
    const { nama, provinsi, kota, detail } = body;
    const commentId = nanoid(16);
    const createdAt = moment().tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm:ss');

    const SQLQuery = `INSERT INTO comment (id, nama, provinsi, kota, detail, createdAt) 
                      VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [commentId, nama, provinsi, kota, detail, createdAt];

    await dbPool.execute(SQLQuery, values);

    return { commentId, createdAt };
}


const deleteComment = async (id) => {
    const SQLQuery = 'DELETE FROM comment WHERE id =?';
    const [result] = await dbPool.execute(SQLQuery, [id]);

    if (result.affectedRows === 0) {
        throw new Error('Data informasi Tidak ditermukan');
    }

    return { message: 'Data informasi berhasil dihapus' };
};

// const updateBuku = async (dataBuku) => {
//     const { id, nama, author } = dataBuku;
//     console.log(id, nama, author);
//     const SQLQuery = `UPDATE buku SET nama=?, author =? WHERE id =?`;
//     const [result] = await dbPool.execute(SQLQuery, [nama, author, id]);


//     if (result.affectedRows === 0) {
//         throw new Error('Data buku tidak ditemukan');
//     }

//     return { message: 'Data buku berhasil diperbaharui' };
// }

module.exports = {
    getAllDonate,
    createDonate,
    createComment,
    deleteComment,
    getAllComment
}