function partialP(chunk){
    return(
        <>
            <p>{chunk}</p>
        </>
    )
}

function formatParagraph(p){
    var currentWordsInLine = 0
    var newReturnString = ""
    var paragraphs = []
    var start = true 
    for(var i = 0; i < p.length; i++){
        newReturnString += p[i]
        if(p[i] === ',' && start){
            paragraphs.push(<p>{newReturnString}</p>)
            newReturnString = ""
            start = false
        }
        else if(p[i] === '.' && p.substring(i+1,i+4) != 'com' && p.substring(i+1,i+4) != 'org'){
            currentWordsInLine++
        }
        if(currentWordsInLine===3){
            paragraphs.push(<p>{newReturnString}</p>)
            newReturnString = ""
            currentWordsInLine = 0
        }
    }
    return (
        <div id = "paragraphs">
            {paragraphs}
        </div>
    )
}

export default formatParagraph