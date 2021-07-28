export function convertId(id) {
    
    let newId = "";

    for (let i=14; i<id.length; i++){
        newId += id[i];
    }
    
    return newId;
}