var https = require('https');
var fs = require('fs');
var port = 8000;

var options = {
  key : fs.readFileSync("./ssl/secure.pem"),
  cert : fs.readFileSync("./ssl/securecert.pem"),
  requestCert : true
};

var server = https.createServer(options);
server.on('request',getFile);
server.listen(port);
console.log("server running...");

function getFile(req,res){
  var url = req.url;

  if('/tatami.html' == url){
    fs.readFile('./tatami.html', 'UTF-8', function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    });
  } else  if('/position2.html' == url){
      fs.readFile('./position2.html', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      });
  } else  if('/canvas.js' == url){
      fs.readFile('./canvas.js', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
      });
  } else  if('/freqdraw.js' == url){
      fs.readFile('./freqdraw.js', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
      });
  } else  if('/freqdraw.html' == url){
      fs.readFile('./freqdraw.html', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      });
  } else  if('/freq.js' == url){
      fs.readFile('./freq.js', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
      });
  }else  if('/convodraw.js' == url){
      fs.readFile('./convodraw.js', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
      });
  }
  else  if('/tatami.css' == url){
      fs.readFile('./tatami.css', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
      });
  } else  if('/freq.css' == url){
      fs.readFile('./freq.css', 'UTF-8', function(err,data){
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
      });
  } else  if('/echo.wav' == url){
      fs.readFile('./echo.wav', function(err,data){
      res.writeHead(200, {'Content-Type': 'audio/x-wav'});
      res.write(data);
      res.end();
      });
  } else  if('/emphasis_back3.gif' == url){
      fs.readFile('./emphasis_back3.gif', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
      });
  }else  if('/simulator1/fig/none.gif' == url){
      fs.readFile('./simulator1/fig/none.gif', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
      });
  }else  if('/simulator1/fig/telephone.gif' == url){
      fs.readFile('./simulator1/fig/telephone.gif', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
      });
  }else  if('/simulator1/fig/muffler.gif' == url){
      fs.readFile('./simulator1/fig/muffler.gif', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
      });
  }else  if('/simulator1/fig/spring.gif' == url){
      fs.readFile('./simulator1/fig/spring.gif', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
      });
  }else  if('/simulator1/fig/echo.gif' == url){
      fs.readFile('./simulator1/fig/echo.gif', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/gif'});
      res.write(data);
      res.end();
      });
  } else  if('/human.png' == url){
      fs.readFile('./human.png', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
      });
  }else  if('/fig01.png' == url){
      fs.readFile('./fig01.png', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
      });
  }else  if('/fig02.png' == url){
      fs.readFile('./fig02.png', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
      });
  }else  if('/fig03.png' == url){
      fs.readFile('./fig03.png', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
      });
  }else  if('/fig04.png' == url){
      fs.readFile('./fig04.png', function(err,data){
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
      });
  }else  if('/muffler.wav' == url){
      fs.readFile('./muffler.wav', function(err,data){
      res.writeHead(200, {'Content-Type': 'audio/x-wav'});
      res.write(data);
      res.end();
      });
  } else  if('/spring.wav' == url){
      fs.readFile('./spring.wav', function(err,data){
      res.writeHead(200, {'Content-Type': 'audio/x-wav'});
      res.write(data);
      res.end();
      });
  } else  if('/hall.wav' == url){
      fs.readFile('./hall.wav', function(err,data){
      res.writeHead(200, {'Content-Type': 'audio/x-wav'});
      res.write(data);
      res.end();
      });
  }else  if('/telephone.wav' == url){
      fs.readFile('./telephone.wav', function(err,data){
      res.writeHead(200, {'Content-Type': 'audio/x-wav'});
      res.write(data);
      res.end();
      });
  }
}
