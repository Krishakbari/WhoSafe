// import React from 'react'
// import Hero from '../Components/HeroSection'
// import NewsBlog from '../Components/NewsBlog'

// const Blog = () => {
//     return (
//         <div className=' max-w-4xl mx-auto p-6 font-[Nunito Sans] mt-15'>
//             <NewsBlog/>


//         </div>
//     )
// }

// export default Blog




import React, { useEffect } from 'react';
import { Helmet } from "react-helmet"; // ← Import Helmet
import NewsBlog from '../Components/NewsBlog';

const Blog = () => {
  // ✅ Set title using useEffect
  useEffect(() => {
    document.title = "WhoSafe | Updates & Articles";
  }, []);

  return (
    <>
      {/* ✅ Helmet for SEO */}
      <Helmet>
        <title>WhoSafe | Updates & Articles</title>
        <meta
          name="description"
          content="Explore the latest safety news, tips, and updates from WhoSafe. Stay informed about GPS wearables, personal safety, and more."
        />
        <meta
          name="keywords"
          content="WhoSafe blog, safety news, women's safety, GPS wearable updates, smart pendant articles"
        />

        {/* Open Graph (for Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Blog | WhoSafe Safety Updates & Articles" />
        <meta property="og:description" content="Safety tips, product updates, and empowering stories from the WhoSafe team." />
        <meta property="og:image" content="https://whosafe.vercel.app/assets/og-blog.jpg" />
        <meta property="og:url" content="https://whosafe.vercel.app/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog | WhoSafe Safety Updates & Articles" />
        <meta name="twitter:description" content="Latest updates and articles from the WhoSafe smart pendant safety platform." />
        <meta name="twitter:image" content="https://whosafe.vercel.app/assets/twitter-blog.jpg" />
      </Helmet>

      {/* Blog Content */}
      <div className='max-w-4xl mx-auto p-6 font-[Nunito Sans] mt-15'>
        <NewsBlog />
      </div>
    </>
  );
};

export default Blog;
