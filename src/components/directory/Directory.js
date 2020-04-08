import React, {Component} from "react";
import MenuItem from "../menu-item/Menu-Item";
import "./Directory.scss";

class Directory extends Component{
    constructor() {
        super();
        this.state = {
            sections : [
                {
                    title: 'hats',
                    imageUrl: 'images/hats.jpg',
                    id:1
                },
                {
                    title: 'jackets',
                    imageUrl: 'images/jackets.jpg',
                    id:2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'images/sneakers.jpg',
                    id:3
                },
                {
                    title: 'men',
                    imageUrl: 'images/man.jpg',
                    size: 'large',
                    id:4
                },
                {
                    title: 'women',
                    imageUrl: 'images/woman.jpg',
                    size: 'large',
                    id:5
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}

export default Directory