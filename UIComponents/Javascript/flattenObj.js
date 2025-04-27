//Flatten the objects

const input = {
    user: {
      name: {
        first: "Jane",
        last: "Doe"
      },
      age: 28
    },
    settings: {
      theme: "dark",
      notifications: {
        email: true
      }
    },
    tags: ["admin", "editor"] 
  };
  /* Expected output:
  {
    "user.name.first": "Jane",
    "user.name.last":  "Doe",
    "user.age":        28,
    "settings.theme":  "dark",
    "settings.notifications.email": true,
    "tags":            ["admin", "editor"]
  }
  */
  
  function flattenObject(obj){
    const res = {}
  
    function recurse(ob, prefix=''){
      if(typeof ob==='object' && ob!=null && !Array.isArray(ob)){
        Object.keys(ob).forEach(key=>{
            const newKey = prefix?`${prefix}.${key}`:key;
            recurse(ob[key],newKey)
        })
      }
      else{
        res[prefix] = ob;
      }
    }
    recurse(obj)
    return res
  }
  
  console.log(flattenObject(input))
  