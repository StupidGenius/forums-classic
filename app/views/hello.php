<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Brave Collective - Council Vote 2013</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="<?=URL::asset('css/bootstrap.css')?>">
    <link rel="stylesheet" href="<?=URL::asset('css/glyphicons.css')?>">
    <link rel="stylesheet" href="<?=URL::asset('css/halflings.css')?>">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.10/alertify.core.css">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.10/alertify.default.css">
    <link rel="stylesheet" type="text/css" href="<?=URL::asset('markitup/skins/simple/style.css')?>" />
    <link rel="stylesheet" type="text/css" href="<?=URL::asset('markitup/sets/bbcode/style.css')?>" />
    <link rel="stylesheet" type="text/css" href="<?=URL::asset('markitup/sets/colors/style.css')?>" />
	<link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>

    <!-- Latest compiled and minified JavaScript -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.min.js"></script>
    <script src="<?=URL::asset('js/bootstrap.min.js')?>"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.10/alertify.min.js"></script>

    <!-- MarkItUp -->
    <script type="text/javascript" src="<?=URL::asset('markitup/jquery.markitup.js')?>"></script>
    <script type="text/javascript" src="<?=URL::asset('markitup/sets/bbcode/set.js')?>"></script>
	<!--
    <script type="text/javascript" src="<?=URL::asset('markitup/sets/colors/set.js')?>"></script>
    -->

    <style>
        .jumbotron {
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <!-- Wrap all page content here -->
    <div id="wrap">

        <?php
        /*
         * Load the page content here
         */
        //echo $navigation;
        ?>
        <!-- Static navbar -->
        <div class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="<?=URL::route('home')?>">Brave Collective - Forums</a>
                </div>
                <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav">
                        <li <?php if(Request::is('/')){?> class="active"<?php }?>><a href="<?=URL::route('home')?>">Home</a></li>
                    </ul>
                </div><!--/.nav-collapse -->
            </div>
        </div>

        <?php
        /*
         * Load the page content here
         */
        //echo $content;
        ?>
        <div class="container">
            <script type="text/javascript" >
               $(document).ready(function() {
                  $("#markItUp").markItUp(mySettings);
               });
            </script>
            <h2>BBCode Editor Test</h2>
            <textarea id="markItUp"></textarea>
        </div> <!-- /container -->

    </div>

    <?php
    /*
     * Load the page content here
     */
    //echo $footer;
    ?>
    <div id="footer">
        <div class="container">
            <p class="text-muted credit">
                © Brave Collective - 2013
            </p>
        </div>
    </div>
    <script>
        $(document).ready(function()
        {
            $('[data-toggle=tooltip]').tooltip();
        });
    </script>
</body>
</html>
