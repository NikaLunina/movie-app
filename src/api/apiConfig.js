const apiConfig = {

baseUrl : "https://api.themoviedb.org/3",
apiKey : "c2c6a59d2a0cac62c086d6c57a51108a",
originalImg : (imgPath)=> `https://image.tmdb.org/t/p/original/${imgPath}`,
w500lImg : (imgPath)=> `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;