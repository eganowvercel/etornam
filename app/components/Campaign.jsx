import React from 'react';
import NewsCard from './NewsCard';
// import Image1 from "/images/2.jpeg";
// import Image2 from "../../public/images/2.jpeg";
// import Image3 from "../images/3.jpeg";


const newsData = [
  {
    image: '/images/2.jpeg',
    title: 'Vice President Bawumia engages constituents of Chereponi and Mion',
    date: 'July 12, 2024',
    description: 'H.E. Alhaji Dr. Mahamudu Bawumia, Vice President of the Republic of Ghana and Flagbearer of the New Patriotic Party (NPP), has on Thursday July 11, 2024, continued his...'
  },
  {
    image: '/images/1.jpeg',
    title: 'Vice President Bawumia commences second phase of campaign in the North',
    date: 'July 11, 2024',
    description: 'The Vice President of the Republic of Ghana and Flagbearer of the New Patriotic Party (NPP), H.E. Alhaji Dr. Mahamudu Bawumia, has on Wednesday July 10,...'
  },
  {
    image: '/images/3.jpeg',
    title: 'Vice President Bawumia officially unveils running mate',
    date: 'July 10, 2024',
    description: 'The Vice President of the Republic of Ghana and Flagbearer of the New Patriotic Party (NPP), H.E. Alhaji Dr. Mahamudu Bawumia, has on Tuesday July 9, 2024,...'
  }
];

function NewsSection() {
  return (
    <section className="lg:py-48 md:py-20 py-10" id='campaign' >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Campaign</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              image={news?.image}
              title={news?.title}
              date={news?.date}
              description={news.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
