export const fetchNews = () => {
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=1b6e99a4f4244702bd1caf4f3fd8e680")
        .then((response: Response) => response.json())
};