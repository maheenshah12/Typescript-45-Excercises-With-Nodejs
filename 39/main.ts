//creating a function with parameters which return a values in string
function city_country(city:string, country:string)  :string{
    return `${city},${country}`;
}

// calling a function and print the returned value
city_country("karachi","pakistan");

console.log(city_country("karachi","pakistan"));
city_country("delhi", "india")
console.log(city_country("delhi", "india"))
city_country("berlin","germany")
console.log(city_country("berlin","germany"))