import convertString from "../../middleware/convertString"
import {saveArticle, deleteArticle} from "../../service/saved-service"

export default function PrintResults(props){
 
    return props.array.map( article => {
        
        let newDateArray = convertString(article.pub_date)
        let newWeb_url = article.web_url.replace(/[ ,./:+=?;&-]/g,'');
        
        return (
            <div className="articleDiv" key={article._id}>
                <a href={`${article.web_url}`} style={{ textDecoration: 'none', color: "black" }} rel="noreferrer" target="_blank">
                        {article.headline.main && <h1 className="articleHead">{article.headline.main}</h1>}
                        {article.multimedia[0] ? <img className="articleImage" src={`https://static01.nyt.com/${article.multimedia[0].url}`} alt="nothing" /> : <img className="articleImage" src = "/noPhoto.jpeg" alt="noImage"/>}
                        <h2 className="articleAbstractHead">Abstract</h2>
                        {article.abstract && <p className="articleAbstract">{article.abstract.substring(0, 250)}...</p>}
                    <div className="articleFooter">
                        {article.section_name && <p className="articleCategory">Category: {article.section_name}</p>}
                        {article.pub_date && <p className="articlePubDate">Publication Date: {newDateArray}</p>}
                    </div>
                </a>
                <button className = {`black${newWeb_url} blackButton`} onClick={() => saveArticle(article, newWeb_url)}>Save to favorites!</button>
                <button className = {`blue${newWeb_url} blueButton`} onClick={() => deleteArticle(article, newWeb_url)}>Saved!</button>
            </div>
     
        )
    })
}