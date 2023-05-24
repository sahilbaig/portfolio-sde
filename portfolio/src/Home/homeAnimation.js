import Typewriter from 'typewriter-effect';

const HomeAnimation =  () =>{
    return (

        <div>
            <Typewriter
        options={{
            autoStart: true,
            loop: true,
        }}
        onInit={(typewriter) => {
            typewriter.typeString("A lot of data is being rendered here , can we check how long it is before it breaks up ")
              .pauseFor(2500)
              .typeString("<br> Hello again")
              .deleteAll()
              .start();
          }}
/>
        </div>
        
    )
}

export default HomeAnimation;