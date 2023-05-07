import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";

Cytoscape.use(COSEBilkent);

export default function InsightFields() {
  const elements = [
    { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
    { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
    {
      data: { source: "one", target: "two", label: "Edge from Node1 to Node2" },
    },
  ];

  const layout = { name: "cose-bilkent" };

  return (
    <div>
      <h2 className="font-bold text-xl text-white tracking-tight insight-title">
        Insights page
      </h2>
      <CytoscapeComponent
        className="node-graph"
        elements={elements}
      />
    </div>
  );
}
