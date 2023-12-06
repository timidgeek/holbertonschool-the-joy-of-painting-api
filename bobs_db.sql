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
  color_hex VARCHAR(255),
  Black_Gesso BOOLEAN,
  Bright_Red BOOLEAN,
  Burnt_Umber BOOLEAN,
  Cadmium_Yellow BOOLEAN,
  Dark_Sienna BOOLEAN,
  Indian_Red BOOLEAN,
  Indian_Yellow BOOLEAN,
  Liquid_Black BOOLEAN,
  Liquid_Clear BOOLEAN,
  Midnight_Black BOOLEAN,
  Phthalo_Blue BOOLEAN,
  Phthalo_Green BOOLEAN,
  Prussian_Blue BOOLEAN,
  Sap_Green BOOLEAN,
  Titanium_White BOOLEAN,
  Van_Dyke_Brown BOOLEAN,
  Yellow_Ochre BOOLEAN,
  Alizarin_Crimson BOOLEAN,
  Aurora_Borealis BOOLEAN,
  Barn BOOLEAN,
  Beach BOOLEAN,
  Boat BOOLEAN,
  Bridge BOOLEAN,
  Building BOOLEAN,
  Bushes BOOLEAN,
  Cabin BOOLEAN,
  Cactus BOOLEAN,
  Cirrus BOOLEAN,
  Cliff BOOLEAN,
  Clouds BOOLEAN,
  Conifer BOOLEAN,
  Cumulus BOOLEAN,
  Deciduous BOOLEAN,
  Diane_Andre BOOLEAN,
  Dock BOOLEAN,
  Farm BOOLEAN,
  Fence BOOLEAN,
  Fire BOOLEAN,
  Flowers BOOLEAN,
  Fog BOOLEAN,
  Grass BOOLEAN,
  Guest BOOLEAN,
  Hills BOOLEAN,
  Lake BOOLEAN,
  Lakes BOOLEAN,
  Lighthouse BOOLEAN,
  Mill BOOLEAN,
  Moon BOOLEAN,
  Mountain BOOLEAN,
  Mountains BOOLEAN,
  Night BOOLEAN,
  Ocean BOOLEAN,
  Palm_Trees BOOLEAN,
  Path BOOLEAN,
  Person BOOLEAN,
  Portrait BOOLEAN,
  River BOOLEAN,
  Rocks BOOLEAN,
  Snow BOOLEAN,
  Snowy_Mountain BOOLEAN,
  Steve_Ross BOOLEAN,
  Structure BOOLEAN,
  Sun BOOLEAN,
  Tree BOOLEAN,
  Trees BOOLEAN,
  Waterfall BOOLEAN,
  Waves BOOLEAN,
  Windmill BOOLEAN,
  Winter BOOLEAN
);

SELECT * FROM paintings_data WHERE subject LIKE '%tree%';

-- ALTER TABLE paintings_data
-- ADD COLUMN id INT FIRST;
-- ALTER TABLE paintings_data 
-- MODIFY COLUMN id INT AFTER Episode;

SELECT * FROM paintings_data WHERE colors LIKE '%Titanium White%';

SELECT * FROM paintings_data WHERE Month = 'January';

-- ALTER TABLE paintings_data
-- ADD PRIMARY KEY (Title);

-- LOAD DATA INFILE "bob_rocks.csv"
--   INTO TABLE paintings_data
--   FIELDS TERMINATED BY ','
--   IGNORE 1 LINES;