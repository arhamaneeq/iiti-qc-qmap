class Graph {
    private Nodes : Map<number, graphNode>

    constructor() {
        this.Nodes = new Map();
    }
}

class graphNode {
    public Name: string;
    public Coords: [number, number];
    public Hash: number;
    private Links: Set<graphNode>;

    public constructor(name: string, location: [number, number]) {
        this.Name = name;
        this.Coords = location;
        this.Hash = 42;
        this.Links = new Set();
    }

    public addConnection(targetNode: graphNode) : void {
        this.Links.add(targetNode);
        targetNode.Links.add(this);
    }

    public getConnections() : graphNode[] {
        return Array.from(this.Links)
    }

    
}