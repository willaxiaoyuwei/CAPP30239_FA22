/* Race bar chart */

d3.json("a3cleanedonly2015.json").then(rawData => {

    const rollup = d3.rollup(rawData, v => v.length, d => d.Race);
    console.log(rollup)
    const arrayRollup = Array.from(rollup, ([key, value]) => ({key, value}));
    const data = arrayRollup.slice(0, -1)

    const height = 250,
          width = 500,
          margin = ({ top: 25, right: 30, bottom: 35, left: 50 });

    let svg = d3.select("#bar_chart")
        .append("svg")
        .attr("viewBox", [0, 0, width, height]);
    
    let x = d3.scaleBand()
        .domain(data.map(d => d.key))
        .range([margin.left, width - margin.right])
        .padding(0.1);
    
    let y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)]).nice()
        .range([height - margin.bottom, margin.top]);
    
    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom + 5})`)
        .call(d3.axisBottom(x));
    
    svg.append("g")
        .attr("transform", `translate(${margin.left - 5},0)`)
        .call(d3.axisLeft(y));

    let bar = svg.selectAll(".bar") 
        .append("g")
        .data(data)
        .join("g")
        .attr("class", "bar");

    bar.append("rect")
        .attr("fill", 'blue')
        .attr("x", d => x(d.key))
        .attr("width", x.bandwidth())
        .attr("y", d => y(d.value)) 
        .attr("height", d => y(0) - y(d.value)); 
    
    bar.append('text')
        .text(d => d.value)
        .attr("x", d => x(d.key) + (x.bandwidth()/2))
        .attr("y", d => y(d.value) - 10)
        .attr("text-anchor", "middle")
        .style("fill", "black");

});