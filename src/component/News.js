import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  
    static defaultProps ={
        country:'in',
        pageSize:8,
        category:'general'
    }

    static propTypes ={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category : PropTypes.string
    }
    
   capitalizeFirstLetter =(string) => string.charAt(0).toUpperCase() + string.slice(1);

  constructor(props){
    super(props);
    this.state = { 
        articles : [],
        loading:false,
        page:1,
        totalContent:0           //settting defalut value here acting as [state]
   }
   document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
   }

async updateNews(){
  this.props.setProgress(0);
   const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.props.setProgress(20);
   this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json();
  this.props.setProgress(60);
  this.setState({articles: parsedData.articles,
  totalContent:parsedData.totalResults,
    loading:false
  });
  this.props.setProgress(100);
}

async componentDidMount(){
   
   this.updateNews();

}

fetchMoreData=async()=>{
    this.setState({page:this.state.page+1})
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({articles: this.state.articles.concat(parsedData.articles),
    totalContent:parsedData.totalResults,
      loading:false
    });

    
  }


  





  render() {
    return (

        <>
      
        <h1 className="text-center " >News Khabri - Top Headlines on {this.capitalizeFirstLetter(this.props.category)}</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalContent}
          
          loader={<Spinner />}
        >
         
      <div className='container my-3'>
        <div className='row'  >
          {this.state.articles.length > 0 && this.state.articles.map((element)=>{
               return(
                <div className="col-md-4" key={element.url}>
                <NewsItems  title={element.title?element.title.slice(0,50)+"...":"No Description"} 
                description={element.description?element.description.slice(0,80)+"...":"Description Not Available"} 
                imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItems></div>
        
               )
          })}
      </div>
      </div>
          </InfiniteScroll>
  


     
     
     
     
     </>
    )
  }
}

export default News