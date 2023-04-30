import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Post from './post'
import { useState, useEffect } from 'react'
import React from 'react';
import posts from './postDB.js';



export default function Home() {
  const [favPosts, setFavPosts] = React.useState([]);
  const [favPage, setFavPage] = useState(false);


  React.useEffect(() => {
    const storedFavPosts = localStorage.getItem('favoritedPosts');
    if (storedFavPosts) {
      setFavPosts(JSON.parse(storedFavPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritedPosts', JSON.stringify(favPosts));
  }, [favPosts]);

  const handleToggleFavorite = (postId) => {
    const isFavorited = favPosts.includes(postId);
    const newFavoritedPosts = isFavorited
      ? favPosts.filter((id) => id !== postId)
      : [...favPosts, postId];

    setFavPosts(newFavoritedPosts);
  };

  const handleFavClick = () => {
    setFavPage(true);
  }
  const handleHomeClick = () => {
    setFavPage(false);
  }

  let toRenderPosts = posts;
  if (favPage)
    toRenderPosts = posts.filter(p => favPosts.includes(p.id));
  return (
    <>
      <Head>
        <title>My shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <div className={`${styles.navbar}`}>
          <div className="home" onClick={handleHomeClick}>
            <img className="" src="./126572_home_house_icon.png" />
          </div>
          <div className="favourites" onClick={handleFavClick}>
            <img className="" src="./whiteheartt2.png" />
          </div>
        </div>
        <div className={`${styles.postContainer}`}>


          {
            toRenderPosts.length === 0 ? (
              <div className={`${styles.noPostContainer}`}>
                <img className="noPostsImage" src='https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/1kutzil5lj0nvfsf_1596544016.jpeg' />
              </div>
            )
              : (
                toRenderPosts.map((post, index) => (
                  < Post key={index} post={post} onToggleFavorite={handleToggleFavorite} isFavorited={favPosts.includes(post.id)} />
                )))
          }
        </div>
      </main>
    </>
  )
}



