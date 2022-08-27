-- MySQL dump 10.13  Distrib 8.0.19, for Linux (x86_64)
--
-- Host: localhost    Database: onlyblogs
-- ------------------------------------------------------
-- Server version	8.0.19-0ubuntu5

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `credits` int NOT NULL DEFAULT '40',
  `blogger_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `blogger_id` (`blogger_id`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`blogger_id`) REFERENCES `blogger` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'http://blog.com',50,1),(2,'http://localhost:3001/splashTest1',30,1);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogger`
--

DROP TABLE IF EXISTS `blogger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogger` (
  `id` int NOT NULL AUTO_INCREMENT,
  `credits` int DEFAULT '0',
  `email` char(50) NOT NULL,
  `first_name` char(50) NOT NULL,
  `last_name` char(50) NOT NULL,
  `password` char(255) NOT NULL,
  `description` text NOT NULL,
  `url` char(100) NOT NULL,
  `image` char(100) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogger`
--

LOCK TABLES `blogger` WRITE;
/*!40000 ALTER TABLE `blogger` DISABLE KEYS */;
INSERT INTO `blogger` VALUES (1,100,'kelly@gmail.com','Kelly','Smelly','$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW','This is a really good blog','www.someblog.com','path/to/file.png'),(2,100,'billy@gmail.com','Billy','Corgan','$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW','This is a really bad blog','www.someblog2.com','path/to/file.png'),(3,100,'bruce@gmail.com','Bruce','Dickenson','$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW','This is an ok blog','www.someblog3.com','path/to/file.png'),(4,100,'Shelley@gmail.com','Shelly','Somename','$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW','This is a blog','www.someblog4.com','path/to/file.png');
/*!40000 ALTER TABLE `blogger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogger_tag`
--

DROP TABLE IF EXISTS `blogger_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogger_tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `blogger_id` int DEFAULT NULL,
  `tag_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `blogger_id` (`blogger_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `blogger_tag_ibfk_1` FOREIGN KEY (`blogger_id`) REFERENCES `blogger` (`id`),
  CONSTRAINT `blogger_tag_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogger_tag`
--

LOCK TABLES `blogger_tag` WRITE;
/*!40000 ALTER TABLE `blogger_tag` DISABLE KEYS */;
INSERT INTO `blogger_tag` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,5),(5,2,7),(6,2,1),(7,3,2),(8,3,4),(9,4,5),(10,4,6),(11,4,1);
/*!40000 ALTER TABLE `blogger_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reader`
--

DROP TABLE IF EXISTS `reader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reader` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` char(255) NOT NULL,
  `first_name` char(255) DEFAULT NULL,
  `last_name` char(255) DEFAULT NULL,
  `password` char(255) NOT NULL,
  `credits` int NOT NULL,
  `terms` tinyint(1) NOT NULL DEFAULT '0',
  `privacy` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reader`
--

LOCK TABLES `reader` WRITE;
/*!40000 ALTER TABLE `reader` DISABLE KEYS */;
INSERT INTO `reader` VALUES (1,'barry.hall@bazza.com','Barry','Hall','$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW',225,1,1),(2,'shirls@gmail.com','Shirley','Somename','$2b$10$Yrhqf3VZqYMFV3bt0pvamOd2FVdRN0hI2oBqsx33qUq/14v./XHeW',430,1,1);
/*!40000 ALTER TABLE `reader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reader_article`
--

DROP TABLE IF EXISTS `reader_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reader_article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `reader_id` int DEFAULT NULL,
  `article_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reader_id` (`reader_id`),
  KEY `article_id` (`article_id`),
  CONSTRAINT `reader_article_ibfk_1` FOREIGN KEY (`reader_id`) REFERENCES `reader` (`id`),
  CONSTRAINT `reader_article_ibfk_2` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reader_article`
--

LOCK TABLES `reader_article` WRITE;
/*!40000 ALTER TABLE `reader_article` DISABLE KEYS */;
/*!40000 ALTER TABLE `reader_article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag_name` char(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'Science'),(2,'Healthcare'),(3,'Entertainment'),(4,'Sport'),(5,'Current Affairs'),(6,'Kids'),(7,'Parenting'),(8,'Food'),(9,'Work');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-27  8:54:44
