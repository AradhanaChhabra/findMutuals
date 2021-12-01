const findDegree = (u: number, v: number, adj: number[][]): number[][] => {
  const degrees: number[][] = [];

  function findPath(u: number, v: number, adj: number[][]): void {
    let visited: boolean[] = new Array(adj.length).fill(false);
    let path: number[] = [];
    path.push(u);
    searchDFS(u, v, adj, visited, path);
  }

  function searchDFS(
    u: number,
    v: number,
    adj: number[][],
    visited: boolean[],
    path: number[]
  ): void {
    visited[u] = true;
    if (u === v) {
      degrees.push([...path]);
    } else {
      for (let i = 0; i < adj[u].length; i++) {
        const y = adj[u][i];
        if (!visited[y]) {
          visited[y] = true;
          path.push(y);
          searchDFS(y, v, adj, visited, path);
          path.pop();
        }
      }
    }
    visited[u] = false;
  }

  findPath(u, v, adj);

  return degrees;
};

export default findDegree;
