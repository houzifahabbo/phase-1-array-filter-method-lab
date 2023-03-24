function findMatching(names,string){
    return names.filter(names => names.toLowerCase() === string.toLowerCase());
}
function fuzzyMatch(names,string){
    return names.filter(names => names.startsWith(string));
  }
function matchName(names,string){
    return names.filter(names => names.name === string);
}