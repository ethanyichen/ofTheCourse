import React from 'react';
import './Header.css'
import './../bootstrap.min.css'

function generateBadge() {
    var badgeJSX = []
    badgeContents.forEach(function(element){
            badgeJSX.push(<td>
                <span className="badge badge-pill badge-secondary"> {element} </span>
            </td>)})
    return(badgeJSX)
}

var badgeContents = ['Instructor', 'Difficulty', 'Exam', 'Assignment', 'Grading']

function Header() {
    return (
        <div className="jumbotron" id="description">
            <h1 className="display-4" id="display_name">ofthecourse</h1>
            <p className="lead" id="display_websiteDescription">Find reviews and useful study tips for your courses</p>
            <p className="text-left" id="infoText"> information about:</p>
            <table id="infoTable">
                <tr id="infoTableR1">
                    {generateBadge()}
                </tr>
            </table>
        </div>
    )
}


export default Header