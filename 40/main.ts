//define the make_album function
function make_album(artist_name: string, album_title : string, tracks? : number){
     let album:{artist:string, title : string,track? : number} = {
        artist:artist_name,
        title : album_title,  
     };
       if(tracks !== undefined){
         album.track = tracks;
       }
      return album;
    }
//calling 3 functions and creating 3 variables with different value
let album1 = make_album('asimazhar' , "Albumtitle  1");
 
let album2  = make_album("dj","Albumtitle  2");

//calling a make_album function with third perameter
let album3 = make_album("asim jofa","Albumtitle 3", 15);

//print values of our object created my function
console.log(album1);
console.log(album2);
console.log(album3);