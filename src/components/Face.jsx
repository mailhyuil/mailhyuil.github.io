import React from 'react';
import '../css/face.css'

var Dot = function (x, y) {
    this.x = x;
    this.y = y;
    this.add = function (w) { this.x += w.x; this.y += w.y; return this; };
    this.min = function (w) { this.x -= w.x; this.y -= w.y; return this; };
};

Math.radians = function (degrees) { return degrees * Math.PI / 180; };
Math.degrees = function (radians) { return radians * 180 / Math.PI; };
//get degrees between two dots
Math.get_deg_between = function (a, b) { var deg = (Math.degrees(Math.atan2(a.x - b.x, a.y - b.y)) * (-1) - 90); return (deg < 0) ? 360 + deg : deg; };

function getRelativeDot(m, deg, dist) {
    return new Dot(
        m.x + Math.cos(Math.radians(deg)) * dist
        , m.y + Math.sin(Math.radians(deg)) * dist
    );
}

document.addEventListener("mousemove", myFunction);
function myFunction(e) {
    var mouse = new Dot(e.clientX, e.clientY);
    var eyes = document.querySelectorAll(".eye");
    for (let i = 0; i < eyes.length; i++) {
        var eye = eyes[i];
        //eye.style.backgroundColor = "red";
        var eye_position = getPosition(eye);
        var eye_mid = new Dot(eye.offsetWidth / 2, eye.offsetWidth / 2);
        // eye_position.add(eye_mid);
        var pill = eye.querySelectorAll('.pill')[0];
        // var degrees = Math.get_deg_between(mouse,eye_position);
        var degrees = Math.get_deg_between(eye_position, mouse);
        var distance = (eye.offsetWidth / 2 - pill.offsetWidth / 2);
        // distance = 1;
        var new_pill = getRelativeDot(eye_mid, degrees, distance);
        var minus = new Dot(pill.offsetWidth / 2, pill.offsetWidth / 2);
        new_pill.min(minus);
        //console.log(degrees)
        // console.log(minus)
        //console.log(eye_mid)
        //console.log(new_pill)
        pill.style.top = new_pill.y + 'px';
        pill.style.left = new_pill.x + 'px';

    }
}

function getPosition(el) {
    var x = 0;
    var y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        x += el.offsetLeft - el.scrollLeft;
        y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return new Dot(x, y);
}


const Face = () => {

    return (
        <div>
            <div className="face">
                <div className="eye" >
                    <div className="pill"></div>
                </div>
                <div className="eye" >
                    <div className="pill"></div>
                </div>
            </div>
        </div>
    );
};

export default Face;