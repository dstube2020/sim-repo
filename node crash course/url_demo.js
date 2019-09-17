const url = require('url')
 const myUrl = new URL('http://google.com')

 //serialized URL
 console.log(myUrl.href)
 console.log(myUrl.host)

 //host name (does not get the port number)
 console.log(myUrl.hostname);

 //pathname
 console.log(myUrl.pathname);

 //serialized query

 console.log(myUrl.search)
 
 //params object
 console.log(myUrl.searchParams)

 //add param

 myUrl.searchParams.append('abc', '123')

 //loop through params

 myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));