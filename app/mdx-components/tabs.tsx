"use client";
//create a react tabs component with tailwindcss

import React, { useState } from "react";

export const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    
    return (
        <div className="w-full">
        <div className="flex flex-row w-full">
            {children.map((tab) => {
            const { label } = tab.props;
    
            return (
                <div
                key={label}
                onClick={() => setActiveTab(label)}
                className={`${
                    activeTab === label
                    ? "border-b-2 border-blue-500"
                    : "border-b-2 border-transparent"
                } cursor-pointer p-4`}
                >
                {label}
                </div>
            );
            })}
        </div>
        <div className="mt-4">{children.filter((tab) => tab.props.label === activeTab)}</div>
        </div>
    );
    };  



