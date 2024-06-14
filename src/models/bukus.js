const dbPool = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');

const saltRounds = 10;
const jwtSecret = 'SECRET';

const getAllBukus = () => {
    const SQLQuery = 'SELECT id, nama, author FROM buku';

    return dbPool.execute(SQLQuery);
}


const createBuku = async (body) => {
    const { nama, author } = body;
    const bukuId = nanoid(16);


    const SQLQuery = `INSERT INTO buku (id, nama, author) 
                      VALUES (?, ?, ?)`;
    const values = [bukuId, nama, author];

    return dbPool.execute(SQLQuery, values);
}

const deleteBuku = async (id) => {
    const SQLQuery = 'DELETE FROM buku WHERE id =?';
    const [result] = await dbPool.execute(SQLQuery, [id]);

    if (result.affectedRows === 0) {
        throw new Error('Data buku Tidak ditermukan');
    }

    return { message: 'Data buku berhasil dihapus' };
};

const updateBuku = async (dataBuku) => {
    const { id, nama, author } = dataBuku;
    console.log(id, nama, author);
    const SQLQuery = `UPDATE buku SET nama=?, author =? WHERE id =?`;
    const [result] = await dbPool.execute(SQLQuery, [nama, author, id]);


    if (result.affectedRows === 0) {
        throw new Error('Data buku tidak ditemukan');
    }

    return { message: 'Data buku berhasil diperbaharui' };
}

module.exports = {
    getAllBukus,
    createBuku,
    deleteBuku,
    updateBuku
}