import React from "react"
const cot = [
    "Help",
    "Status",
    "Writers",
    "Blog",
    "Careers",
    "Privacy",
    "Terms",
    "About",
    "Text to speech",
  ]
export default function Cot() {
    return (
        <div className="cot">
            {cot.map((b) => {
                return (
                    <a>{b}</a>
                )
            })}

        </div>
    )
}