


function handleArticle(article){
    const fs = require('fs');
    const content = {"img":article.img,
                     "title":article.title,
                     "body":article.body
                    }
    try {
        fs.writeFileSync('./currentArticle.json', content);
        // file written successfully
        } catch (err) {
        console.error(err);
        }

    
}

export default handleArticle