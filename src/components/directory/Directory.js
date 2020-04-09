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
                    imageUrl: 'images1/hats.jpg',
                    id:1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'images1/jackets.jpg',
                    id:2,
                    linkUrl: 'jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'images1/sneakers.jpg',
                    id:3,
                    linkUrl: 'sneakers'
                },
                {
                    title: 'men',
                    imageUrl: 'images1/man.jpg',
                    size: 'large',
                    id:4,
                    linkUrl: 'men'
                },
                {
                    title: 'women',
                    imageUrl: 'images1/woman.jpg',
                    size: 'large',
                    id:5,
                    linkUrl: 'women'
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))}
            </div>
        )
    }
}

export default Directory