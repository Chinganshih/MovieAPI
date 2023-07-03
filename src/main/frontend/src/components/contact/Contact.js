import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <div className='contact'>
        

        <div className="float-container">

        <div className="float-child">
            <img src="https://sominchw.sirv.com/Images/Clothes/pexels-leticia-ribeiro-2112651.jpg" width="100%" height="100%" alt=""/>
        </div>
        
        <div className="float-child">
          <form>
            
              <p>Contact Us</p>
              <label for="username"> Username:</label>
              <input type="text" placeholder="Anna" required></input>

              <label for="email"> Email:</label>
              <input type="text" placeholder="xxxx@gmail.com" required></input>

              <label for="phone"> Phone:</label>
              <input type="text" placeholder="416-854-1220" required></input>

              <label for="msg"> Message:</label>
              <textarea placeholder='Hello there, this is some text in a text area'>
                
              </textarea>

              <button className="submit" type='submit'>Submit</button>
          </form>
            
        </div>

        </div>



        
    </div>
  )
}

export default Contact