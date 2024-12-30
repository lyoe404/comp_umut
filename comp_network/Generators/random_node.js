export var nodeList = [] ; 

export function graphGenerator(node_count) {
    node_count = node_count || 14 ; 
    nodeList = [] ; 
    document.getElementById("node_area").innerHTML = " " ; 
      for (var i = 0 ; i < node_count ; i++) {
       createNewNode(i) ;
      }
        } ; 


export function createNewNode(i) {
  var main_div = document.getElementById("node_area").getBoundingClientRect() ; 
  var elem_width = Math.ceil(main_div.width);
  var elem_height = Math.floor(main_div.height); 
  var xCoordinate = Math.floor(Math.random() * elem_width) ; 
  var yCoordinate = Math.floor(Math.random() * elem_height) ; 
  var node =  document.createElement('div');
  node.id = `node${i+1}`;
  node.className = "nodes";
  node.style.left = `${xCoordinate}px` ; 
  node.style.top = `${yCoordinate}px` ; 
  nodeList.push({
    node_id : `node${i}` , 
    node_neighbours : [] , 
    nodeLeft : xCoordinate, 
    nodeTop : yCoordinate, 
    node_connections : [],
    visited : false 
  });
  document.getElementById("node_area").appendChild(node);

      
}  ;        