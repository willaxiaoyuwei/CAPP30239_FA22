/* Bar chart for US states area */

d3.csv("area.csv").then(data => {

    for (let d of data) {
        d.total_area = +d.total_area; //force a number
    };

    const height = 800,
          width = 1000,
          margin = ({ top: 25, right: 30, bottom: 35, left: 50 });

    let svg = d3.select("#area")
        .append("svg")
        .attr("viewBox", [0, 0, width, height]); // for resizing element in browser
    
    let x = d3.scaleBand()
        .domain(data.map(d => d.state_name)) // data, returns array
        .range([margin.left, width - margin.right]) // pixels on page
        .padding(0.1);
    
    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.total_area)]).nice() // nice rounds the top num
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
        .attr("fill", "steelblue")
        .attr("x", d => x(d.state_name)) // x position attribute
        .attr("width", x.bandwidth()) // this width is the width attr on the element
        .attr("y", d => y(d.total_area)) // y position attribute
        .attr("height", d => y(0) - y(d.total_area)); // this height is the height attr on element
    
    bar.append('text') // add labels
        .text(d => d.total_area)
        .attr('x', d => x(d.state_name) + (x.bandwidth()/2))
        .attr('y', d => y(d.total_area) + 15)
        .attr('text-anchor', 'middle')
        .style('fill', 'black');

});