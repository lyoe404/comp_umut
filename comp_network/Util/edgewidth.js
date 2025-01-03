import * as nodeInfo from "../Generators/random_node.js"
export let neigborDest = [] ; 
export function findEdges(nodeId) {
  var currentNodeDest = [] ;

      let temp_Node = nodeInfo.nodeList ;

 for (let i = 0 ; i < nodeInfo.nodeList[nodeId].node_connections.length ; i++) {

  let data =  parseEdgeString(nodeInfo.nodeList[nodeId].node_connections[i]);
  if (data.dest == nodeId) {
    var tempdata = data.root ; 
    data.root = data.dest ; 
    data.dest = tempdata ; 
  }
                      currentNodeDest.push(

                        `${data.dest}+${document.getElementById(nodeInfo.nodeList[nodeId].node_connections[i]).style.width}`

                   );
                      
  

            }
            neigborDest.push(currentNodeDest) ; 
               
                  
}
function parseEdgeString(edgeString) {
    // Regex ile root ve dest değerlerini ayıklıyoruz
    const match = edgeString.match(/edge(\d+)\+(\d+)/);
    if (!match) {
        throw new Error("Geçersiz format");
    }

    const root = parseInt(match[1], 10); // "edge"den sonra gelen sayı
    const dest = parseInt(match[2], 10); // "+" işaretinden sonra gelen sayı
      
    return { root, dest };
}

function parseNodeString(inputString) {
  // Regex ile hedef node ve uzaklığı ayıklıyoruz
  const match = inputString.match(/^(\d+)\+(\d+)px$/);
  if (!match) {
      throw new Error("Geçersiz format");
  }

  const node = parseInt(match[1], 10); // "+" işaretinin solundaki sayı
  const width = parseInt(match[2], 10); // "px" öncesindeki sayı

  return { node, width };
}