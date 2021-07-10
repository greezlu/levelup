<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <script src="/scripts/script.js"></script>
        <link rel="stylesheet" href="/style/style.css">
        <title>Discuss</title>
    </head>
    <body>
        <header>
            <span>DISCUSS</span>
            <div id="logout-button">Change name</div>
        </header>
        <main>
            <div id="main-container">
                <div id="posts-list-wrapper"></div>                
                <div id="login-form-wrapper">
                    <form name="login">
                        <input type="text" name="name" placeholder="Please enter your name">
                        <input type="submit" value="Send">           
                    </form>
                </div>
            </div>
        </main>
        <footer>
            <div id="footer-container">
                <div id="footer-disclaimer">Please enter your name</div>
                <div id="footer-form-wrapper">
                    <form name="create-post">
                        <textarea name="body"></textarea>
                        <input type="submit" value="">
                    </form>
                </div>
            </div>
        </footer>
    </body>
</html>
