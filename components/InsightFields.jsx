import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from "cytoscape";
import COSEBilkent from "cytoscape-cose-bilkent";
import { useState } from "react";
import Link from "next/link";
// import IoArrowBackCircleOutline from 'react-icons/io';

Cytoscape.use(COSEBilkent);

const followingData = [
  { data: { id: "zenhar123", label: "zenhar123" }, position: { x: 200, y: 100 } },
  {
    data: { id: "NFT_Creator1", label: "NFT_Creator1" },
    position: { x: 400, y: 100 },
  },
  { data: { id: "test", label: "test" }, position: { x: 300, y: 200 } },
  {
    data: { id: "saiganesh1912", label: "saiganesh1912" },
    position: { x: 500, y: 200 },
  },
  {
    data: { id: "NFT_Watcher1", label: "NFT_Watcher1" },
    position: { x: 500, y: 300 },
  },
  {
    data: { id: "NFT_Watcher2", label: "NFT_Watcher2" },
    position: { x: 300, y: 300 },
  },
  {
    data: {
      source: "zenhar123",
      target: "NFT_Creator1",
      label: "Edge from Node1 to Node2",
    },
  },
  {
    data: {
      source: "zenhar123",
      target: "test",
      label: "Edge from Node1 to Node2",
    },
  },
  { data: { source: "NFT_Creator1", target: "zenhar123", label: "123" } },
  { data: { source: "NFT_Creator1", target: "test", label: "123" } },
  { data: { source: "saiganesh1912", target: "test", label: "123" } },
];

const postData = [
  { data: { id: "645651ea6151985b9652020c", label: "Post - 645651ea6151985b9652020c" }, position: { x: 0, y: 0 } },
  { data: { id: "645646818fb458594f45e9ac", label: "User - 645646818fb458594f45e9ac" }, position: { x: 0, y: 300 } },
  { data: { id: "64565bb2f1c5dd2066387957", label: "User - 64565bb2f1c5dd2066387957" }, position: { x: 300, y: 300 } },
  { data: { id: "64577a13a35d1b9d4272dd0e", label: "User - 64577a13a35d1b9d4272dd0e" }, position: { x: 600, y: 300 } },
  { data: { id: "64589ac2fb516b87ad3ddf48", label: "User - 64589ac2fb516b87ad3ddf48" }, position: { x: 900, y: 300 } },
  { data: { id: "64589ac2fb516b871d2ddf48", label: "User - 64589ac2fb516b871d2ddf48" }, position: { x: 1200, y: 300 } },
  { data: { source: "645651ea6151985b9652020c", target: "645646818fb458594f45e9ac", label: "123" } },
  { data: { source: "645651ea6151985b9652020c", target: "64565bb2f1c5dd2066387957", label: "123" } },
  { data: { source: "645651ea6151985b9652020c", target: "64589ac2fb516b87ad3ddf48", label: "123" } },
  { data: { id: "645760b292471dcf641a7b84", label: "Post - 645760b292471dcf641a7b84" }, position: { x: 300, y: 0 } },
  { data: { source: "645760b292471dcf641a7b84", target: "64589ac2fb516b87ad3ddf48", label: "123" } },
  { data: { id: "64576534344e6fa2a16b5645", label: "Post - 64576534344e6fa2a16b5645" }, position: { x: 600, y: 0 } },
  { data: { source: "64576534344e6fa2a16b5645", target: "64589ac2fb516b87ad3ddf48", label: "123" } },
  { data: { id: "645766e492471dcf641a7bc2", label: "Post - 645766e492471dcf641a7bc2" }, position: { x: 900, y: 0 } },
  { data: { source: "645766e492471dcf641a7bc2", target: "64589ac2fb516b87ad3ddf48", label: "123" } },
  { data: { id: "64576d22b30cf5e19d396426", label: "Post - 64576d22b30cf5e19d396426" }, position: { x: 1200, y: 0 } },
  { data: { source: "64589ac2fb516b87ad3ddf48", target: "64576d22b30cf5e19d396426", label: "123" } },
  { data: { id: "6458a1fa4253306a0f296432", label: "Post - 6458a1fa4253306a0f296432" }, position: { x: 1500, y: 0 } },
  { data: { source: "6458a1fa4253306a0f296432", target: "64589ac2fb516b87ad3ddf48", label: "123" } },
  { data: { source: "6458a1fa4253306a0f296432", target: "645646818fb458594f45e9ac", label: "123" } },
]

export default function InsightFields() {

  const [selected,setSelected]=useState('post')
  const [element,setElement] = useState(postData)

  const layout = { name: "grid" };

  const style = [
    {
      selector: "node",
      style: {
        "background-color": "#666",
        label: "data(id)",
      },
    },
    {
      selector: "edge",
      style: {
        width: 3,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
      },
    },
  ];

  const handleFollowerClick = () => {
    setSelected('following')
    setElement(followingData)
  }

  const handlePostClick = () => {
    setSelected('post')
    setElement(postData)
  }

  return (
    <div>
      <h2 className="font-bold text-xl text-white tracking-tight insight-title">
        <Link href={'/'} className="left-arrow mr-10"></Link>
        Insights page
      </h2>
      <div className="text-white mt-20 tabs-insight flex">
        <div onClick={handleFollowerClick} className={`${selected==='following' ? "ml-5 selectedTab" : "ml-5"}`}>Followers Insights</div>
        <div onClick={handlePostClick} className={`${selected==='post' ? "ml-5 selectedTab" : "ml-5"}`}>Post Insights</div>
      </div>
      <CytoscapeComponent className="node-graph" elements={element} zoom={1} />
    </div>
  );
}
