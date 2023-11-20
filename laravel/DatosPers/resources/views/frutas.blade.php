<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{url}}">
        <div>
            <label for="name">Fruta: </label><br>
            <input type="text" name="name"><br>
        </div>
        <div>
            <label for="price">Cantidad: </label><br>
            <input type="number" name="cantidad"><br>
        </div>
        <div>
            <button type="submit">Agregar a la lista de compras</button>
        </div>
        
    </form>
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Cantidad</th>
        </thead>
        <tbody>
            @foreach ()
            <tr>
                <td></td>
                <td></td>
            </tr>
            
            @endforeach
            
        </tbody>
    </table>
</body>
</html>