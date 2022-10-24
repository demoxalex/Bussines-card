import React from "react"

export default function Info() {
    return (
        <div className="div">
            <img className="image" src="./Images/profile-pic.png" alt="profile picture" />
            <h1 className="name">Leqso Gabechava</h1>
            <h4 className="job">Frontend Developer</h4>
            <p className="website">leqsogabech.website</p>
            <a href="mailto:gabechleqso@gmail.com"><button className="email"><iconify-icon icon="ic:round-email" style={{height:"13px"}}></iconify-icon>Email</button></a>
        </div>
    )
}