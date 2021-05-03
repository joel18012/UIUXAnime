<html>
<header>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <style>
        hr {
            border: 10px solid green;
            border-radius: 5px;
        }

        .row>div {
            background: #f2f2f2;
            padding: 30px;
            border: 1px solid grey;
        }

        .menu {
            background-color: #375AB2;
            color: white;
        }

        .titulo {
            padding-left: 10px;

        }

        .row {
            margin-right: 0;
            margin-left: 0;
        }
    </style>
    <title>api anime lista</title>
</header>

<body style="background-color: #C4C4C4;">


    <div class="container" style="background-color:white;padding: 0;">
        <div class="titulo">
            <h1>Titulo del proyecto</h1>
        </div>

        <nav class="navbar navbar-expand-lg navbar-dark menu" >
            <a class="navbar-brand" href="#">Bienvenidos a Titulo de proyecto</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse"  id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto" >
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Lista1</a>
                            <a class="dropdown-item" href="#">Lista2</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Lista3</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Ayuda</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar">
                    <button class="btn btn-outline-success my-2 my-sm-0" style="color:#375AB2;border-color:white;color:white;" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
        <?php

        $res = "";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://api.jikan.moe/v3/search/manga?q=Naruto&page=1");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $res = curl_exec($ch);
        curl_close($ch);
        $res = json_decode($res);
        // var_dump($res->results);
        $contador = 1;
        $primer = true;
        foreach ($res->results as $a) {
            if ($contador == 1) {
                if ($primer) {
                    $primer = false;
                } else {
                    echo '</div>';
                }

                echo '<div class="row">';
            } else {

                if ($contador == 4)
                    $contador = 0;
            }
            $contador++;
        ?>
            <div class="col-3">
                <h4><?= $a->title ?></h4>
                <img src="<?= $a->image_url ?>" alt="">
            </div>
        <?php
        }
        ?>
    </div>
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

</html>