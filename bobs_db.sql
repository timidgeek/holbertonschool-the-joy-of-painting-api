SET GLOBAL local_infile=true;
GRANT FILE ON *.* TO 'root'@'localhost';
CREATE DATABASE IF NOT EXISTS bobs_db;

USE bobs_db;
CREATE TABLE IF NOT EXISTS paintings_data (
  Title VARCHAR(60) PRIMARY KEY,
  Date DATE,
  Month VARCHAR(20),
  Episode VARCHAR(20),
  id INT,
  painting_index INT,
  img_src VARCHAR(255),
  youtube_src VARCHAR(255),
  num_colors INT,
  colors VARCHAR(255),
  subject VARCHAR(255),
  color_hex VARCHAR(255)
);
