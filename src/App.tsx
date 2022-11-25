import * as C from './App.styles';
import React, {useState, useEffect} from 'react';
import { CategoryList } from './utils/category/Category';
import {INewsInterface} from './core/interfaces/INewsInterface';
import {Card} from './components/card/index';
import {CategoryComponet} from './components/categoryList/index';
//import {api} from './services/api';
import {getTopHeadLines} from './services/News.service';
import { v4 as uuidv4 } from 'uuid';
import { Format } from './utils/date/FormatDate';
import ContentLoader from 'react-content-loader';


interface IPropsCard {
  url: string;
  title: string;
  date: string;
  image: string;
  moreInfo: () => {}
}

const App = () => {

  const [newsList, setnewslist] = useState<INewsInterface[]>([]);
  const [categoryList, setCategoryList] = useState(CategoryList);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getNews();
  }, [])

  const setUuidtoList = (articles: INewsInterface[]) => {
    const newsArticles: INewsInterface[] = articles.map((item) => {
      return {...item, id: uuidv4()}
    });

    return newsArticles.filter((item) => item.urlToImage !== null);
  }

  const getNews = async (categoryName?: string) => {
    setLoader(true);
    setTimeout(async() => {
      try {

        const listOfNews = categoryName ? await getTopHeadLines(categoryName) : await getTopHeadLines();
        
        const { articles } = listOfNews.data;
        console.log(listOfNews.data);
        const newsArticles = setUuidtoList(articles);
        
        setnewslist(newsArticles);
        console.log(newsArticles);
      } catch (error) {
        //showAlert(true, 'Ops! Algo deu errado, tente novamente mais tarde.')
      } finally {
        setLoader(false);
      } 
    }, 1000);
    

  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Top Notícias</C.Header>

      <C.Category>
        {categoryList.map((item) =>(
          <CategoryComponet
          categoryName={item.name}
          categoryNameTranslated={item.translatedName}
          search={getNews}
          /> 
        ))}
        </C.Category>
        
        <br/>

          {loader === true ?
          <>
            <ContentLoader 
              speed={2}
              width={400}
              height={160}
              viewBox="0 0 400 160"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="18" y="20" rx="0" ry="0" width="4" height="1" /> 
              <circle cx="195" cy="93" r="53" />
            </ContentLoader> 
          </>
        :
          <>
          {newsList.map((item) => (
            <Card
              url={item.url}
              title={item.title}
              date={Format.formatDate(item.publishedAt)}
              image={item.urlToImage}
            ></Card>
          ))}
        </>}
    
        
      </C.Area>
    </C.Container>

    
  )

}

export default App;