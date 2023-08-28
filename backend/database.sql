-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 54.38.34.182    Database: makesense
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `choices`
--

DROP TABLE IF EXISTS `choices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `choices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` mediumtext NOT NULL,
  `suggests_id` int NOT NULL,
  `title` varchar(128) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_choices_suggests1_idx` (`suggests_id`),
  CONSTRAINT `fk_choices_suggests1` FOREIGN KEY (`suggests_id`) REFERENCES `suggests` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choices`
--

LOCK TABLES `choices` WRITE;
/*!40000 ALTER TABLE `choices` DISABLE KEYS */;
INSERT INTO `choices` VALUES (1,'Having each employee bring their own equipment can have several advantages for companies. Firstly, it can reduce business costs by avoiding the need to purchase equipment for each employee. In addition, employees are often better able to choose the products that are most suitable for them, which can help them to be more productive and do their jobs more efficiently. In addition, it can also allow companies to adapt more quickly to staff changes, without having to manage the transfer of equipment from one employee to another. However, it is important to note that the choice of letting each employee bring their own equipment can lead to inconsistencies in the products used, which can make it more difficult for employees to work together. Ultimately, the choice of this model will depend on the specific needs of the company and their ability to manage potential inconsistencies.',21,'Everyone brings their own material'),(2,'Bureau Vallée can also be a good choice for an office supply provider for several reasons. Firstly, they have a large number of physical shops in many locations, which means that businesses can easily access the products they are looking for. In addition, Bureau Vallée has a wide range of products, from basic supplies to more specialised items, which means that businesses can find everything they need in one place. In addition, Bureau Vallée is known for its excellent customer service, which can be especially important for businesses looking for extra help in finding the right products for their needs. Finally, Bureau Vallée often offers special deals and promotions, which can result in additional savings for businesses. All in all, with its wide range of products, quality customer service and attractive special offers, Bureau Vallée is a solid choice for businesses looking for a reliable and efficient office supply provider.',21,'Top Office'),(3,'Bureau Vallée can also be a good choice for an office supply provider for several reasons. Firstly, they have a large number of physical shops in many locations, which means that businesses can easily access the products they are looking for. In addition, Bureau Vallée has a wide range of products, from basic supplies to more specialised items, which means that businesses can find everything they need in one place. In addition, Bureau Vallée is known for its excellent customer service, which can be especially important for businesses looking for extra help in finding the right products for their needs. Finally, Bureau Vallée often offers special deals and promotions, which can result in additional savings for businesses. All in all, with its wide range of products, quality customer service and attractive special offers, Bureau Vallée is a solid choice for businesses looking for a reliable and efficient office supply provider.',21,'Bureau Vallée');
/*!40000 ALTER TABLE `choices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `content` mediumtext NOT NULL,
  `users_id` int NOT NULL,
  `suggests_id` int NOT NULL,
  `up_vote` int DEFAULT NULL,
  `down_vote` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_comments_users1_idx` (`users_id`),
  KEY `fk_comments_suggests1_idx` (`suggests_id`),
  CONSTRAINT `fk_comments_suggests1` FOREIGN KEY (`suggests_id`) REFERENCES `suggests` (`id`),
  CONSTRAINT `fk_comments_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (46,'2023-01-26 14:18:44','Top Office can be an excellent choice. It was the provider in my previous company, they are very reliable. The quality is great and the service is responsive.',44,21,0,0),(47,'2023-01-26 13:51:04','We can offer gift vouchers to be spent in board game shops. Many employees are keen on this and it promotes cohesion and helps to build relationships.',45,35,1,0);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suggests`
--

DROP TABLE IF EXISTS `suggests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suggests` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` mediumtext NOT NULL,
  `date` date NOT NULL,
  `consequences` mediumtext NOT NULL,
  `priority` int NOT NULL,
  `contribution_date` date NOT NULL,
  `vote_date` date NOT NULL,
  `final_date` date NOT NULL,
  `finale_decision` mediumtext,
  `users_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `title_UNIQUE` (`title`),
  KEY `lkeflzi_idx` (`users_id`),
  CONSTRAINT `lkeflzi` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suggests`
--

