/*Array used as stack*/

// var letters =[]

// var word = "malayalam"

// var reversedWord = ""

// for(var i=0; i< word.length; i++){
//     letters.push(word[i])
// }

// for(i=0; i< word.length; i++){
//     reversedWord += letters.pop()
// }

// if(reversedWord == word) console.log(word + " is a palindrome")
// else console.log(word + " is not a plaindrome")


/*Creating a stack*/
const stack = function() {
    this.count = 0
    this.storage = {}

    this.push = (value) => {
        this.storage[this.count] = value
        this.count++
    }

    this.pop = () => {
        if (this.count == 0) return undefined

        this.count--
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    this.size = () => {
        return this.count
    }

    this.peek = () =>{
        return this.storage[this.count-1]
    }
}

let newStack = new stack()

newStack.push(1)
newStack.push(2)
console.log(newStack.peek())
console.log(newStack.size())
console.log(newStack.pop())
console.log(newStack.peek())