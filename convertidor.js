var m3u8ToMp4 = require("m3u8-to-mp4");
var converter = new m3u8ToMp4();
let origin =  process.env.url;
let output = process.env.name;

(async function() {
  await converter
    .setInputFile(origin)
    .setOutputFile(output)
    .start();
 
  console.log("File converted", origin, output);
})(); 
//https://19-12.b.cdn13.com/hls/009/789/237/720p.h264.mp4/index.m3u8?cdn_creation_time=1545526800&cdn_ttl=14400&cdn_cv_data=181.49.88.98&cdn_hash=2d28d0990b7ba58cd5e65f68a878eec7
