---
layout: project
siteTitle: This utility works with csv and xml...
title: Bill-Sponsor-Tool
lead: Object-oriented data tool.
viewSource: https://github.com/dmck/sponsor-search/
mainImage: images/sponsors-main
altText: Screenshot of the Eclipse showing Java code.
resource: true
categories: projects
---
This tool uses .csv and .xml data from <https://www.govtrack.us/developers/data> to connects US Congressional bills with information about their sponsors (State, First Name, and Last Name).

Opencsv (<http://opencsv.sourceforge.net/>) is used to parse informational about legislators, while each bill information is processed using the javax.xml.parsers.

Objects are created for Legislators and Bills. The Legislators class implements the comparable interface so that legislators can be sorted by ID and searched.

The output.csv (<https://drive.google.com/open?id=1tmq0Rif9n1EllHCL5AcU7hnstDzueGnMDz0LHTCVXz4>) helps  users analyze the legislative effectiveness of the various states and their legislators over time.