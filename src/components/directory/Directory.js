import React, {useState} from "react";
import MenuItem from "../menu-item/Menu-Item";
import "./Directory.scss";

const Directory = () => {
    const [section, setSection] = useState([
        {title: 'hats', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.runnersworld.com%2Fgear%2Fa20859698%2Fbest-new-running-hats%2F&psig=AOvVaw22QnIfG-I87KtskFCXTaAr&ust=1586251941265000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDZkMfM0-gCFQAAAAAdAAAAABAD', id:1},
        {title: 'jackets', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.popularmechanics.com%2Fadventure%2Foutdoor-gear%2Fg3254%2Fbest-winter-coats%2F&psig=AOvVaw3PTt8tr-2Ryejw2B6LHPTL&ust=1586251983189000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCerdfM0-gCFQAAAAAdAAAAABAD', id:2},
        {title: 'sneakers', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.menshealth.com%2Fstyle%2Fa19545684%2Fbest-sneakers-men%2F&psig=AOvVaw3USgcr4nmjSBD5CvU1srr1&ust=1586252009303000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDKvuPM0-gCFQAAAAAdAAAAABAD', id:3},
        {title: 'men', imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fkasorp-shop.com%2Fcollections%2Fmens-clothes&psig=AOvVaw3DIIqx6URXtaysfz9_ftck&ust=1586252041040000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDWivPM0-gCFQAAAAAdAAAAABAD', id:4},
        {title: 'women', imageUrl: 'https://previews.123rf.com/images/evaletova/evaletova1504/evaletova150400009/39337527-collection-of-men-clothes.jpg', id:5},
        ]);

    return (
        <div className="directory-menu">
            {section.map(({title, imageUrl, id, }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} />
            ))}
        </div>

    )
}

export default Directory