const obj = {
    x: 1,
    hello: function(){
      // 這邊印出來的 this 是什麼，test 的 this 就是什麼
      // 就是我說的：
      // 在宣告它的地方的 this 是什麼，test 的 this 就是什麼
      console.log(this)     
      const test = () => {
        console.log(this.x)
      }
      test()
    }
  }

obj.hello() // 1
const hello = obj.hello
hello() // undefined