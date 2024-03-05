enum Gender {
    nam,
    nu,
    khac,
  }
  type Users1 =  
  {
    first_name: string,
    last_name: string, 
    age:number,
    gender : number

};
  let users:Users1[]= [
    {
      first_name: "Nguyen",
      last_name: "Hoang",
      age: 18,
      gender: 0,
    },
    {
      first_name: "Minh",
      last_name: "Hieu",
      age: 24,
      gender: 1,
    },
    {
      first_name: "Duong",
      last_name: "Linh",
      age: 23,
      gender: 1,
    },
    {
      first_name: "Minh",
      last_name: "Thao",
      age: 21,
      gender: 0,
    },
    {
      first_name: "Hao",
      last_name: "My",
      age: 19,
      gender: 0,
    },
    {
      first_name: "Tat",
      last_name: "Thanh",
      age: 17,
      gender: 0,
    },
  ];


//bai 1
// let renderUser: string[] = [];
// users.forEach((users:Users1) => {
//     renderUser.push(users.first_name,users.last_name);
// })
// console.log("111",renderUser)
//bai 2
// const newUser = users.filter((users:Users1) => {
//     users.gender == 0 && users.age > 20
// })
// console.log(users)
//bai 3
// function renderFullName() {
//     const fullName:string [] = [];
//     users.forEach((users:Users1) => {
//     fullName.push(users.first_name + " " +users.last_name);
// })
//     console.log(fullName)
// }
// renderFullName()
//bai 4

// function camelCase() {
//     for (let i = 0; i < users.length; i++) {
//      for (let key in users[i]) {
//         if (key=="first_name") {
//             const newKey:string="firstName"
//             users[i][newKey]=users[i][key]
//             delete users[i][key]
//         }
//         if (key=="last_name") {
//             const newKey:string="lastName"
//             users[i][newKey]=users[i][key]
//             delete users[i][key]
            
//         }
//      }
//  }
//  console.log(users);
// }
// camelCase()

// // bai 5
// function avgAge():number {
//     let sum = 0;
//     for (let i = 0; i < users.length; i++) {
//         sum += users[i].age;
//     }
//     console.log(sum / users.length);
//     return sum
// }
// console.log(avgAge())
//bai 6
// function reduce(input:Users1[]):string[] {
//     const result = input.reduce((acc:string[],item:Users1):string[]=>{
//         acc.push( acc + item.first_name +" "+item.last_name)
//         return acc
//     },[])
//     return result
// }
// console.log(reduce(users))
// bai 7
// let user7 
// function bai7(input:Users1[]):Users1[] {
//     const result = input.reduce((acc:Users1[],item:Users1):Users1[]=>{
//         if (item.gender==0 && item.age>20) {
//             acc.push(item)
//             return acc
//         } else {
//             return acc
//         }

//     },[])
//     return result
// }
// console.log(bai7(users))
// bai 8
function camelCase8(a:Users1[]):Users1[]{
    const result = a.reduce((acc:Users1[],item:any)=>{
        for (let key in item) {
            let newKey:string[]=key.split("_")
            if (newKey.length>1) {
                for (let i = 1; i < newKey.length; i++) {
                     newKey[i]=newKey[i].charAt(0).toUpperCase() +newKey[i].slice(1); 
                  } 
                  let abc:string=newKey.join("")
            item[abc]=item[key]
            delete item[key]
            }
          
        }
        acc.push(item)

        return acc
    },[])
    return result
}
console.log(camelCase8(users));
