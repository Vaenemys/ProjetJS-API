function displayCards(){ //Fonction qui permet de supprimer les éventuels cartes présentes pour en afficher 10 nouvelles//
    var suppr = document.getElementById('random')
    suppr.innerHTML = ""
    var numCard = 0
    do{
        numCard += 1
        cardData()
        sleep(500)

    } while (numCard < 10)
    
    
}

const sleep = (milliseconds) => { //fonction pour créer une pause//
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function cardData(){ //récupération de données d'API//
    fetch('https://db.ygoprodeck.com/api/v5/randomcard.php')
        .then((response) => {return response.json()})
        .then(json => appendCards(json))
                    
}
        
function appendCards(json){ //Affiche le contenu des cartes, avec un bouton pour pouvoir sélectionner ces derniers//
            let div = document.querySelector('#random')
            div.innerHtml= ""
            json.forEach(card => {
                let ul = document.createElement('li')
                let choseme = document.createElement('button')
                choseme.setAttribute('onclick','chosen()')
                choseme.innerHTML = "Choisir cette carte"
                //let li =  document.createTextNode("Nom de la carte :" + card.name + "|   ")//
                let li = document.createElement('li')
                li.setAttribute('id','card')
                li.innerHTML = "Nom de la carte :" + card.name
                let cardText = document.createTextNode(" Carte :" + card.type + " Type : " + card.race + " Attribut : " + card.attribute +
                " Niveau : " + card.level + " Attaque : " + card.atk + " Défense : " + card.def + " Echelle pendule : " + card.scale + 
                " Classification lien : " + card.linkval + " Marqueurs lien : " + card.linkmarkers + " Effet : " + card.desc)
                let cardImage = document.createTextNode(" Image de la carte : " + card.image_url_small)
                ul.appendChild(choseme)
                div.appendChild(ul)
                ul.appendChild(li)
                ul.appendChild(cardText)
                ul.appendChild(cardImage)
                console.log(card)
                
                }
    
            )
}

function chosen(){ //Fonction qui permet de déplacer le nom de la carte choisie dans le tableau//
    let tr = document.querySelector('#choseme')
    let td = document.createTextNode(card.name)
    tr.appendChild(td)

}