LOCK TABLES `suggests` WRITE;
/*!40000 ALTER TABLE `suggests` DISABLE KEYS */;
INSERT INTO `suggests` VALUES (21,'Change of office supply provider','The company has decided to change its office automation supplier due to recurring problems with the current supplier (lack of product availability, long delivery times, high costs, etc.). It is therefore necessary to find a new provider who will meet the company\'s needs in an efficient and reliable manner.','2022-09-23','If the changeover is not managed effectively, it can lead to disruptions in business operations, including delays in receiving office supplies, additional costs to the business and loss of productivity for employees. It is therefore crucial that an effective strategy is put in place to manage this change in a way that minimises the negative impact on the business.',4,'2022-10-30','2022-12-01','2022-12-30','We have taken into account your feedback and the quotes from the various service providers. We decided to choose Top Office. This one is more suitable for our needs.',46),(33,'Relocate the company','We propose to move our current facilities to a new building that is better suited to our space and functional needs. The new building is located in a central location, closer to public transportation, which will facilitate access for our employees and customers. Additionally, it has more modern offices and meeting rooms that will increase our ability to accommodate clients and improve our productivity.','2023-02-06','However, it is important to note that the move may cause disruptions to our operations. We have therefore put in place a detailed plan to minimize these disruptions, including careful planning of the moving logistics, clear communication with all affected employees about upcoming changes, and a transition period to adjust to the new work environment.\n\nUltimately, this move will enable the company to benefit from a more efficient and effective work environment, which will result in increased productivity and improvement of the experience for both employees and customers. We would be happy to discuss this proposal in more detail with you and answer any questions you may ha',1,'2023-02-06','2023-02-13','2023-02-20',NULL,NULL),(34,'Regional day activities on 15 May 2023','We propose to celebrate the regional day of May 15th, 2023 by organizing a series of activities for the company\'s employees, families and friends. These activities aim to promote regional culture, strengthen relationships between employees and enhance overall well-being.\n\nWe have considered several options such as a street parade, outdoor festival, cooking competition, music performance and cultural exhibitions. We also propose to organize a barbecue or picnic for employees and their families, this will allow them to spend a friendly moment together, relax and strengthen relationships among employees.','2023-02-06','We believe that these activities will be appreciated by our employees and will help to reinforce their commitment to the company and improve their well-being. It will also show our commitment to regional culture and traditions. We would be happy to discuss this proposal in more detail with you and take into account your suggestions to select the most appropriate activities for our employees.\n\n\n\n\n\n',3,'2023-02-08','2023-02-16','2023-02-27',NULL,NULL),(35,'End-of-year gift for our employees','We propose to make a gift to all our employees to thank them for their hard work and their commitment to the company throughout the year. We have considered several options, such as gift certificates, leather goods, vouchers for leisure activities or high-tech items.\n\nWe believe that this gift will not only be appreciated by our employees, but it will also help to strengthen their commitment to the company and improve their morale. This will also show our employees that we appreciate their work and are grateful for their contribution to our success.','2023-02-06','It is important to note that we have taken into account the costs associated with this initiative and have budgeted adequately for it. We would be happy to discuss this proposal in more detail with you and take into account your suggestions to select the most appropriate gifts for our employees.',2,'2023-02-07','2023-02-14','2023-03-01',NULL,NULL);
/*!40000 ALTER TABLE `suggests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `password` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `avatar` tinytext,
  `role` varchar(8) NOT NULL,
  `thread_id` int DEFAULT NULL,
  `localisation` varchar(16) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (44,'Waquet','Valentin','$2b$10$emdCSXH1RIqKOFf./eH9POuXfpnPm985Q5guwo6P.Cd2XrpvJjHNy','waquetval@gmail.com','C:\\fakepath\\ciel-etoile-etoiles-sombre.jpg','Valid',NULL,'Paris'),(45,'Bouchez','Florian','$2b$10$B0EoaqVXXqBgGXM9qqDIXO12MhyXSABYMWsYpRONE8qjLLoIaqxtG','fbouchezpro@makesense.com','https://media.discordapp.net/attachments/1070624054719021056/1072438715504406528/flo.png','Valid',NULL,'Paris'),(46,'Valentin','Waquet','$2b$10$8bRO1FApbmt0nsIuHyRvhOkBLcL2ejcCsXKzm1ZsiAsRPG2rPtUG2','waquetv@gmail.com','https://media.discordapp.net/attachments/1070624054719021056/1072438715202420766/Val.png','Valid',NULL,'Paris'),(47,'Gueguen','Kevin','$2b$10$8thDaEF15RHEJfmtyt3QU.nMDvR0V/iElylVjAiYuPCxQPQcfc4pm','gueguenk@gmail.com','https://media.discordapp.net/attachments/1070624054719021056/1072438715764449360/Kevin.jpg','Valid',NULL,'Lima'),(49,'Woo','Jacky','$2b$10$5sNT.ceKjHDaQUn2RbJ9/.zaWPwSsMKSsiSioN2qmMBhSV9mkgSca','jackywoo@gmail.com','C:\\fakepath\\makesense.png','Valid',NULL,'Lima');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_expert`
--

DROP TABLE IF EXISTS `users_expert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_expert` (
  `suggests_id` int NOT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`suggests_id`,`users_id`),
  KEY `fk_suggests_has_users_users2_idx` (`users_id`),
  KEY `fk_suggests_has_users_suggests2_idx` (`suggests_id`),
  CONSTRAINT `fk_suggests_has_users_suggests2` FOREIGN KEY (`suggests_id`) REFERENCES `suggests` (`id`),
  CONSTRAINT `fk_suggests_has_users_users2` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_expert`
--

LOCK TABLES `users_expert` WRITE;
/*!40000 ALTER TABLE `users_expert` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_expert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_impacted`
--

DROP TABLE IF EXISTS `users_impacted`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_impacted` (
  `suggests_id` int NOT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`suggests_id`,`users_id`),
  KEY `fk_suggests_has_users_users1_idx` (`users_id`),
  KEY `fk_suggests_has_users_suggests1_idx` (`suggests_id`),
  CONSTRAINT `fk_suggests_has_users_suggests1` FOREIGN KEY (`suggests_id`) REFERENCES `suggests` (`id`),
  CONSTRAINT `fk_suggests_has_users_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_impacted`
--

LOCK TABLES `users_impacted` WRITE;
/*!40000 ALTER TABLE `users_impacted` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_impacted` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `choices_id` int NOT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_votes_choices1_idx` (`choices_id`),
  KEY `fk_votes_users1_idx` (`users_id`),
  CONSTRAINT `fk_votes_choices1` FOREIGN KEY (`choices_id`) REFERENCES `choices` (`id`),
  CONSTRAINT `fk_votes_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT INTO `votes` VALUES (1,1,44),(2,2,47),(3,3,45),(4,3,46);
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-26 15:09:08