# agricola-cropture
## Prediction of Crop Prices as a Commodity in the Market

---

## Abstract

Today’s society has progressed far into the fields of science and technology and have been making progress in various available fields that could contribute towards the wellbeing and luxurious lives of mankind. There are alternatives to everything from the basic activities to the things that were deemed as impossible by the people before us. But, the most basic of the things that mankind made a custom back in the beginning of development, which lead the foundations of the society, has been neglected by the technology so revered by all. Agriculture is the most basic and root of our existence and sustenance and should be given top priority. At this age where there is such a great population due to the ease of life and medical facilities, the need of agriculture and farmers should be the top priority. 

On the other hand, farmers are provided with the least benefits and are forced to take up other professions. The inflow of people in this profession is very low which consists of either inherent successors or people with no skills outside of this field of work with no or very less options. 

‘Agriculture Cropture’ is a project which is underway as a means to provide some support to these farmers and ensure the prosperity of the agricultural sector. This project will even seek benefits for not just the farmers but also the small businesses that deal with the wholesale purchases of these commodities

---

## Key Features

- Interactive Landing Page with modular design.
- Graphical representation of the statistical analysis.
- A section displaying the best and least profitable commodities and rise and fall of the commodity prices.
- Easily navigable UI for the ease of access of client side.

---

## Overview

The system proposed under this project lays emphasis on its look and feel. We aim for a modern UI, compatible with all devices, thus ensuring portability and availability of the application. The current system is on a desktop-only model which shall be upgraded and developed into its mobile counterpart upon the successful testing and deployment of the former. 

The website is divided into two sections - the landing interface and the actual dashboard. The landing page shall consist of data about the project and related information like the necessity, the creators, some informational video and the like. The dashboard will include all the outputs derived from the machine learning model. The examples of the content of the dashboard include a list of all the crops to be selected as the commodity, its current market value, its trend across a certain period of time, comparison with different other crops, the top gainer and the top loser crop in the given period. 

---

## Modules

Our modular diagram consists of five modules, the way we see it. The five modules are as follows:

1. Frontend Module
2. Server-side Module
3. Database Module
4. Machine Learning Module
5. Dataset Module

---

## Modular Diagram

![image](https://i.imgur.com/yFDTZAJ.jpg)

1. The green path shows the request line and the red path denotes the response path. The End User shall submit the request to our RESTful application, while applying various filters on the way (eg. District, Market, Crop, Duration etc).
2. The request shall be met by a server-side module which will be composed in Flask, a Python library for server side coding. This server will then pitch for this request in an acceptable form to the machine learning module in the form of a feature tuple which will consist of all the filters the end user requested.
3. The Machine Learning module will receive the feature tuple which will be cross validated with the model so developed and trained in association with the dataset module.
4. The Dataset Module will consist of all the datasets collected from the sources which shall consist of a huge repository of data divided into training and testing partitions. The training data will be trained on itself with the help of the machine learning model and then the testing data will be the measure of the accuracy of the model.
5. The Database module is a minor module which is considerably less significant than the other modules. As this website does not store any significant data, the Database module is not something that can be predetermined and shall be developed on the go.

---



