import {
    CustomSwiper,
    ReadMore,
    Tile,
    TileArticle,
    TileContent,
    TileImage,
    TileTitle,
    TilesWrapper,
    Title,
    Wrapper
} from './styledNews';
import { useQuery } from '@tanstack/react-query';
import { Article } from '../../../core/interface';
import { Navigation, EffectCoverflow, Scrollbar, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Loader } from '../../../common/Loader/loader';
import { Error } from '../../../common/Error/error';

export const News = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['news'],
        queryFn: () => fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1b6e99a4f4244702bd1caf4f3fd8e680")
            .then((response: Response) => response.json())
    });

    return (
        <Wrapper>
            <Title>The most important news from the business world in one place</Title>
            {isLoading ? <Loader /> : error ? <Error /> : (
                <CustomSwiper
                    breakpoints={{
                        900: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    grabCursor
                    effect={'coverflow'}
                    centeredSlides={true}
                    slidesPerView={1}
                    modules={[Navigation, Scrollbar, EffectCoverflow, Pagination]}
                    spaceBetween={20}
                    loop={true}
                    navigation
                    pagination={{
                        clickable: true
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                >
                    <TilesWrapper>
                        {data && data.articles
                            ? data.articles
                                .filter((article: Article) => article.urlToImage && article.content)
                                .map((article: Article, index: number) => (
                                    <Tile key={index}>
                                        <TileImage src={article.urlToImage} />
                                        <TileContent>
                                            <TileTitle>{article.title}</TileTitle>
                                            <TileArticle>{article.content}</TileArticle>
                                            <ReadMore href={article.url} target='_blank'> Read more 🡢 </ReadMore>
                                        </TileContent>
                                    </Tile>
                                ))
                            : <Error />
                        }
                    </TilesWrapper>
                </CustomSwiper>
            )}
        </Wrapper >
    );
};
