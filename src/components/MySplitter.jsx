import React from "react";
import { Skeleton, Splitter } from "antd";

const MySplitter = () => (
    <Splitter
        onResizeStart={() => {
            console.log("onResizeStart");
        }}
        onResize={() => {
            console.log("onResize");
        }}
        onResizeEnd={() => {
            console.log("onResizeEnd");
        }}
        style={{
            height: "100%",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
    >
        <Splitter.Panel
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "green",
            }}
        >
            <Skeleton active={true} />
        </Splitter.Panel>
        <Splitter.Panel
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "gray",
            }}
        >
            <Skeleton active={true} />
        </Splitter.Panel>
    </Splitter>
);

export default MySplitter;
