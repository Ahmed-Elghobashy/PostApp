import React, { useState } from 'react';
import postStyle from '@/styles/post.module.scss';




function Post(props) {
    const isFavorited = props.isFavorited;
    const heart = isFavorited ? (
        <img className={`${postStyle.favorite_button_icon}`} src='blackheart.png' />
    ) : (
        <img className={`${postStyle.favorite_button_icon}`} src='whiteheartt2.png' />
    );
    const handleFavoriteClick = () => {
        props.onToggleFavorite(props.post.id, true);
    };

    return (
        <div className={`${postStyle.post}`}>
            <div className={`${postStyle.post_author}`}>
                <div className={`${postStyle.post_author_picture_container}`}>
                    <img className={`${postStyle.post_author_picture}`} src={`${props.post.authorPictureUrl}`} alt="author of picture profile picture" />
                </div>
                <p className={`${postStyle.post_author_name}`}>
                    {props.post.author}
                </p>

            </div>
            <div className={`${postStyle.post_content}`}>
                <img className={`${postStyle.post_image}`} src={`${props.post.imageUrl}`} />
                <div className={`${postStyle.post_details}`}>
                    <div className={`${postStyle.product_details}`}>
                        <h4 className={`${postStyle.product_name}`}>Product Name</h4>
                        <p className={`${postStyle.product_price}`}>$100</p>
                    </div>
                    <div className={`${postStyle.favorite_button}`} onClick={handleFavoriteClick}>
                        {heart}
                    </div>
                </div>
            </div>
            <div className={`${postStyle.post_description}`}>
                <div className={`${postStyle.likes}`}>
                    <p>❤ 32 likes</p>
                </div>
                <p className={`${postStyle.post_description_text}`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quo doloremque dicta earum, provident perferendis explicabo cumque, optio quisquam fugiat quidem beatae necessitatibus corrupti doloribus nesciunt non aliquod vitae architecto!
                </p>
                <p className={`${postStyle.post_show_comments}`}>
                    view 12 comments
                </p>
            </div>
        </div>
    );
}

export default Post;
