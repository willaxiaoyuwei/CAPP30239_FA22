## Create Charts for Final Project
For my final project, I decided to end up with create the way people chose to commute within different states in the United States.

So far, I generated some data from ACS dataset as census data source to help me compare with different states. For me, I think the most direct way to represent the data visually is by using bar charts. Thus, I used different bar charts here to create a basic sense about state-area, state-population and how people choose to commute in 2019.

All data found in ACS but the census dataset is pretty large and messy so I did some data cleaning with the help of Excel and Python in order to get the clean version data that I want.

## Dictionary

<table align="center">
	<tbody>
		<tr>
			<td>File Name</td>
			<td>Content</td>
		</tr>
		<tr>
			<td>final.html</td>
			<td>This is the html file that shows the final page</td>
		</tr>
		<tr>
			<td>area.js</td>
			<td>This is the javascript file that we are learning how to use d3 library and make it combined as data visualization with states area data.</td>
		</tr>
        <tr>
			<td>pop2019.js</td>
			<td>This is the javascript file that we are learning how to use d3 library and make it combined as data visualization with population in different states in 2019.</td>
		</tr>
        <tr>
			<td>trans_way.js</td>
			<td>This is the javascript file that we are learning how to use d3 library and make it combined as data visualization with different transportation way people choose in 2019.</td>
		</tr>
		<tr>
			<td>tran_clean.py</td>
			<td>The process I used in python to clean my data.</td>
		</tr>
        <tr>
			<td>area.csv</td>
			<td>Data generated from ACS dataset and after cleaning. I replace the state full name to abbreviation to make it looks clean in barcharts.</td>
		</tr>
        <tr>
			<td>pop2019.csv</td>
			<td>Data generated from ACS dataset and after cleaning showing the population in different states in 2019</td>
		</tr>
        <tr>
			<td>cleaned_df.csv</td>
			<td>Using python to clean the transportation data in 2005-2019.</td>
		</tr>
        <tr>
			<td>us_df.csv</td>
			<td>Data generated from ACS dataset and after cleaning showing 2005-2019 transportation choice within different states in the U.S.</td>
		</tr>
        <tr>
			<td>tran_2019.csv</td>
			<td>Due to the huge data set from us_df, I decided to only use 2019 data in my final project. This is final cleaned version.</td>
		</tr>
		<tr>
			<td>carpool_and_demographics.csv</td>
			<td>The data from BTS and after cleaning.</td>
		</tr>
		<tr>
			<td>map.html</td>
			<td>The U.S. population density choropleth map using Leaflet as an interactive map.</td>
		</tr>
		<tr>
			<td>carpool_chorop.html</td>
			<td>The carpool rate in 2019 choropleth map using D3 libaray.</td>
		</tr>
</table>