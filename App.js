const heading = React.createElement("div" , {id: "parent"} ,[
    React.createElement("div" , {id: "child1"},[
        React.createElement("h1",{},"H1 Tag"),
        React.createElement("h2",{},"H2 Tag")
    ]),
    React.createElement("div" , {id: "child2"},[
        React.createElement("h1",{},"H1 Tag"),
        React.createElement("h2",{},"H2 Tag")
    ])

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);