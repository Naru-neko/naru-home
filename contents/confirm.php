<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='../fonts/Fira_Code_v6.2/fira_code.css' rel='stylesheet'>
    <title>Confirm</title>
</head>

<style>
    ::-webkit-scrollbar{
        width: 10px;
     }
     ::-webkit-scrollbar-track{
        background-color: #ccc;
     }
     ::-webkit-scrollbar-thumb{
        background-color: #17585d;
     }
    body{
        background-color: #1d1a2e;
        width: 100%;
        margin: 0;
        padding-bottom: 2rem;
        color: rgb(224, 224, 224);
        font-family: 'Fira Code';
        font-weight: 300;
    }
    html, body {
        background: transparent;
    }
    form {
        padding-left: 2rem;
        padding-right: 1rem;
    }
    h1{
        font-size: 12vmin;
        font-weight: 100;
        margin-bottom: 4vmin;
        margin-left: 1rem;
    }
    h2{
        font-size: 5vmin;
        margin: 0;
        margin-bottom: 1vmin;
        font-weight: 100;
    }
    input{
        border: solid 2px #7a7a7a;
        border-radius: 1vmin;
        width: 65%;
        padding: 1%;
    }
    #submit{
        width: 20%;
        font-size: 5vmin;
        text-align: center;
        margin-top: 2rem;
    }
    h3{
        background-color: #3b3946;
        border-radius:1vmin;
        border: solid 2px #fff;
        padding: 1rem;
        font-size: 3vmin;
        overflow-wrap: break-word;
    }
</style>

<body>
    <h1>Contact</h1>
    <form action="complete.php" method="post">
        <div class="section">
            <h2>お名前</h2>
            <h3><?php echo $_POST["name"]; ?></h3>
        </div>
        <div class="section">
            <h2>メールアドレス</h2>
            <h3><?php echo $_POST["mail"]; ?></h3>
        </div>
        <div class="section">
            <h2>お問い合わせ内容</h2>
            <h3><?php echo $_POST["inquiry"]; ?></h3>
        </div>
        <input type="submit" id="submit" value="送信" onclick="">
    </form>
    
</body>
</html>