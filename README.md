![Bob Ross](https://ew.com/thmb/pPUJagFlluowMvD7AphS47VgESc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bob-ross-f473f49498b642cfb43ff0a4eb2a0f3c.jpg)
# The Joy of Coding ✨🎨

In this project we are going to explore the idea of ETL (Extract, Transform, Load), which is the process of taking data from multiple unique sources, modifying them in some way, and then storing them in a centralized database. This is a very common practice when collecting data from systems in order to utilize that data in another system. This data may come in the form of CSV, JSON, XML, API requests with other custom formats, etc - it might even be that you have direct access to several databases with different, but relatable data that you want to be merged into another database in order to gain insight from it in some way.

Our task is to organize Bob Ross's extensive painting library. We were given free range on choice of implementation. 

## Pandas 🐼
I chose to utilize Pandas to meticulously clean and structure data from three distinctly structured datasets. I used Jupyter Notebook to execute the Pandas code in pieces, which made it easy and effective to vizualize how the code progressed.

## MySQL 🗃️
For data storage and retrieval, I used MySQL. I wrote the queries in SQL Notebook, which to my enjoyment functioned just like Jupyter. To seamlessly load the CSV data straight into the database, I used MySQL workbench. I had to do a lot of workarounds, as my computer is running on an OS that is over four years old and unable to update.

## API 💻
The final step is to engineer a custom API, allowing users to access and efficiently navigate the repository of 403 painting videos, enhancing search and sorting functionalities. The requirements for searching were as follows:

```
Month of original broadcast
- This will be useful for viewers who wish to watch paintings that were done during that same month of the year

Subject Matter
- This will be useful for viewers who wish to watch specific items get painted

Color Palette
- This will be useful for viewers who wish to watch specific colors being used in a painting
```

This has been the most exciting Holberton project to date!

## Contributors 📝

Lindsey Thomas | [timidgeek.com]("timidgeek.com") ✨


![Bob and a racoon](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhHNMDPJWFYW1yp9VZXNFNOhBfmP2DEd2fA&usqp=CAU)
