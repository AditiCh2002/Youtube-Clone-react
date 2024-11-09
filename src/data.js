export const API_KEY = 'AIzaSyBIiU8JNdvYN_QKKf1oHh-Mt5e9VoSLrZI';   

export const value_converter = (value) => {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else
    {
        return value;
    }
}