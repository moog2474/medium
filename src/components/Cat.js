import React from "react";

const cat = ["Programming", "Data science", "Technology", "Self Improvement", "Writing", "Relationship", "Machine learning", "Productivity", "Politics"]
export default function () {
    return (
        <div className="cat">
            <h2>Discover more of what matters to you</h2>
            {cat.map((e) => {
                return (
                    <span>{e}</span>
                )
            })}
        </div>
    )
}