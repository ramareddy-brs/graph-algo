## Cheap Flights with k stops

The findCheapestPrice algorithm finds the cheapest price to reach the destination city from the source city with at most K stops. It uses Breadth-First Search (BFS) to explore possible paths while keeping track of the cost, stops, and visited cities. It builds an adjacency list to represent the flights' connections between cities and utilizes a priority queue (implemented as an array sorted by cost) to efficiently explore the paths.

The algorithm returns the cheapest cost to reach the destination city or -1 if there is no such path.