function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Document</title>
        <style>
            @page {
                margin: 0;
            }
    
            *,
            *::after,
            *::before {
                box-sizing: border-box;
            }
    
            html,
            body {
                padding: 0;
                margin: 0;
            }
    
            html,
            body,
            .wrapper {
                height: 100%;
            }
    
            .wrapper {
                background-color: white;
                padding-top: 100px;
            }
    
            body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
            }
    
            main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
            }
    
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'BioRhyme', serif;
                color: white;
                margin: 0;
            }
    
            h1 {
                font-size: 3em;
            }
    
            h2 {
                font-size: 2.5em;
            }
    
            h3 {
                font-size: 2em;
            }
    
            h4 {
                font-size: 1.5em;
            }
    
            h5 {
                font-size: 1.3em;
            }
    
            h6 {
                font-size: 1.2em;
            }
    
            #header {
                position: relative;
                margin: 0 auto;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                padding: 10px;
                width: 95%;
                height: 100px;
                border-radius: 6px;
            }
    
            .links-nav {
                width: 100%;
                text-align: center;
                padding: 20px 0;
                font-size: 1.1em;
            }
    
            .nav-link {
                display: inline-block;
                margin: 5px 10px;
            }
    
            .workExp-date {
                font-style: italic;
                font-size: .7em;
                text-align: right;
                margin-top: 10px;
            }
    
            .container {
                padding: 50px;
                padding-left: 100px;
                padding-right: 100px;
            }
    
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
            }
    
            .card {
                padding: 20px;
                border-radius: 6px;
                background-color: lightslategray;
                color: white;
                margin: 20px;
            }
    
            #name {
                background-color: darkslategray;
            }
    
            .col {
                flex: 1;
                text-align: center;
            }
    
            a,
            a:hover {
                text-decoration: none;
                color: inherit;
                font-weight: bold;
            }
    
            @media print {
                body {
                    zoom: .75;
                }
            }
        </style>
    
        <nav class="navbar navbar-dark bg-dark flex-md-nowrap p-0">
            <h1 class="col text-center" id="header">Team Members</h1>
        </nav>
    
        <div class="wrapper">
    
            <div class="main">
    
                <div class="container">
    
                    <div class=" row">

    `;
}

module.exports = generateHTML;
