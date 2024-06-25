class Nodes {
  constructor(public label: string) {}
}

class UndirectedGraph {
  private nodes = new Map<string, Nodes>();
  private adjacencyList = new Map<
    Nodes,
    { weight: number | null; nodes: Nodes }[]
  >();

  addNode(label: string) {
    const node = new Nodes(label);
    this.nodes.set(label, node);

    this.adjacencyList.set(node, []);
  }

  addEdge(from: string, to: string, weightNumber: number) {
    const fromNode = this.nodes.get(from);
    const toNode = this.nodes.get(to);

    if (!fromNode || !toNode) {
      throw new Error("Invalid 'from' or 'to' node.");
    }

    this.adjacencyList
      .get(fromNode)!
      .push({ weight: weightNumber, nodes: toNode });

    this.adjacencyList
      .get(toNode)!
      .push({ weight: weightNumber, nodes: fromNode });
  }
}

export default UndirectedGraph;
