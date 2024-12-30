
import * as graphGenerator from './Generators/random_node.js' 
import * as endosrenyl from './Generators/erdos-renyi.js'
import * as genedge from './Generators/edge_gen.js'
import * as dijkstra from './Algorithms/dijkstra.js'
import { edge_genMultiplexer } from './Util/edge_genMultiplexer.js'
import * as barabasi_albert from './Generators/barabasi_albert.js'
import * as randomnode from './Generators/random_node.js'
import * as edgewidth from './Util/edgewidth.js'
document.getElementById("graphGenerator").addEventListener('click', () => {
  let size = document.getElementById("node_count").value ; 
  size = size || 15 ; // DEF VAL
                  graphGenerator.graphGenerator(size) ; // GRAPHGENERATOR BY ENTERING SIZE(BEYLER BURDA SIZE YAZIYOR SIZEYI YUKARDAN DEGİSTİRİP DENEYEBİLİRSİNİZ)
                  edge_genMultiplexer(endosrenyl.erdosRenylModel(size,0.6),size) ; 
    //                  console.log("edgelist",genedge.edgeList);
                 console.log(randomnode.nodeList) ; 
                  edgewidth.findEdges(2);
        //  barabasi_albert.barabasiAlbert(10,5,2) ; 
        } 
      ) ; 
