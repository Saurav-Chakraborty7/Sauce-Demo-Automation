class Utilities{
    async convertTextToNumber(text){
        const value = parseFloat(text.replace(/[$]/g,""));
        return value;
    }
    async randomNumber(max,min){
        const randomValue = Math.floor(Math.random()*(max-min+1))+min;
        return randomValue;
    }
    

    async generateString(length) {
        const characters ='abcdefghijklmnopqrstuvwxyz';
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}   

}
    
module.exports = new Utilities();