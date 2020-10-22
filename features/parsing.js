const getData = (key, data) => {
   // const obj = JSON.parse(data);

   const obj = {
      renata: {
         fullname: "renata santoso",
         age: "20",
      },
      person1: {
         fullname: "person1",
         age: "10",
      },
   };

   const findData = (keyword, obj) => {
      for (key in obj) {         
         if (key === keyword) return obj[keyword];         
         if (typeof (obj[key]) !== "object") {
            return null
         }
         findData(keyword, obj[key]);
      }
      return null;      
   }

   return findData(key, obj);
}

console.log(getData("person1", {}));