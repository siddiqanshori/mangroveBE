-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2024 at 11:40 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mangrove`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
('iye38VcD6LifJZ_g', 'siddiq', 'siddiq@gmail.com', '$2b$10$nJNnuT3eib4VZLVuzse7e.oiTxgSLGgRMjznNYrVCeFM0Wz54ihV.'),
('UbAlVkLycQAVi67V', 'kelompok4', 'kelompok4@mojadi.com', '$2b$10$nSiX1.gr5Jr7PAXj7a3QmecCUebsNN/9MSl3Ga/dbj3SF7DYVBpOu');

-- --------------------------------------------------------

--
-- Table structure for table `donasi`
--

CREATE TABLE `donasi` (
  `id` varchar(100) NOT NULL,
  `jumlah` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `pesan` varchar(100) NOT NULL,
  `createdAt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donasi`
--

INSERT INTO `donasi` (`id`, `jumlah`, `nama`, `pesan`, `createdAt`) VALUES
('MSrgCg0WOHHPg-lC', '50', 'Kelompok 4', 'semoga donasi ini bermanfaat', '2024-06-14 15:43:28'),
('Rk3y2kEMTpi-2QmZ', '50', 'Kelompok 4', 'semoga donasi ini bermanfaat', '2024-06-14 16:59:42'),
('8V_VXQbh1zYQiHEo', '30', 'Kelompok 4 baru', 'semoga donasi ini bermanfaat banget', '2024-06-14 21:30:29'),
('R4-0oqW9T9x_07V4', '10', 'Kelompok 4 baru v-2', 'semoga donasi ini bermanfaat bangetv-2', '2024-06-14 21:36:31'),
('lLR8Epr0n7dbN24b', '10', 'siddiq coba', 'ini coba donasi', '2024-06-14 23:13:53'),
('4DIWFl-qFDibdffg', '50', 'pardi', 'aku mau bagiin uang gausah di kerjain', '2024-06-14 23:39:06'),
('ohx9OEhrNjfh8gtK', '30', 'Kelompok 4 baru v-3', 'semoga donasi ini bermanfaat bangetv-3', '2024-06-15 00:19:54');

-- --------------------------------------------------------

--
-- Table structure for table `informasi`
--

CREATE TABLE `informasi` (
  `id` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `provinsi` varchar(100) NOT NULL,
  `kota` varchar(100) NOT NULL,
  `detail` varchar(100) NOT NULL,
  `createdAt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `informasi`
--

INSERT INTO `informasi` (`id`, `nama`, `provinsi`, `kota`, `detail`, `createdAt`) VALUES
('J9CWeWSVJnqz3XwW', 'Kelompok 4', 'jawa barat', 'garut', 'sekitar pantai santolo udah mulai rusak tanamannya, semoga informasi ini bisa membantu', '2024-06-14 16:03:45'),
('jDysE4A3_Z0L0zI_', 'siddiq', 'jawa barat', 'pangandaran', 'sekitar pantai pangandaran udah mulai rusak tanamannya, semoga informasi ini bisa membantu', '2024-06-14 16:40:51');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
