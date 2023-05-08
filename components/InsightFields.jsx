import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";

Cytoscape.use(COSEBilkent);

export default function InsightFields() {
  const elements = [
    { data: { id: "zenhar123", label: "zenhar123" }, position: { x: 0, y: 0 } },
    { data: { id: "NFT_Creator1", label: "NFT_Creator1" }, position: { x: 200, y: 0 } },
    { data: { id: "test", label: "test" }, position: { x: 100, y: 100 } },
    {
      data: { source: "zenhar123", target: "NFT_Creator1", label: "Edge from Node1 to Node2" },
      data: { source: "NFT_Creator1", target: "zenhar123", label: "123" },
    },
  ];

  const layout = { name: "grid" };

  const style = [
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        label: 'data(id)',
      },
    },
    {
      selector: 'edge',
      style: {
        "width": 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
      },
    },
  ];

  return (
    <div>
      <h2 className="font-bold text-xl text-white tracking-tight insight-title">
        Insights page
      </h2>
      <CytoscapeComponent
        className="node-graph"
        elements={elements}
        // layout={layout}
        // style={style}
      />
    </div>
  );
}
