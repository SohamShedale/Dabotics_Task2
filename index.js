let answer,
  expr,
  root,
  pi,
  operation = " ",
  textArea = document.getElementById("txtarea");

function show(val) {
  if (
    val == "1" ||
    val == "2" ||
    val == "3" ||
    val == "4" ||
    val == "5" ||
    val == "6" ||
    val == "7" ||
    val == "8" ||
    val == "9" ||
    val == "0" ||
    val == "00" ||
    val == "." ||
    val == "%" ||
    val == "/" ||
    val == "*" ||
    val == "+" ||
    val == "-"
  ) {
    textArea.value += val;
  }
  if (val == "openBracket") {
    textArea.value += "(";
  }

  if (val == "closeBracket") {
    textArea.value += ")";
  }

  if (val == "C") {
    textArea.value = "";
  }

  if (val == "Del") {
    textArea.value = textArea.value.slice(0, -1);
  }

  if (val == "sin") {
    textArea.value += "sin(";
    operation = "sin";
  }

  if (val == "inverseSin") {
    textArea.value += "sin\u207B\u00B9(";
    operation = "inverseSin";
  }

  if (val == "cos") {
    textArea.value += "cos(";
    operation = "cos";
  }

  if (val == "inverseCos") {
    textArea.value += "cos\u207B\u00B9(";
    operation = "inverseCos";
  }

  if (val == "tan") {
    textArea.value += "tan(";
    operation = "tan";
  }

  if (val == "inverseTan") {
    textArea.value += "tan\u207B\u00B9(";
    operation = "inverseTan";
  }

  if (val == "deg") {
    if (!document.getElementById("deg").classList.contains("active")) {
      document.getElementById("deg").classList.add("active");
    } else {
      document.getElementById("deg").classList.remove("active");
    }
  }

  if (val == "log") {
    textArea.value += "log(";
    operation = "log";
  }

  if (val == "ln") {
    textArea.value += "ln(";
    operation = "ln";
  }

  if (val == "inverse") {
    if (!document.getElementById("inverse").classList.contains("active")) {
      document.getElementById("inverse").classList.add("active");
      document.getElementById("root").style.display = "none";
      document.getElementById("square").style.display = "block";
      document.getElementById('basicSin').style.display = "none"
      document.getElementById('basicCos').style.display = "none"
      document.getElementById('basicTan').style.display = "none"
      document.getElementById('inverseSin').style.display = "block"
      document.getElementById('inverseCos').style.display = "block"
      document.getElementById('inverseTan').style.display = "block"
    } else {
      document.getElementById("inverse").classList.remove("active");
      document.getElementById("root").style.display = "block";
      document.getElementById("square").style.display = "none";
      document.getElementById('basicSin').style.display = "block"
      document.getElementById('basicCos').style.display = "block"
      document.getElementById('basicTan').style.display = "block"
      document.getElementById('inverseSin').style.display = "none"
      document.getElementById('inverseCos').style.display = "none"
      document.getElementById('inverseTan').style.display = "none"
    }
  }

  if (val == "!") {
    textArea.value += "!";
    operation = "factorial";
  }

  if (val == "power") {
    textArea.value += "^";
    operation = "power";
  }

  if (val == "root") {
    root = "\u221A";
    textArea.value += root;
    operation = "sqrt";
  }

  if (val == "pi") {
    pi = "\u213C";
    textArea.value += pi;
    operation = "pi";
  }

  if (val == "square") {
    textArea.value = textArea.value + "\u00B2";
    operation = "square";
  }

  if (val == "e") {
    textArea.value += "e";
    operation = "euler";
  }

  if (val == "=") {
    if (operation == " ") {
      answer = eval(textArea.value);
      if(answer=='Infinity'){
        textArea.value = "Cannot be divided by 0"
      }
      else{
        textArea.value = answer;
      }
    }

    if (operation == "sin") {
      if (!document.getElementById("deg").classList.contains("active")) {
        expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
        answer = expr[0] * Math.sin(expr[1]);
        textArea.value = answer;
        if (!answer) {
          answer = 1 * Math.sin(expr[0]);
          textArea.value = answer;
        }
      } else {
        expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
        let degAnswer = (Math.PI / 180) * expr[1];
        answer = expr[0] * Math.sin(degAnswer);
        textArea.value = answer;
        if (!answer) {
          degAnswer = (Math.PI / 180) * expr[0];
          answer = 1 * Math.sin(degAnswer);
          textArea.value = answer;
        }
      }
    }

    if (operation == "inverseSin") {
      if (!document.getElementById("deg").classList.contains("active")) {
        expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
        answer = expr[0] * Math.asin(expr[1]);
        textArea.value = answer;
        if (!answer) {
          answer = 1 * Math.asin(expr[0]);
          textArea.value = answer;
        }
      }
    }

    if (operation == "cos") {
      if (!document.getElementById("deg").classList.contains("active")) {
        expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
        answer = expr[0] * Math.cos(expr[1]);
        textArea.value = answer;
        if (!answer) {
            answer = 1 * Math.cos(expr[0]);
            textArea.value = answer;
        }
      } else {
            expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
            let degAnswer = (Math.PI / 180) * expr[1];
            answer = expr[0] * Math.cos(degAnswer);
            textArea.value = answer;
        if (!answer) {
            degAnswer = (Math.PI / 180) * expr[0];
            answer = 1 * Math.cos(degAnswer);
            textArea.value = answer;
        }
      }
    }

    if (operation == "inverseCos") {
      if (!document.getElementById("deg").classList.contains("active")) {
        expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
        answer = expr[0] * Math.acos(expr[1]);
        textArea.value = answer;
        if (!answer) {
          answer = 1 * Math.acos(expr[0]);
          textArea.value = answer;
        }
      }
    }

    if (operation == "tan") {
      if (!document.getElementById("deg").classList.contains("active")) {
        expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
        answer = expr[0] * Math.tan(expr[1]);
        textArea.value = answer;
        if (!answer) {
          answer = 1 * Math.tan(expr[0]);
          textArea.value = answer;
        }
      } else {
          expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
            let degAnswer = (Math.PI / 180) * expr[1];
            answer = expr[0] * Math.tan(degAnswer);
            textArea.value = answer;
        if (!answer) {
            degAnswer = (Math.PI / 180) * expr[0];
            answer = 1 * Math.tan(degAnswer);
            textArea.value = answer;
        }
      }
    }

    if (operation == "inverseTan") {
      if (!document.getElementById("deg").classList.contains("active")) {
        expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
        answer = expr[0] * Math.atan(expr[1]);
        textArea.value = answer;
        if (!answer) {
          answer = 1 * Math.atan(expr[0]);
          textArea.value = answer;
        }
      }
    }

    if (operation == "log") {
      expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
      answer = expr[0] * Math.log10(expr[1]);
      textArea.value = answer;
      if (!answer) {
        answer = 1 * Math.log10(expr[0]);
        textArea.value = answer;
      }
    }

    if (operation == "ln") {
      expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
      answer = expr[0] * Math.log(expr[1]);
      textArea.value = answer;
      if (!answer) {
        answer = 1 * Math.log(expr[0]);
        textArea.value = answer;
      }
    }

    if (operation == "factorial") {
      expr = textArea.value.match(/\d+/g);
      console.log(expr);
      answer = 1;
      for (let i = 1; i <= expr; i++) {
        answer *= i;
      }
      textArea.value = answer;
    }

    if (operation == "power") {
      expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
      answer = Math.pow(expr[0], expr[1]);
      textArea.value = answer;
    }

    if (operation=="sqrt") {
      expr = textArea.value.match(/\d+/g);
      if(expr[0]>0){
        answer = Math.sqrt(expr);
        textArea.value = answer;
      }
      else{
        textArea.value = 'Not a number'
      }
    }

    if (operation == "pi") {
      expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
      try {
        if (expr != []) {
          answer = expr[0] * Math.PI;
          textArea.value = answer;
        }
      } catch {
        let len = textArea.value.length;
        answer = len * Math.PI;
        textArea.value = answer;
      }
    }

    if (operation == "square") {
      expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
      answer = expr * expr;
      textArea.value = answer;
    }

    if (operation == "euler") {
      expr = textArea.value.match(/[-+]?([0-9]*\.[0-9]+|[0-9]+)/g);
      try {
        if (expr != []) {
          answer = Math.exp(expr[0]);
          textArea.value = answer;
        }
      } catch {
        let len = textArea.value.length;
        answer = Math.exp(len);
        textArea.value = answer;
      }
    }
  }
}
