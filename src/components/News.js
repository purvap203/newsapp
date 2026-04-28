import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItemSkeleton from "./NewsItemSkeleton";
export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

 async componentDidMount() {
  const { searchQuery, category } = this.props;
  let url = searchQuery
    ? `https://newsapp-server-wh93.onrender.com/search?q=${searchQuery}&page=1&pageSize=20`
    : `https://newsapp-server-wh93.onrender.com/news?category=${category}&page=1&pageSize=20`;

  this.setState({ loading: true });
  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    articles: parsedData.articles || [],
    totalResults: parsedData.totalResults || 0,
    loading: false,
    page: 1,
  });
}

async componentDidUpdate(prevProps) {
  if (prevProps.category !== this.props.category || prevProps.searchQuery !== this.props.searchQuery) {
    const { searchQuery, category } = this.props;
    let url = searchQuery
      ? `https://newsapp-server-wh93.onrender.com/search?q=${searchQuery}&page=1&pageSize=20`
      : `https://newsapp-server-wh93.onrender.com/news?category=${category}&page=1&pageSize=20`;

    this.setState({ loading: true, articles: [], page: 1 });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
      page: 1,
    });
  }
}

fetchMoreData = async () => {
  const { searchQuery, category } = this.props;
  const nextPage = this.state.page + 1;
  let url = searchQuery
    ? `https://newsapp-server-wh93.onrender.com/search?q=${searchQuery}&page=${nextPage}&pageSize=20`
    : `https://newsapp-server-wh93.onrender.com/news?category=${category}&page=${nextPage}&pageSize=20`;

  let data = await fetch(url);
  let parsedData = await data.json();
  this.setState({
    articles: this.state.articles.concat(parsedData.articles || []),
    totalResults: parsedData.totalResults || 0,
    page: nextPage,
  });
};

render() {
  const { darkMode } = this.props;

  // Show 9 skeleton cards while loading
  const skeletonArray = Array(9).fill(0);

  return (
    <div className="container my-3">
      <h1
        className="text-center"
        style={{ color: darkMode ? "#ffffff" : "#121212" }}
      >
        NewsMonkey - Top {this.props.category} Headlines
      </h1>

      {/*  Skeleton loading instead of spinner */}
      {this.state.loading && (
        <div className="row">
          {skeletonArray.map((_, index) => (
            <div className="col-md-4" key={index}>
              <NewsItemSkeleton darkMode={darkMode} />
            </div>
          ))}
        </div>
      )}

      {/*  Actual news cards */}
      {!this.state.loading && (
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={
            <div className="row">
              {Array(3).fill(0).map((_, index) => (
                <div className="col-md-4" key={index}>
                  <NewsItemSkeleton darkMode={darkMode} />
                </div>
              ))}
            </div>
          }
        >
          <div className="row">
            {this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  category={this.props.category}
                  darkMode={darkMode}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}
}
export default News;