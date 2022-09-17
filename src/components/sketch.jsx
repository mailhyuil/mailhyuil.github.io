import React from 'react';
import Sketch from "react-p5";


const sketch = () => {
    let img;
    let cnv;

    // async () => {
    //     const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year/`);
    //     const json = await response.json();
    //     img = json.data.movies.small_cover_image
    // }

    const preload = (p) => {
        img = p.loadImage('/img/hi.jpg')
    }

    const setup = (p, canvasParentRef) => {
        cnv = p.createCanvas(img.width, img.height).parent(canvasParentRef);
        let newCanvasX = (p.windowWidth - img.width) / 2;
        let newCanvasY = (p.windowHeight - img.height) / 2;
        cnv.position(newCanvasX, newCanvasY);
        for (let col = 0; col < img.width; col += 2) {
            for (let row = 0; row < img.height; row += 2) {
                let xPos = col;
                let yPos = row;
                let c = img.get(xPos, yPos);
                p.push();
                p.translate(xPos, yPos);
                p.rotate(p.radians(p.random(360)))
                p.noFill();
                p.stroke(p.color(c));
                p.strokeWeight(p.random(5));
                p.point(xPos, yPos);
                p.strokeWeight(p.random(3));
                p.curve(xPos, yPos, p.sin(xPos) * p.random(10), p.cos(xPos) * p.sin(xPos) * p.random(10),
                    p.random(10), p.random(10), p.cos(yPos) * p.sin(yPos) * p.random(140), p.cos(xPos) * p.sin(xPos) * 10)
                p.pop();
            }
        }
    };

    return (
        <div className="Sketch">
            <Sketch preload={preload} setup={setup} />
        </div>
    );
};

export default sketch;