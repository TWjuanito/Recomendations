const  buscar = () => {

    search = document.getElementById("search").value;


    

    if (search.length == 0) {
        document.getElementById("error").innerHTML = "Inserta un producto";
    } else if (search.length < 3) {
        document.getElementById("error").innerHTML = "El producto debe de tener minimo 3 caracteres";
    } else {
        document.write(`
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <title></title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="tiendas">
            <a href="https://listado.mercadolibre.com.ar/${search}" class="tienda" target="_blank"><img src="https://brandlogos.net/wp-content/uploads/2021/11/mercadolibre-logo-512x512.png" class="imagen-logo"></img></a>
            <a href="https://www.musimundo.com/search/?text=${search}" class="tienda" target="_blank"><img src="https://zteargentina.com.ar/img/dondeComprar/logo02.png" class="imagen-logo mu"></img></a>
            <a href="https://www.authogar.com/catalogsearch/result/?q=${search}" class="tienda" target="_blank"><img src="https://img.kupino.com.ar/kupi/loga_shopy/authogar.png" class="imagen-logo"></img></a>
            <a href="https://www.amazon.com/s?k=${search}" class="tienda" target="_blank"><img src="https://www.registrarcorp.com/wp-content/uploads/2021/02/Amazon-logo.png" class="imagen-logo am"></img></a>
            <a href="https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2047675.m570.l1313&_nkw=${search}&_sacat=0" class="tienda" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/888/888848.png?w=360" class="imagen-logo"></img></a>
            <a href="https://es.aliexpress.com/wholesale?catId=0&initiative_id=SB_20220618125813&SearchText=${search}&spm=a2g0o.productlist.1000002.0" class="tienda" target="_blank"><img src="https://images2.alphacoders.com/121/1217089.png" class="imagen-logo"></img></a>
    </div>
    </body>
    </html>
    
    
    
        `)
    }



} 
