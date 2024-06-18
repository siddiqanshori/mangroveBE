-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2024 at 04:53 PM
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
  `uang_donasi` varchar(100) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `pesan` varchar(100) NOT NULL,
  `createdAt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donasi`
--

INSERT INTO `donasi` (`id`, `jumlah`, `uang_donasi`, `nama`, `pesan`, `createdAt`) VALUES
('leotLZW0Es80r85R', '1', '7000', 'Siddiq 1', 'siddiq tes 1 pohon harga 7000', '2024-06-18 21:49:56'),
('94YtSdfRGeer8ABB', '5', '30000', 'siddiq 2', 'siddiq tes 5 pohon harga 30k', '2024-06-18 21:50:32'),
('-hp9CCq6QCh-5Ucd', '10', '50000', 'Masyarakat #Peduli', 'siddiq tes 10 pohon 50k', '2024-06-18 21:51:30'),
('T3tJI06QmzB5TgMJ', '50', '300000', 'siddiq', 'tes 50 pohon 300k', '2024-06-18 21:52:24');

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
