d3.csv("pop2019.csv").then(data => {

    for (let d of data) {
        d.population = +d.population; //force a number
    };

    const height = 800,
          width = 1000,
          margin = ({ top: 25, right: 30, bottom: 35, left: 50 });

    let svg = d3.select("#population")
        .append("svg")
        .attr("viewBox", [0, 0, width, height]); // for resizing element in browser
    
    let x = d3.scaleBand()
        .domain(data.map(d => d.state)) // data, returns array
        .range([margin.left, width - margin.right]) // pixels on page
        .padding(0.1);
    
    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.population)]).nice() // nice rounds the top num
        .range([height - margin.bottom, margin.top]); //svgs are built from top down, so this is reversed
    
    /* Update: simplfied axes */
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom + 5})`) 
        .call(d3.axisBottom(x))
    
    svg.append("g")
        .attr("transform", `translate(${margin.left - 5},0)`)
        .call(d3.axisLeft(y));

    let bar = svg.selectAll(".bar") // create bar groups
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");

    bar.append("rect") // add rect to bar group
        .attr("fill", "#64b5f6")
        .attr("x", d => x(d.state)) // x position attribute
        .attr("width", x.bandwidth()) // this width is the width attr on the element
        .attr("y", d => y(d.population)) // y position attribute
        .attr("height", d => y(0) - y(d.population)); // this height is the height attr on element

});

