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
  const [header, setHeader] = useState<string>("Notícias");

  useEffect(() => {
    getNews();
  }, [])

  const setUuidtoList = (articles: INewsInterface[]) => {
    const newsArticles: INewsInterface[] = articles.map((item, index) => {
      return {...item, id: uuidv4()}
    });

    return newsArticles.filter((item) => item.urlToImage !== null);
  }

  const getNews = async (id?: number) => {
    setLoader(true);
    setTimeout(async() => {
      try {

        const listOfNews = await getTopHeadLines();
        let newsArticles: INewsInterface[] = listOfNews.data;

        if (id !== undefined) {
          newsArticles = newsArticles.filter(c => c.idCategory === id);
          const category = categoryList.filter(c => c.id === id);


          setHeader("Notícias - " + category[0].name);
        }

        setnewslist(newsArticles);
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
        <C.Header>{header}</C.Header>

      <C.Category>
        {categoryList.map((item, index) =>(
          <CategoryComponet
          categoryName={item.name}
          id={item.id}
          search={getNews}
          /> 
        ))}
        </C.Category>
        
        <br/>

          {loader === true ?
          <>
              {/* <C.LoaderArea>
                <ContentLoader 
                speed={2}
                width={400}
                height={400}
                viewBox="0 0 400 400"
                backgroundColor="#c7c7c7"
                foregroundColor="#ecebeb"
                >
                  <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
            </ContentLoader>  
            </C.LoaderArea> */}
  
          </>
        :
          <>
          {newsList.map((item, index) => (
            
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