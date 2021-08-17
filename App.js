import "./App.css";

import Content from "./Card";

export default function App() {
  const main = [
    {
      type: "FREE",
      price: "$0",
      list: [
        { name: "Single User", isEn: true },
        { name: "5 GB Storage", isEn: true },
        { name: "Unlimited Public Projects", isEn: true },
        { name: "Community Access", isEn: true },
        { name: "Unlimited Private Projects", isEn: false },
        { name: "Dedicated Phone Support", isEn: false },
        { name: "Free Subdomain", isEn: false },
        { name: "Monthly Status Reports", isEn: false }
      ]
    },
    {
      type: "PLUS",
      price: "$9",
      list: [
        { name: "5 Users", isEn: true, isBold: true },
        { name: "50 GB Storage", isEn: true },
        { name: "Unlimited Public Projects", isEn: true },
        { name: "Community Access", isEn: true },
        { name: "Unlimited Private Projects", isEn: true },
        { name: "Dedicated Phone Support", isEn: true },
        { name: "Free Subdomain", isEn: true },
        { name: "Monthly Status Reports", isEn: false }
      ]
    },
    {
      type: "PRO",
      price: "$49",
      list: [
        { name: "Unlimited Users", isEn: true, isBold: true },
        { name: "150 GB Storage", isEn: true },
        { name: "Unlimited Public Projects", isEn: true },
        { name: "Community Access", isEn: true },
        { name: "Unlimited Private Projects", isEn: true },
        { name: "Dedicated Phone Support", isEn: true },
        { name: "Unlimited Free Subdomain", isEn: true },
        { name: "Monthly Status Reports", isEn: true }
      ]
    }
  ];
  return (
    <div className="App">
      {main.map((props) => (
        <Content
          type={props.type}
          price={props.price}
          list={props.list}
        ></Content>
      ))}
    </div>
  );
}
