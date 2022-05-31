function solution(new_id) {
    let id = new_id;

    //1
    id = id.toLowerCase();

    //2
    id = id.replace(/[^a-z0-9\-\_\.]/g, "");

    //3
    id = id.replace(/\.+/g, ".");


    //4
    id = id.replace(/^\.|\.$/g, "")

    //5
    if(id === ""){
        id += "a";
    }

    ///6
    if(id.length >= 16){
        id = id.slice(0, 15);
        id = id.replace(/\.$/g, "")
    }

    //7
    if(id.length <= 2){
        while(id.length < 3){
            id += id[id.length-1];
        }
    }

    return id;
}