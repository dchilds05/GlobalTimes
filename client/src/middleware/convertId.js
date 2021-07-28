export default function convertId(id) {

    let newId = "";

    if(id.length === 54){
        for (let i=18; i<id.length; i++){
            newId += id[i];
        }
    } else {
        for (let i=14; i<id.length; i++){
            newId += id[i];
        }
    }
    return newId;
}