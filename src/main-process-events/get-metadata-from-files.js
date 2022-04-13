ipcMain.on('get-metadata-from-files', (event, files) => {
  console.log(files) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
  
})