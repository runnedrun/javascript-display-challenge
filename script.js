function logArgs(args) {
  var a = 1
  console.log(args)
}

var contents = logArgs.toString()

var consoleLogExample = $("#console-log-example")
var formattedExample = $("<pre>")

formattedExample.text(contents)
consoleLogExample.html(formattedExample)
