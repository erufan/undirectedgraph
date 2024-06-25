import UndirectedGraph from "./UndirectedGraph";

const unGraph = new UndirectedGraph();

unGraph.addNode("a");
unGraph.addNode("b");
unGraph.addNode("c");

unGraph.addEdge("a", "b", 4);
unGraph.addEdge("b", "c", 2);
unGraph.addEdge("a", "c", 3);
console.log(unGraph);
