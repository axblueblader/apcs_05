// Add / refactor more queue/priority queue logic here

var queue = {
    data: [],
    pop: function() {
        return this.data.pop();
    },
    push: function(socketId) {
        this.data.push(socketId);
    },
    length: function() {
        return this.data.length;
    }
}

module.exports = queue;