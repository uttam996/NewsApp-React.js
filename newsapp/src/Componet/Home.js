import React, { useEffect, useState } from 'react'
import response from './data';
import './Home.css';
import Newsitem from './Newsitem';
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const [article, setarticles] = useState([])

  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const key = "75b9f1ede05040bfbd5aaf95bab1cb62";
  const country = "in"
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}&page=1`
  useEffect(() => {
    async function getdata() {
      let res = await fetch(url)
      let data = await res.json()
      console.log(data)
      setarticles(data.articles)
      setTotalResults(data.totalResults)
    }
    getdata()

    // setarticles(response.articles)
    // console.log(article)

  }, [])

  
  const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}&page=${page+1}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setarticles(article.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };


  // {
  //   "source": {
  //     "id": "cnn",
  //     "name": "CNN"
  //   },
  //   "author": "Anna Cooban and Livvy Doherty, CNN Business",
  //   "title": "Emirates slams Heathrow 'incompetence' over summer 'airmageddon' - CNN",
  //   "description": "Emirates airline has blasted one of the world's busiest airports for its \"incompetence\" in failing to handle a surge in passengers.",
  //   "url": "https://www.cnn.com/2022/07/14/business/emirates-heathrow-passenger-cuts/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220714105246-emirates-heathrow-super-tease.jpg",
  //   "publishedAt": "2022-07-14T11:56:00Z",
  //   "content": null
  // },

  return (
    <div className='articles'>
          <InfiniteScroll
                    dataLength={article.length}
                    next={fetchMoreData}
                    hasMore={article.length !== totalResults}
                   
                > 
                    <div className="container">
                         
                    {article.map((el) => {
        
        return <Newsitem key={el.urlToImage} img={el.urlToImage} tittle={el.title} des ={el.description} pub={el.publishedAt}/>
      })}
                    </div> 
                </InfiniteScroll>


    
    </div>

  )
}
