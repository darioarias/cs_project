function BFS(s, adjList) 
{
   let visited = new Set()
   const q = [s]
   visited.add(s)
   while (q.length > 0) {
    let temp = q.shift();
    adjList.get(temp).filter(i => !visited.has(i)).forEach(i => {
        visited.add(i)
        q.push(i)
    })
   }
   return visited
}

function Dijkstra(s, d, adjList) 
{

}

export { BFS, Dijkstra };
