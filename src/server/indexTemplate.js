export const indexTemplate = (content, token)=>`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reddit</title>
  <script src="/static/client.js" type="application/javascript"></script>
  
</head>

<body>
  <div id="react_root">${content}</div>
  <div id="modal-root"></div>
  <div id="dropdown-root"></div>
</body>

</html>
`;