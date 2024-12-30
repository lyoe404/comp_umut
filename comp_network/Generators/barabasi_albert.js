import * as newNode from "./random_node.js"
import * as newEdge from "./edge_gen.js"
export function barabasiAlbert( targetSize, startSize, connectionProb ) {
  document.getElementById("node_area").innerHTML = " " ; 
        for (var i = 0 ; i < startSize ; i++) {
              newNode.createNewNode(i) ; 

        }
          for (var i = 0 ; i < startSize ; i++) {
                for (var j = 0 ; j <startSize ; j++) {
                  newEdge.edge_gen(i,j,targetSize) ; 
                }
          }

}