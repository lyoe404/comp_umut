
export function erdosRenylModel(nodes, probability) {
  // Kenarları tutacak dizi
  let edges = [];

  // Tüm düğüm çiftlerini kontrol et
  for (let i = 0; i < nodes; i++) {
      for (let j = i + 1; j < nodes; j++) {
          let rand = Math.random();
          if (rand < probability) {
              edges.push([i, j]);
          }
      }
  }
  return edges;
}

