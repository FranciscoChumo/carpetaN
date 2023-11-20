<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="{{url('dato')}}" method="post"> <!-- en el formulario ponemos la url que sedea mas el metodo que esta en la wed -->
        @csrf
        <div>
            <label for="name">Name: </label><br/>
            <input type="text" name="name"><br/>
        </div>
        <div>
            <label for="apellido">Apellido: </label><br/>
            <input type="text" name="apellido"><br/>
        </div>
        <div>
            <label for="cedula">Cedula: </label><br/>
            <input type="text" name="cedula"><br/><br>
        
        </div>
        <div>
            <button type="submit">guardar</button>
        </div>
    </form>
    
</body>
</html>