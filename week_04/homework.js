let height = 500,
    width = 800,
    margin = ({ top: 25, right: 30, bottom: 35, left: 30 })
    innerWidth = width - margin.left - margin.right;

const svg = d3.select("#chart")
  .append("svg")
  .attr("viewBox", [0, 0, width, height]);

d3.csv("long-term-interest-canada.csv").then(data => {
  let timeParse = d3.timeParse("%Y-%m");

  for (let d of data) {
    d.Month = timeParse(d.Month); // Used the shortcut from class changed from date to month
    d.Num = +d.Num; // Used the shortcut here as well
  }

  let x = d3.scaleTime()
  .domain(d3.extent(data, d => d.Month)) // returns an array
  .range([margin.left, width - margin.right]);

let y = d3.scaleLinear()
  .domain([0,d3.max(data, d => d.Num)]).nice() // nice to round up axis tick
  .range([height - margin.bottom, margin.top]);

  // Adding one axis first
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y)
      .tickSize(-innerWidth)
      .tickFormat(d => d + "%")
    );

  // Adding the other axis then
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.top})`)
    .call(d3.axisBottom(x)
      .tickSizeOuter(0)
      .tickSizeInner(0)
    );

  let line = d3.line()
    .x(d => x(d.Month))
    .y(d => y(d.Num));
 
  svg.append("text")
      .attr("class", "x-label")
      .attr("text-anchor", "end")
      .attr("x", width - margin.right)
      .attr("y", height)
      .attr("dx", "0.5em")
      .attr("dy", "-0.5em") 
      .text("Month");

  svg.append("text")
      .attr("class", "y-label")
      .attr("text-anchor", "end")
      .attr("x", -margin.top/2)
      .attr("dx", "-0.5em")
      .attr("y", 10)
      .attr("transform", "rotate(-90)")
      .text("Interest rate"); // text label for y axis
   
  svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "purple") // line color
      .attr("d", line)

  });