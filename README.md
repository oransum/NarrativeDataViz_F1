## Narrative Visualizations - Formula One Racing
This is a story-telling visualisation about *Formula One Racing*. It gives a brief intro but quick dive-in about F1 Legends, drivers' contribution and team performance in modern era.

## Technologies
It is implemented in *D3.js* and of type **Martini Glass narrative**. The full story is split in two parts, you may go to my medium blog for the experience.

- [Part 1](https://medium.com/analytics-vidhya/formula-1-racing-data-visualization-part-1-driver-career-wins-6ef90ae33b8b)
- [Part 2](https://medium.com/analytics-vidhya/formula-1-racing-visualization-part-2-constructor-and-driver-e14c13dafad8)

### Data Pre-processing
Source data is extracted from [Ergast Developer API](http://ergast.com/mrd/). The EDA and data cleaning were performed in R. The output data file is in the structure of relationships among F1 drivers, constructors and champion information.

### Narrative Structure

#### Messaging
This Visualization to introduce the historical trend of Formula One Racing, in which the successes and bonding between drivers and teams from ‘80s to year 2020 will be communicated with the narrative visualization.
Narrative Structure
Martini glass is used for the structure. There are 3 visualizations with first one being a horizontal bar chart without user interaction. The second one is a line chart with mouse hover function. The third one is an arc graph which provides parameter selection for story exploration.

#### Visual Structure
Before viewer goes into the visualization, there are paragraphs providing the background information. The first visualization is a growing bar chart about “F1 Driver Career Wins. Each bar is annotated with driver’s name and the length of the bar grows on-the-fly throughout the time line. Viewer is able to visualize the “race” between drivers. It is followed by another section to describe the history between the leading drivers and teams.
The second one is a line chart showing “Team Standing” in current decades. The chart with y-axis being the points of a team earned in each season. The shape of the line would create a strong impression to viewer about the performance of a team in each season. Meanwhile viewer could relate the ranking of driver in the first bar chart to the second line chart.
The third one is an arc graph which provides parameter selection to explore relationship between drivers and teams. The colour of the nodes and curves indicate current and past contract relationship between the drivers and teams. The contribution from drivers to teams, or vice vera, could be easily visualised. The information could be related by the viewer to the first and the second graph.

#### Scenes
The scene is created by going through each decades of Formula One story. That would be from 80s to 90s, 90s are 00s, 00s – 10s. Drivers’ background will be introduced with the first chart, the next would be the team performance, and the last with the contribution between drivers and teams.

#### Annotations
In the first graph, drivers’ names would be displayed each bar. In the second chart, there is mouse hovering function to display the name of the team at any point of time, which is the x-axis. The line being hovered will be highlighted to facilitate the trend visualization with the remaining lines dimmed. In the third graph, the arc graph, the curve will be high-lighted when hovering, other curves were dimmed in order to visualized the relationship between nodes. 
The annotations are different in all 3 graphs.

#### Parameters
Parameters with three values are used in the third graph. Although it is made for sorting, it facilitates the inference about the success of drivers and teams. One is showing the state of the current and legendary driver-team relationship. The other one is showing by the rank among drivers and teams. The last one is ordering by name, which helps the viewer exploration.

#### Acknowledgment
- http://ergast.com/mrd/
- https://observablehq.com/@d3/gallery
- https://en.wikipedia.org/w/index.phptitle=Formula_One&oldid=979567975
