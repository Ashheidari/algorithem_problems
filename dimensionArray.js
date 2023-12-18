function createDimensionTable (str){

    const data = str.split(',');
    
    const obj = {}
    let k = -1;
    let matrix = []

   
    for (let i = 0; i<=data.length-1; i++){
        if (data[i].includes('L')){
            const temp = data[i].split(':')
            matrix[k].push(temp[0])
            obj[`${temp[1]}`] = matrix
            matrix = [];
            k = -1;
    }else if ( i % 2 === 0){
            k++;
            matrix[k] = []
            matrix[k].push(data[i])
        }else{

            matrix[k].push(data[i])
        }
    }
   const result = createHtml(obj)

   

    function createHtml (obj){
        let str = ''
        for (const key in obj){
            str = str + "<tr><th>" + key + "</th><tr>"
        }
        for (const key in obj){
            for (el of obj[key]){

                str = str + "<tr><td>"+ el +"</td></tr>"
            }
        }


        

        return `
        <HTML>
            <body>
                <table>
                    ${str}
                </table>

            </body>
        </HTML>`
    }


    
   
}

console.log(createDimensionTable("5.0,100,5.5,90,6.0,105:L10,5.5,100,4.5,90,6.5,105:L20;"));


/* 
              i     j
[5.0,100,5.5,6.0,105:l10,5.5,100,4.5,6.5,405:L20;]
[[5.0,100],[5.5,90],[6.0,105]]

*/

