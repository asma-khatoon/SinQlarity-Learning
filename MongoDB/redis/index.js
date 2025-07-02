const redis =require('redis');
const redisUrl = 'redis://192.168.1.6:6379';
const client =redis.createClient(redisUrl);
client.set("name", "redis");
console.log("Data is set now");
client.get("name",(error,value)=>{
    if(error){
        console.log(error);
        }
        console.log(value);
});