import { useEffect, useState } from 'react';


export const DogImage = () => {


    const [dogImage, setDogImage] = useState(null);

    // this is the hook you use for ANY async code... period
    // useEffect gets CALLED AFTER EVERY RENDER!!!!!!!!!!!!
    // useEffect gets CALLED AFTER EVERY RENDER!!!!!!!!!!!!
    //... UNLESS you pass in an array of dependencies, in which case it will only run when the 
    // dependencies change
    useEffect(async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const { message } = await response.json();
        
        // calling setDogImage tells react to re-render the page
        setDogImage(message);
    },
        [] // if you want use effect to get called only ONCE, you can pass an empty array
    )

    return <img src={dogImage}></img>
}