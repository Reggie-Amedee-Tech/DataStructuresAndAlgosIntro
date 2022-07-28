class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        // this.table[index] = value
        const bucket = this.table[index]
        if(!bucket) {
           this.table[index] = [[key, value]]
        } else {
            const sameKeyItem = bucket.find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value;
            } else {
                bucket.push([key, value])
            }
        }

    }

    get(key) {
        const index = this.hash(key)
        // return this.table[index]
        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey) {
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)
        // return this.table[index] = undefined
        const bucket = this.table[index] 
        if(bucket) {
            const sameKey = bucket.find(item => item[0] === key)
            if(sameKey) {
                bucket.splice(bucket.indexOf[sameKey], 1)
            }
        }
    }

    display(key) {
        for(let i = 0; i < this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const table = new HashTable(50)

table.set("Shardbearer", "Godrick the Grafted")
table.set("God", "Malenia, The Severed")
table.set("Mod", "Upgraded 4k Textures")
table.set('Shardbearer', "Starsourge Radahn")
table.remove("Shardbearer")

console.log(table.get('Shardbearer'))

table.display()
