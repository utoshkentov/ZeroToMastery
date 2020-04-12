const INITIAL_STATE = {
    sections : [
        {
            title: 'hats',
            imageUrl: 'images1/hats.jpg',
            id:1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'images1/jackets.jpg',
            id:2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'images1/sneakers.jpg',
            id:3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'women',
            imageUrl: 'images1/woman.jpg',
            size: 'large',
            id:4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'men',
            imageUrl: 'images1/man.jpg',
            size: 'large',
            id:5,
            linkUrl: 'shop/mens'
        },

    ]
};

const directoyReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoyReducer;