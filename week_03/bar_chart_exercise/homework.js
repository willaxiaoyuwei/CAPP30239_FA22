/* based on the code we learnt from class */
/* Bar chart for  */

d3.csv("library_visits_jan22.csv").then(data => {

    for (let d of data) {
        d.cases = +d.cases; //force a number
    };

    const height = 600,
          width = 800,
          margin = ({ top: 25, right: 30, bottom: 35, left: 50 });

    let svg = d3.select("#chart")
        .append("svg")
        .attr("viewBox", [0, 0, width, height]); // for resizing element in browser
    
    let x = d3.scaleBand()
        .domain(data.map(d => d.country)) // data, returns array
        .range([margin.left, width - margin.right]) // pixels on page
        .padding(0.1);
    
    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.cases)]).nice() // nice rounds the top number
        .range([height - margin.bottom, margin.top]); //svgs are built from top down, so this is reversed
    
    /* Update: simplfied axes */
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom + 5})`) // move location of axis
        .call(d3.axisBottom(x)); // for doing this we append bottom x-axis
    
    svg.append("g")
        .attr("transform", `translate(${margin.left - 5},0)`)
        .call(d3.axisLeft(y)); // append y-axis

    let bar = svg.selectAll(".bar") // create bar groups
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");

    bar.append("rect") // add rect to bar group
        .attr("fill", "steelblue")
        .attr("x", d => x(d.branch)) // according to the instruction x position attribute
        .attr("width", x.bandwidth()) // this width is the width attr on the element
        .attr("y", d => y(d.num)) // according to the instruction y position attribute
        .attr("height", d => y(0) - y(d.num)); // this height is the height attr on element
    
    bar.append('text') // add labels
        .text(d => d.num)
        .attr('x', d => x(d.country) + (x.bandwidth()/2))
        .attr('y', d => y(d.branch) + 15)
        .attr('text-anchor', 'middle')
        .style('fill', 'white');

});