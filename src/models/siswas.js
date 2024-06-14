const dbPool = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { nanoid } = require('nanoid');

const saltRounds = 10;
const jwtSecret = 'SECRET';

const getAllSiswas = () => {
    const SQLQuery = 'SELECT id, nama, alamat FROM siswa';

    return dbPool.execute(SQLQuery);
}


const createSiswa = async (body) => {
    const { nama, alamat } = body;
    const siswaId = nanoid(16);


    const SQLQuery = `INSERT INTO siswa (id, nama, alamat) 
                      VALUES (?, ?, ?)`;
    const values = [siswaId, nama, alamat];

    return dbPool.execute(SQLQuery, values);
}

const deleteSiswa = async (id) => {
    const SQLQuery = 'DELETE FROM siswa WHERE id =?';
    const [result] = await dbPool.execute(SQLQuery, [id]);

    if (result.affectedRows === 0) {
        throw new Error('Data Siswa Tidak ditermukan');
    }

    return { message: 'Data siswa berhasil dihapus' };
};

const updateSiswa = async (siswaData) => {
    const { id, nama, alamat } = siswaData;
    console.log(id, nama, alamat);
    const SQLQuery = `UPDATE siswa SET nama=?, alamat =? WHERE id =?`;
    const [result] = await dbPool.execute(SQLQuery, [nama, alamat, id]);


    if (result.affectedRows === 0) {
        throw new Error('Data siswa tidak ditemukan');
    }

    return { message: 'Data siswa berhasil diperbaharui' };
}

module.exports = {
    getAllSiswas,
    createSiswa,
    deleteSiswa,
    updateSiswa,
}