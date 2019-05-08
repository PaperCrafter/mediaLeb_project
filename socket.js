io.on('connection', socket => {
    console.log('a user connected')
    socket.emit('connected')
    socket.on('click', ({ id, x, y }) => {
      console.log(`socket with id ${id} just clicked on { ${x}, ${y} }`)
      socket.emit('click')
    })
  })
  
  // add these lines:
  const serialport = require('serialport')
  const sp_readline = serialport.parsers.Readline // we use readline parser
  
  const sPort = new serialport('__your port here__', { 
    // you'll need to check for a port name first and use yours
    baudRate: 9600
  })
  const parser = new sp_readline()
  
  sPort.on('open', () => {
    console.log('Serial Port Opened')
    let lastValue
    io.on('connection', socket => {
      socket.emit('connected')
      parser.on('data', data => {
        let lastValue 
        // we use additional variable to avoid constant 
        // sending data to connected socket
        if (lastValue !== data) {
          socket.emit('data', data)
        }
        lastValue = data
      })
    })
  })