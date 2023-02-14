exports.handler= async function(event,callback){
    const options = {
        method: 'GET',
        headers: {
          'Accept-Encoding': 'application/gzip',
          'X-RapidAPI-Key': process.env.REACT_APP_TESTING_API,
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
      }
      try{
        const response=await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages?target=en', options);
        const data=await response.json()
        return{
            statusCode:200,
            body:JSON.stringify(data)
        }
      }catch(error){
        const { status, statusText, headers, data } = error.response
        return {
        statusCode: status,
        body: JSON.stringify({status, statusText, headers, data})
        }
      }

}