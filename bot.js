const Discord = require("discord.js");
const myid = ['742154845678600304'];
const developers = ['742154845678600304'];
const prefix = ['$'];
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)


client.login(process.env.T);
client2.login(process.env.T2);
client3.login(process.env.T3);
client4.login(process.env.T4);
client5.login(process.env.T5);
client6.login(process.env.T6);


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)


client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd1') {
message.channel.send('#daily')
  }
  if(message.content === 'c1'){
message.channel.send('#credits')
  }
  if(message.content === 'r1'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p1') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s1")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd2') {
message.channel.send('#daily')
  }
  if(message.content === 'c2'){
message.channel.send('#credits')
  }
   if(message.content === 'r2'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p2') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s2")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd3') {
message.channel.send('#daily')
  }
  if(message.content === 'c3'){
message.channel.send('#credits')
  }
  if(message.content === 'r3'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p3') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s3")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client4.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd4') {
message.channel.send('#daily')
  }
  if(message.content === 'c4'){
message.channel.send('#credits')
  }
  if(message.content === 'r4'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p4') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s4")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});
 
client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd5') {
message.channel.send('#daily')
  }
  if(message.content === 'c5'){
message.channel.send('#credits')
  }
  if(message.content === 'r5'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p5') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s5")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
  if (message.content === 'd6') {
message.channel.send('#daily')
  }
  if(message.content === 'c6'){
message.channel.send('#credits')
  }
  if(message.content === 'r6'){
message.channel.send("#rep "+"<@" + myid + ">")
  }
  if (message.content === 'p6') {
message.channel.send('#profile')
  }
  if(message.content.startsWith("s6")) {
    var text = message.content.split(' ').slice(1).join(' ');
     message.channel.send(text);
  }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)


client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``1`` ")
    }
});

client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``2`` ")
    }
});

client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``3`` ")
    }
});

client4.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``4`` ")
    }
});

client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``5`` ")
    }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
    if(message.content === prefix+'number'){
        message.channel.send(" My Token Is ``6`` ")
    }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)

client.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 45000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 45000; x++) {
        message.channel.send(`**??? ???? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 45000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 45000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 45000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
var argresult = message.content.split(` `).slice(1).join(' ');
if (!developers.includes(message.author.id)) return;
if (message.content === prefix+'fast') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 45000; x++) {
        message.channel.send(`**??? ???? ??? ?? ??? **[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});


//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)
client.on('message', message => {
if (message.content === 'daily') {
      let count = 0;
      let ecount = 0;
      for(let x = 1; x < 2; x++) {
        message.channel.send(`d1[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.on('message', message => {
  if (message.content === 'd1[ " 1 " ]') {
message.channel.send('#daily')
  }
});

//??????????????????????????????????????????????????????????????????//BY: VZX (Angry Black)

client2.on('message', message => {
if (message.content === 'd1[ " 1 " ]') {
      let count = 0;
      let ecount = 0;
      for(let x = 1; x < 51; x++) {
        message.channel.send(`d2[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => {
  if (message.content === 'd2[ " 50 " ]') {
message.channel.send('#daily')
  } 
});

//??????????????????????????????????????????????????????????????????//BY: VZX (Angry Black)

client3.on('message', message => {
if (message.content === 'd2[ " 50 " ]') {
      let count = 0;
      let ecount = 0;
      for(let x = 1; x < 51; x++) {
        message.channel.send(`d3[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => {
  if (message.content === 'd3[ " 50 " ]') {
message.channel.send('#daily')
  }
});

//??????????????????????????????????????????????????????????????????//BY: VZX (Angry Black)

client4.on('message', message => {
if (message.content === 'd3[ " 50 " ]') {
      let count = 0;
      let ecount = 0;
      for(let x = 1; x < 51; x++) {
        message.channel.send(`d4[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => {
  if (message.content === 'd4[ " 50 " ]') {
message.channel.send('#daily')
  } 
});

//??????????????????????????????????????????????????????????????????//BY: VZX (Angry Black)

client5.on('message', message => {
if (message.content === 'd4[ " 50 " ]') {
      let count = 0;
      let ecount = 0;
      for(let x = 1; x < 51; x++) {
        message.channel.send(`d5[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client5.on('message', message => {
  if (message.content === 'd5[ " 50 " ]') {
message.channel.send('#daily')
  }

});

//??????????????????????????????????????????????????????????????????//BY: VZX (Angry Black)

client6.on('message', message => {
if (message.content === 'd5[ " 50 " ]') {
      let count = 0;
      let ecount = 0;
      for(let x = 1; x < 51; x++) {
        message.channel.send(`d6[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client6.on('message', message => {
  if (message.content === 'd6[ " 50 " ]') {
message.channel.send('#daily')
  } 
});

//✠▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ☢❦۞❦☢ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬✠//BY: VZX (Angry Black)
