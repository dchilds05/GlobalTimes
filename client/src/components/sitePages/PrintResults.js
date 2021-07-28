import convertString from "../../middleware/convertString"
import convertId from "../../middleware/convertId"
import {saveArticle, deleteArticle} from "../../service/saved-service"



export default function PrintResults(props){
    
 
    return props.array.map( article => {
        
        let newDateArray = convertString(article.pub_date)
        
        let id=convertId(article._id)
        
        return (
            <div className="articleDiv">
                <a href={`${article.web_url}`} style={{ textDecoration: 'none', color: "black" }}>
                        {article.headline.main && <h1 className="articleHead">{article.headline.main}</h1>}
                        {article.multimedia[0] ? <img className="articleImage" src={`https://static01.nyt.com/${article.multimedia[0].url}`} alt="nothing" /> : <img className="articleImage" src = "/noPhoto.jpeg" alt="noImage"/>}
                        <h2 className="articleAbstractHead">Abstract</h2>
                        {article.abstract && <p className="articleAbstract">{article.abstract.substring(0, 250)}...</p>}
                    <div className="articleFooter">
                        {article.section_name && <p className="articleCategory">Category: {article.section_name}</p>}
                        {article.pub_date && <p className="articlePubDate">Publication Date: {newDateArray}</p>}
                    </div>
                </a>
                <button id = {`black${id}`} className = "articleButton blackButton" onClick={() => saveArticle(article)}>Save to favorites!</button>
                <button className = "articleButton blueButton" onClick={() => deleteArticle(article.web_url)}>Saved!</button>
            </div>
     
        )
    })
}