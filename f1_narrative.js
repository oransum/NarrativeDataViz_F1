export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["f1_dr_cons_relation_final",
    new URL("./data/f1_dr_cons_relation_final.json",import.meta.url)],
    ["f1_constructorpoint_full.csv",
    new URL("./data/f1_constructorpoint_full.csv",import.meta.url)],
    ["f1_driverwin.csv",
    new URL("./data/f1_driverwin.csv",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Formula One Narrative`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` **Formula One** (also known as Formula 1 or F1) is the highest class of international auto racing sanctioned by the Fédération Internationale de l'Automobile (FIA) and owned by the Formula One Group. <br>

**F1** has been around the world since its inaugural season in 1950. The word "formula" in the name refers to the set of rules to which all participants' cars must conform. A Formula One season consists of a series of races, known as *Grand Prix* which take place worldwide on purpose-built circuits and on public roads.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## I. F1 Driver Career Wins`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
The number of **Grand Prix** in a season has varied through the years, starting from 1950 which had 7 races. This number kept increasing up to a maximum of 21 *GP*s a year (in 2019). Normally there are 19 to 21 *GP*s in a season now.

This graph is showing the number of wins of top 20 F1 drivers from year 1986 to 2020. The rank is up-to-date thoughout the timeline. You may visualize it as a race between drivers.
`
)});
  main.variable(observer("chart_1")).define("chart_1", ["replayRaceGraph","d3","width","height_1","bars","axis","labels","ticker","keyframes","duration","x_1","invalidation"], async function*(replayRaceGraph,d3,width,height_1,bars,axis,labels,ticker,keyframes,duration,x_1,invalidation)
{
  replayRaceGraph;

  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height_1]);

  const updateBars = bars(svg);
  const updateAxis = axis(svg);
  const updateLabels = labels(svg);
  const updateTicker = ticker(svg);

  yield svg.node();

  for (const keyframe of keyframes) {
    const transition = svg.transition()
        .duration(duration)
        .ease(d3.easeLinear);

    // Extract the top bar’s value.
    x_1.domain([0, keyframe[1][0].value]);

    updateAxis(keyframe, transition);
    updateBars(keyframe, transition);
    updateLabels(keyframe, transition);
    updateTicker(keyframe, transition);

    invalidation.then(() => svg.interrupt());
    await transition.end();
  }
}
);
  main.variable(observer("viewof replayRaceGraph")).define("viewof replayRaceGraph", ["html"], function(html){return(
html`<button> Replay Race Graph`
)});
  main.variable(observer("replayRaceGraph")).define("replayRaceGraph", ["Generators", "viewof replayRaceGraph"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md` 

#### '80s - '90s: Prost vs Senna
- Upon the start of the race, [Alain **Prost**](https://en.wikipedia.org/wiki/Alain_Prost) is the leader and quickly followed by the rise of [Ayrton **Senna**](https://en.wikipedia.org/wiki/Ayrton_Senna) in *1987*. <br>

  - The rivalry between the two legends became F1's central focus during [**1988**](https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship), and continued until **Prost** retired at the end of 1993. 
  - **Senna** passed away at the 1994 San Marino Grand Prix after a severe crash. He has the number of **41** wins in merely 10 years while **Prost** had **51** in 13 years of his career(1980 - 1993).
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### '90s - '00s: The Greatest of all time
- [**Michael Schumacher**](https://en.wikipedia.org/wiki/Michael_Schumacher) becomes the first German World Drivers' Champion in 1994 and it didn't stop him from gaining more Grand Prix wins to a legendary record, **91** wins. You may want to click the **Replay Race graph** button to see his rapid rise from *1994* and strong growth until *2006*.

  - He is the only driver in history to win **7 Formula One World Championships**, five of which he won consecutively(2000 - 2004), with [*Ferrari*](https://en.wikipedia.org/wiki/Scuderia_Ferrari). *(The championships are awarded each year to the driver who accumulate the most championship points over the season.)*

  - In the mean time, it was **Prost** and **Senna**, who had retried for an decade, hold the 2nd and the 3rd place.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`
#### '00s - '10s: The Youngest Champion(s)
- Schumacher's championship streak ended on 25 September *2005*, when [Fernando **Alonso**](https://en.wikipedia.org/wiki/Fernando_Alonso) became the first Spanish F1 driver to win the World Championship and was the youngest one-time and two-time drivers' champion(2006) at the time of his successes with [*Renault*](https://en.wikipedia.org/wiki/Renault_in_Formula_One).

  - Before Alonso topped his record with **31** wins, he was having a intense competition with other young drivers. In meantime, [Lewis **Hamilton**](https://en.wikipedia.org/wiki/Lewis_Hamilton) and [Sebestian **Vettel**](https://en.wikipedia.org/wiki/Sebastian_Vettel) were working their way up to the leader pack.

**Hamilton** was the youngest champion in *2008* with [*McLaren*](https://en.wikipedia.org/wiki/McLaren) and **Vettel** broke the record in *2010* and won consecutive titles in *2010–2013* with [*Red Bull Racing*](https://en.wikipedia.org/wiki/Red_Bull_Racing).

- Sebatian **Vettel** surpassed **Prost**'s wins record in *2018*. He departed from *Red Bull* and joined *Ferrari* in 2015.
- **Hamilton** is a six-time Formula One World Champion, having won five with [*Mercedes*](https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One) which made him in both title and wins record the second-most of all time.
`
)});
  main.variable(observer()).define(["md","tex"], function(md,tex){return(
md` ### ${tex`\rightarrow`} Only seven down on the amazing Schumacher's 91 victories

With **Hamilton**'s 84 successes, only seven down on the amazing **Schumacher**'s 91.<br>

Nonetheless, due to the COVID-19 pandemic, the 2020 Formula One World Championship calendar was forced to make major changes as the pandemic resulted in the original 22-race calendar being completely changed and many races cancelled.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## II. Constructor Standing`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Since 1981, **Formula One** teams have been required to build the chassis in which they compete, and consequently the terms "*Team*" and "*Constructor*" became more or less interchangeable.

The Formula One World Constructors' Championship (WCC) is awarded by the FIA to the most successful Formula One **Constructor** over a season based on Grand Prix results.

- The results of each *Grand Prix* are evaluated using a *points system* to determine two annual World Championships: one for drivers, the other for **Constructors**.

- Constructors' Championship points are calculated by adding points scored in each *Grand Prix* by any driver for that constructor.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`#### History of constructor championship.
In the 62 seasons the Championship has been awarded, only 15 constructors have won it, with Scuderia Ferrari the most successful, with 16 titles including 6 consecutive from *1999 to 2004*.

Drivers from [**McLaren**](https://en.wikipedia.org/wiki/McLaren), [**Williams**](https://en.wikipedia.org/wiki/WilliamsF1), [**Renault**](https://en.wikipedia.org/wiki/Renault_in_Formula_One) (formerly Benetton), and [**Ferrari**](https://en.wikipedia.org/wiki/Scuderia_Ferrari), dubbed the "Big Four", won every World Championship from *1984 to 2008*. The teams won every Constructors' Championship from *1979 to 2008* as well as placing themselves as the top four teams in the Constructors' Championship in every season between *1989 and 1997*.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` 
This line graph shows the **constructor championship points** from year *2010 to 2020* for eleven constructors. Ten teams are currently active in season 2020 and one legendary team, Lotus F1, is also included.

- Mouse hover any line would enable you to visualize the constructor performance over the years.
`
)});
  main.variable(observer("chart_2")).define("chart_2", ["d3","width","height","xAxis_2","yAxis_2","data_const","line","hover"], function(d3,width,height,xAxis_2,yAxis_2,data_const,line,hover)
{
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .style("overflow", "visible");

  svg.append("g")
      .call(xAxis_2);

  svg.append("g")
      .call(yAxis_2);

  const path = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
 // .data(data)
 // .attr("stroke", function(d) { return d.c; })/
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
    .selectAll("path")
    .data(data_const.series)
    .join("path")
      .style("mix-blend-mode", "multiply")
      .attr("d", d => line(d.values))
      //.attr("stroke", function(d) { return d.c; });

  svg.call(hover, path);

  return svg.node();
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`### A different story in Modern Era

- With the success of Hamilton in [**Mercedes**](https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One), it is clearly that the German constructor took the lead from year *2015 to 2019*.

- Back to *2010 - 2013*, there were tight battles between the leader [**Red Bull**](https://en.wikipedia.org/wiki/Red_Bull_Racing) and other teams such as **Ferrari** and **Mclaren**.

- In 2010s, **Ferrari** is not doing as good as the past decades.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`## III. Success of Legends, Drivers and Constructors`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` Every team in *Formula One* must run **two** cars in every session in a *Grand Prix* weekend, and every team may use up to four drivers in a season.

The Arc graph shows the current and past contract between **drivers** and **constructors** and the overall GP points standing. With the help of the first two graphs, we are able to visualise the contribution between teams and drivers.

20 drivers, 10 active constructors in season 2020, and 5 legends with their past teams are included in the arc graph.

#### The Five Legends (top 10 in race graph):
  - [Alonso](https://en.wikipedia.org/wiki/Fernando_Alonso)
  - [Lauda](https://en.wikipedia.org/wiki/Niki_Lauda)
  - [Michael Schumacher](https://en.wikipedia.org/wiki/Michael_Schumacher)
  - [Prost](https://en.wikipedia.org/wiki/Alain_Prost)
  - [Senna](https://en.wikipedia.org/wiki/Ayrton_Senna)

The coloured curve indicates current contract between a driver and active teams, while the dimmed curve were their past contracts. Except for the legend, dimmed curve indicates a past relationship with an active constructor.
`
)});
  main.variable(observer("chart")).define("chart", ["d3","DOM","width","height","graph","margin","y","color","arc","step","viewof order","invalidation"], function(d3,DOM,width,height,graph,margin,y,color,arc,step,$0,invalidation)
{
  const svg = d3.select(DOM.svg(width, height));

  svg.append("style").text(`

.hover path {
  stroke: #ccc;
}

.hover text {
  fill: #ccc;
}

.hover g.primary text {
  fill: black;
  font-weight: bold;
}

.hover g.secondary text {
  fill: #333;
}

.hover path.primary {
  stroke: #333;
  stroke-opacity: 1;
}

`);

  const label = svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "end")
    .selectAll("g")
    .data(graph.nodes)
    .join("g")
      .attr("transform", d => `translate(${margin.left},${d.y = y(d.id)})`)
      .call(g => g.append("text")
          .attr("x", -6)
          .attr("dy", "0.35em")
          .attr("fill", d => d3.lab(color(d.group)).darker(2))
          .text(d => d.id))
      .call(g => g.append("circle")
          .attr("r", 3)
          .attr("fill", d => color(d.group)));

  const path = svg.insert("g", "*")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1.5)
    .selectAll("path")
    .data(graph.links)
    .join("path")
      .attr("stroke", d => d.source.group === d.target.group ? color(d.source.group) : "#aaa")
      .attr("d", arc);

  const overlay = svg.append("g")
      .attr("fill", "none")
      .attr("pointer-events", "all")
    .selectAll("rect")
    .data(graph.nodes)
    .join("rect")
      .attr("width", margin.left + 40)
      .attr("height", step)
      .attr("y", d => y(d.id) - step / 2)
      .on("mouseover", d => {
        svg.classed("hover", true);
        label.classed("primary", n => n === d);
        label.classed("secondary", n => n.sourceLinks.some(l => l.target === d) || n.targetLinks.some(l => l.source === d));
        path.classed("primary", l => l.source === d || l.target === d).filter(".primary").raise();
      })
      .on("mouseout", d => {
        svg.classed("hover", false);
        label.classed("primary", false);
        label.classed("secondary", false);
        path.classed("primary", false).order();
      });

  function update() {
    y.domain(graph.nodes.sort($0.value).map(d => d.id));

    const t = svg.transition()
        .duration(750);

    label.transition(t)
        .delay((d, i) => i * 20)
        .attrTween("transform", d => {
          const i = d3.interpolateNumber(d.y, y(d.id));
          return t => `translate(${margin.left},${d.y = i(t)})`;
        });

    path.transition(t)
        .duration(750 + graph.nodes.length * 20)
        .attrTween("d", d => () => arc(d));

    overlay.transition(t)
        .delay((d, i) => i * 20)
        .attr("y", d => y(d.id) - step / 2);
  }

  $0.addEventListener("input", update);
  invalidation.then(() => $0.removeEventListener("input", update));

  return svg.node();
}
);
  main.variable(observer("viewof order")).define("viewof order", ["d3","html"], function(d3,html)
{
  const options = [
    {name: "Order by Team/Driver", value: (a, b) => a.group - b.group || d3.ascending(a.id, b.id)},
    {name: "Order by GP Points", value: (a, b) => d3.sum(b.sourceLinks, l => l.value) + d3.sum(b.targetLinks, l => l.value) - d3.sum(a.sourceLinks, l => l.value) - d3.sum(a.targetLinks, l => l.value) || d3.ascending(a.id, b.id)},
    {name: "Order by Name", value: (a, b) => d3.ascending(a.id, b.id)}

  ];
  const form = html`<form style="display: flex; align-items: center; min-height: 33px;"><select name=i>${options.map(o => Object.assign(html`<option>`, {textContent: o.name}))}`;
  const timeout = setTimeout(() => {
    form.i.selectedIndex = 0;
    form.dispatchEvent(new CustomEvent("input"));
  }, 2000);
  form.onchange = () => {
    clearTimeout(timeout);
    form.value = options[form.i.selectedIndex].value;
    form.dispatchEvent(new CustomEvent("input")); // Safari
  };
  form.value = options[form.i.selectedIndex].value;
  return form;
}
);
  main.variable(observer("order")).define("order", ["Generators", "viewof order"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Strong Bonding
- All legend drivers have joined very similar big teams.
- Most of current drivers have joined only 2 teams.
- Having order by GP points
  - Ferrari is contributed by 5 of the top 10 drivers in the race graph, which is one of the reason Ferrari has leading total points.
  - Mercedes is contributed by only 2 of the top 10 drivers, with Hamilton being one of them. The German constructor is holding the 2nd place tight.
  - Hamilton, as a single driver, has total career point ranking 4th amongst constuctors and the rest of legends.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`*More about point scoring system*

| Seasons     |1st|2nd|3rd|4th|5th|6th|7th |8th |9th |10th|Fastest lap|
|:------------|:--|:--|:--|:--|:--|:--|:---|:---|:---|:---|:---|
|1981 - 1990    |9  |6  |4  |3  |2  |1  |N/A |N/A |N/A |N/A |N/A |
|1991 - 2002    |10 |6  |4  |3  |2  |1  |N/A |N/A |N/A |N/A |N/A |
|2003 - 2009    |10 |8  |6  |5  |4  |3  |2   |1   |N/A |N/A |N/A |
|2010 - 2018    |25 |18 |15 |12 |10 |8  |6   |4   |2   |1   |N/A |
|2019 - Present |25 |18 |15 |12 |10 |8  |6   |4   |2   |1   |1   |
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` This table converys a message that the change of the *point scoring system* is attributed to the rapid rise of modern constructors over the last two decades.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---
## Appendix

Below is the supporting code and data used to generate the visualizations.
`
)});
  main.variable(observer()).define(["md"], function(md){return(
md` ##### Data Files`
)});
  main.variable(observer("data_driver")).define("data_driver", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("f1_driverwin.csv").text(), d3.autoType)
)});
  main.variable(observer("data_con")).define("data_con", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("f1_constructorpoint_full.csv").text(), d3.autoType)
)});
  main.variable(observer("data")).define("data", ["FileAttachment"], function(FileAttachment){return(
FileAttachment("f1_dr_cons_relation_final").json()
)});
  main.variable(observer()).define(["md"], function(md){return(
md` ##### Arc graph elements`
)});
  main.variable(observer("graph")).define("graph", ["data"], function(data)
{
  const nodes = data.nodes.map(({id, group}) => ({
    id,
    sourceLinks: [],
    targetLinks: [],
    group
  }));

  const nodeById = new Map(nodes.map(d => [d.id, d]));

  const links = data.links.map(({source, target, value}) => ({
    source: nodeById.get(source),
    target: nodeById.get(target),
    value
  }));

  for (const link of links) {
    const {source, target, value} = link;
    source.sourceLinks.push(link);
    target.targetLinks.push(link);
  }

  return {nodes, links};
}
);
  main.variable(observer("step")).define("step", function(){return(
14
)});
  main.variable(observer("height")).define("height", ["data","step","margin"], function(data,step,margin){return(
(data.nodes.length - 1) * step + margin.top + margin.bottom
)});
  main.variable(observer("y")).define("y", ["d3","graph","margin","height"], function(d3,graph,margin,height){return(
d3.scalePoint(graph.nodes.map(d => d.id).sort(d3.ascending), [margin.top, height - margin.bottom])
)});
  main.variable(observer("arc")).define("arc", ["margin"], function(margin){return(
function arc(d) {
  const y1 = d.source.y;
  const y2 = d.target.y;
  const r = Math.abs(y2 - y1) / 2;
  return `M${margin.left},${y1}A${r},${r} 0,0,${y1 < y2 ? 1 : 0} ${margin.left},${y2}`;
}
)});
  main.variable(observer("color")).define("color", ["d3","graph"], function(d3,graph){return(
d3.scaleOrdinal(graph.nodes.map(d => d.group).sort(d3.ascending), d3.schemeCategory10)
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 20, bottom: 20, left: 450}
)});
  main.variable(observer()).define(["md"], function(md){return(
md` ##### Line chart elements`
)});
  main.variable(observer("x_2")).define("x_2", ["d3","data_const","margin_2","width"], function(d3,data_const,margin_2,width){return(
d3.scaleUtc()
    .domain(d3.extent(data_const.dates))
    .range([margin_2.left, width - margin_2.right])
)});
  main.variable(observer("y_2")).define("y_2", ["d3","data_const","height_2","margin_2"], function(d3,data_const,height_2,margin_2){return(
d3.scaleLinear()
    .domain([0, d3.max(data_const.series, d => d3.max(d.values))]).nice()
    .range([height_2 - margin_2.bottom, margin_2.top])
)});
  main.variable(observer("line")).define("line", ["d3","x_2","data_const","y_2"], function(d3,x_2,data_const,y_2){return(
d3.line()
    .defined(d => !isNaN(d))
    .x((d, i) => x_2(data_const.dates[i]))
    .y(d => y_2(d))
)});
  main.variable(observer("xAxis_2")).define("xAxis_2", ["height_2","margin_2","d3","x_2","width"], function(height_2,margin_2,d3,x_2,width){return(
g => g
    .attr("transform", `translate(0,${height_2 - margin_2.bottom})`)
    .call(d3.axisBottom(x_2).ticks(width / 80).tickSizeOuter(0))
)});
  main.variable(observer("yAxis_2")).define("yAxis_2", ["margin_2","d3","y_2","data_const"], function(margin_2,d3,y_2,data_const){return(
g => g
    .attr("transform", `translate(${margin_2.left},0)`)
    .call(d3.axisLeft(y_2))
    .call(g => g.select(".domain").remove())
    .call(g => g.select(".tick:last-of-type text").clone()
        .attr("x", 3)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text(data_const.y))
)});
  main.variable(observer("height_2")).define("height_2", function(){return(
600
)});
  main.variable(observer("hover")).define("hover", ["d3","x_2","y_2","data_const"], function(d3,x_2,y_2,data_const){return(
function hover(svg, path) {
  
  if ("ontouchstart" in document) svg
      .style("-webkit-tap-highlight-color", "transparent")
      .on("touchmove", moved)
      .on("touchstart", entered)
      .on("touchend", left)
  else svg
      .on("mousemove", moved)
      .on("mouseenter", entered)
      .on("mouseleave", left);

  const dot = svg.append("g")
      .attr("display", "none");

  dot.append("circle")
      .attr("r", 2.5);

  dot.append("text")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .attr("text-anchor", "middle")
      .attr("y", -8);

  function moved() {
    d3.event.preventDefault();
    const mouse = d3.mouse(this);
    const xm = x_2.invert(mouse[0]);
    const ym = y_2.invert(mouse[1]);
    const i1 = d3.bisectLeft(data_const.dates, xm, 1);
    const i0 = i1 - 1;
    const i = xm - data_const.dates[i0] > data_const.dates[i1] - xm ? i1 : i0;
    const s = d3.least(data_const.series, d => Math.abs(d.values[i] - ym));
    path.attr("stroke", d => d === s ? null : "#ddd").filter(d => d === s).raise();
    //path.attr("stroke", d => d.c ).filter(d => d === s).raise();
    dot.attr("transform", `translate(${x_2(data_const.dates[i])},${y_2(s.values[i])})`);
    dot.select("text").text(s.name);
  }

  function entered() {
    path.style("mix-blend-mode", null).attr("stroke", "#ddd");
    dot.attr("display", null);
  }

  function left() {
    path.style("mix-blend-mode", "multiply").attr("stroke", null);
    dot.attr("display", "none");
  }
}
)});
  main.variable(observer("margin_2")).define("margin_2", function(){return(
{top: 20, right: 20, bottom: 30, left: 30}
)});
  main.variable(observer("data_const")).define("data_const", ["data_con","d3"], function(data_con,d3)
{
  const columns = data_con.columns.slice(1);
  return {
    y: "Constructor Points per Year",
    series: data_con.map(d => ({
      name: d.name.replace(/, ([\w-]+).*/, " $1"),
      values: columns.map(k => +d[k])
    })),
    dates: columns.map(d3.utcParse("%Y-%m-%d"))
  };
}
);
  main.variable(observer()).define(["md"], function(md){return(
md` ##### Race Chart Elements`
)});
  main.variable(observer("k")).define("k", function(){return(
7
)});
  main.variable(observer("n")).define("n", function(){return(
20
)});
  main.variable(observer("duration")).define("duration", function(){return(
250
)});
  main.variable(observer("barSize_1")).define("barSize_1", function(){return(
30
)});
  main.variable(observer("height_1")).define("height_1", ["margin_1","barSize_1","n"], function(margin_1,barSize_1,n){return(
margin_1.top + barSize_1 * n + margin_1.bottom
)});
  main.variable(observer("y_1")).define("y_1", ["d3","n","margin_1","barSize_1"], function(d3,n,margin_1,barSize_1){return(
d3.scaleBand()
    .domain(d3.range(n + 1))
    .rangeRound([margin_1.top, margin_1.top + barSize_1 * (n + 1 + 0.1)])
    .padding(0.1)
)});
  main.variable(observer("x_1")).define("x_1", ["d3","margin_1","width"], function(d3,margin_1,width){return(
d3.scaleLinear([0, 3], [margin_1.left, width - margin_1.right])
)});
  main.variable(observer("axis")).define("axis", ["margin_1","d3","x_1","width","barSize_1","n","y_1"], function(margin_1,d3,x_1,width,barSize_1,n,y_1){return(
function axis(svg) {
  const g = svg.append("g")
      .attr("transform", `translate(0,${margin_1.top})`);

  const axis = d3.axisTop(x_1)
      .ticks(width / 160)
      .tickSizeOuter(0)
      .tickSizeInner(-barSize_1 * (n + y_1.padding()));

  return (_, transition) => {
    g.transition(transition).call(axis);
    g.select(".tick:first-of-type text").remove();
    g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "white");
    g.select(".domain").remove();
  };
}
)});
  main.variable(observer("bars")).define("bars", ["n","color_1","y_1","x_1","prev","next"], function(n,color_1,y_1,x_1,prev,next){return(
function bars(svg) {
  let bar = svg.append("g")
      .attr("fill-opacity", 0.6)
    .selectAll("rect");

  return ([date, data], transition) => bar = bar
    .data(data.slice(0, n), d => d.name)
    .join(
      enter => enter.append("rect")
        .attr("fill", color_1)
        .attr("height", y_1.bandwidth())
        .attr("x", x_1(0))
        .attr("y", d => y_1((prev.get(d) || d).rank))
        .attr("width", d => x_1((prev.get(d) || d).value) - x_1(0)),
      update => update,
      exit => exit.transition(transition).remove()
        .attr("y", d => y_1((next.get(d) || d).rank))
        .attr("width", d => x_1((next.get(d) || d).value) - x_1(0))
    )
    .call(bar => bar.transition(transition)
      .attr("y", d => y_1(d.rank))
      .attr("width", d => x_1(d.value) - x_1(0)));
}
)});
  main.variable(observer("color_1")).define("color_1", ["d3","data_driver"], function(d3,data_driver)
{
  const scale = d3.scaleOrdinal(d3.schemeTableau10);
  if (data_driver.some(d => d.category !== undefined)) {
    //const categoryByName = new Map(data.map(d => [d.name, d.category]))
    const categoryByName = new Map(data_driver.map(d => [d.drivename]))
    scale.domain(Array.from(categoryByName.values()));
    return d => scale(categoryByName.get(d.name));
  }
  return d => scale(d.name);
}
);
  main.variable(observer("rank")).define("rank", ["names","d3","n"], function(names,d3,n){return(
function rank(value) {
  const data = Array.from(names, name => ({name, value: value(name)}));
  data.sort((a, b) => d3.descending(a.value, b.value));
  for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
  return data;
}
)});
  main.variable(observer("labels")).define("labels", ["n","x_1","prev","y_1","next","textTween"], function(n,x_1,prev,y_1,next,textTween){return(
function labels(svg) {
  let label = svg.append("g")
      .style("font", "bold 12px var(--sans-serif)")
      .style("font-variant-numeric", "tabular-nums")
      .attr("text-anchor", "end")
    .selectAll("text");

  return ([date, data], transition) => label = label
    .data(data.slice(0, n), d => d.name)
    .join(
      enter => enter.append("text")
        .attr("transform", d => `translate(${x_1((prev.get(d) || d).value)},${y_1((prev.get(d) || d).rank)})`)
        .attr("y", y_1.bandwidth() / 2)
        .attr("x", -6)
        .attr("dy", "-0.25em")
        .text(d => d.name)
        .call(text => text.append("tspan")
          .attr("fill-opacity", 0.7)
          .attr("font-weight", "normal")
          .attr("x", -6)
          .attr("dy", "1.15em")),
      update => update,
      exit => exit.transition(transition).remove()
        .attr("transform", d => `translate(${x_1((next.get(d) || d).value)},${y_1((next.get(d) || d).rank)})`)
        .call(g => g.select("tspan").tween("text", d => textTween(d.value, (next.get(d) || d).value)))
    )
    .call(bar => bar.transition(transition)
      .attr("transform", d => `translate(${x_1(d.value)},${y_1(d.rank)})`)
      .call(g => g.select("tspan").tween("text", d => textTween((prev.get(d) || d).value, d.value))));
}
)});
  main.variable(observer("ticker")).define("ticker", ["barSize_1","width","margin_1","n","formatDate","keyframes"], function(barSize_1,width,margin_1,n,formatDate,keyframes){return(
function ticker(svg) {
  const now = svg.append("text")
      .style("font", `bold ${barSize_1}px var(--sans-serif)`)
      .style("font-variant-numeric", "tabular-nums")
      .attr("text-anchor", "end")
      .attr("x", width - 6)
      .attr("y", margin_1.top + barSize_1 * (n - 0.45))
      .attr("dy", "0.32em")
      .text(formatDate(keyframes[0][0]));

  return ([date], transition) => {
    transition.end().then(() => now.text(formatDate(date)));
  };
}
)});
  main.variable(observer("formatDate")).define("formatDate", ["d3"], function(d3){return(
d3.utcFormat("%Y")
)});
  main.variable(observer("formatNumber")).define("formatNumber", ["d3"], function(d3){return(
d3.format(",d")
)});
  main.variable(observer("textTween")).define("textTween", ["d3","formatNumber"], function(d3,formatNumber){return(
function textTween(a, b) {
  const i = d3.interpolateNumber(a, b);
  return function(t) {
    this.textContent = formatNumber(i(t));
  };
}
)});
  main.variable(observer("margin_1")).define("margin_1", function(){return(
{top: 16, right: 6, bottom: 6, left: 0}
)});
  main.variable(observer()).define(["md"], function(md){return(
md` ##### Data grouping for race graph`
)});
  main.variable(observer("names")).define("names", ["data_driver"], function(data_driver){return(
new Set(data_driver.map(d => d.drivername))
)});
  main.variable(observer("datevalues")).define("datevalues", ["d3","data_driver"], function(d3,data_driver){return(
Array.from(d3.rollup(data_driver, ([d]) => d.cumwin, d => +d.racedate, d => d.drivername))
.map(([racedate, data_driver]) => [new Date(racedate), data_driver])
.sort(([a], [b]) => d3.ascending(a, b))
)});
  main.variable(observer("nameframes")).define("nameframes", ["d3","keyframes"], function(d3,keyframes){return(
d3.groups(keyframes.flatMap(([, data]) => data), d => d.name)
)});
  main.variable(observer("keyframes")).define("keyframes", ["d3","datevalues","k","rank"], function(d3,datevalues,k,rank)
{
  const keyframes = [];
  let ka, a, kb, b;
  for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
    for (let i = 0; i < k; ++i) {
      const t = i / k;
      keyframes.push([
        new Date(ka * (1 - t) + kb * t),
        rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
      ]);
    }
  }
  keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
  return keyframes;
}
);
  main.variable(observer("prev")).define("prev", ["nameframes","d3"], function(nameframes,d3){return(
new Map(nameframes.flatMap(([, data]) => d3.pairs(data, (a, b) => [b, a])))
)});
  main.variable(observer("next")).define("next", ["nameframes","d3"], function(nameframes,d3){return(
new Map(nameframes.flatMap(([, data]) => d3.pairs(data)))
)});
  main.variable(observer()).define(["md"], function(md){return(
md` ##### Import D3 Library`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5", "d3-array@2")
)});
  return main;
}
